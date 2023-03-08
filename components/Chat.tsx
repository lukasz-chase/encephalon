"use client";
import { fetchMessages } from "@/api";
import { Message as MessageType } from "@/types/Chat";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import Loading from "./Loading";
import Message from "./Message";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: messages, isLoading } = useQuery<MessageType[]>({
    queryFn: () => fetchMessages(chatId),
    queryKey: ["messages"],
  });
  const containerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (messages?.length > 0 && messages[0].chatId !== chatId) return <Loading />;
  if (isLoading) return <Loading />;
  return (
    <div
      className="flex-1 overflow-y-auto overflow-x-hidden"
      ref={containerRef}
    >
      {messages?.length === 0 && (
        <>
          <p className="mt-10 text-center text-white">
            Type a prompt in below to get started!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 animate-bounce text-white" />
        </>
      )}
      {messages?.map((message) => (
        <Message key={message.id} {...message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default Chat;
