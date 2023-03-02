"use client";
import { inputs } from "@/descriptions/chatInputs";
import { Message } from "@/types/Chat";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import ModelSelection from "./ModelSelection";
import NumberInput from "./NumberInput";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const [model, setModel] = useState('gpt-3.5-turbo"');
  const [parameters, setParameters] = useState({
    temperature: 0.5,
    topP: 1,
    frequencyPenalty: 0,
    presencePenalty: 0,
  });
  const { mutate } = useMutation(
    async (message: Message) =>
      await axios.post("/api/message/addMessage", message),
    {
      onSuccess: (data: any) => {
        queryClient.invalidateQueries(["messages"]);
        setPrompt("");
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message);
        }
      },
    }
  );
  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    const message: Message = {
      text: input,
      author: session?.user?.email!,
      chatId: chatId,
    };
    toast.loading("ChatGPT is thinking...");
    mutate(message);
  };
  const handleParameters = (e: ChangeEvent<HTMLInputElement>) =>
    setParameters({ ...parameters, [e.target.name]: e.target.valueAsNumber });
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <div>
        <ModelSelection model={model} setModel={setModel} />
        {inputs.map((input) => (
          <NumberInput
            key={input.id}
            {...input}
            handleParameters={handleParameters}
          />
        ))}
      </div>
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          type="text"
          placeholder="type your message here..."
        />
        <button
          disabled={!prompt || !session}
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          type="submit"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
