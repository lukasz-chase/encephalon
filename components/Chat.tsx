"use client";
import { fetchMessages } from "@/api";
import { Message as MessageType } from "@/types/Chat";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Message from "./Message";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = useSession();
  const { data: messages, isLoading } = useQuery<MessageType[]>({
    queryFn: () => fetchMessages(chatId),
    queryKey: ["messages"],
  });
  console.log(messages);
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {messages?.length === 0 && (
        <>
          <p className="mt-10 text-center text-white">
            Type a prompt in below to get started!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 animate-bounce text-white" />
        </>
      )}
      {messages?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}

export default Chat;
