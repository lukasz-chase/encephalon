"use client";
import { fetchMessages } from "@/api";
import { Message } from "@/types/Chat";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname, id]);

  const removeChat = async () => {
    router.replace("/");
  };

  const { data: messages, isLoading } = useQuery<Message[]>({
    queryFn: () => fetchMessages(id),
    queryKey: ["message"],
  });
  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow justify-center ${
        active && "bg-gray-700/50"
      } text-white`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages ? messages[messages.length - 1]?.text : "New Chat"}
      </p>
      <TrashIcon
        onClick={removeChat}
        className="h-5 w-5 text-gray-700 hover:text-red-700"
      />
    </Link>
  );
}

export default ChatRow;
