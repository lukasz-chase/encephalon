"use client";
import { fetchMessages } from "@/api";
import { Message } from "@/types/Chat";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const queryClient = useQueryClient();
  let deleteChatId: string;

  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname, id]);

  useEffect(() => {
    fetchMessages(id).then((data) => setMessages(data));
  }, [id]);

  const { mutate } = useMutation(
    async (id: string) =>
      await fetch(`/api/chat/removeChat`, {
        method: "DELETE",
        body: JSON.stringify({ data: id }),
      }),

    {
      onSuccess: (data: any) => {
        console.log("asd");
        toast.success("deleted a chat", { id: deleteChatId });
        queryClient.invalidateQueries(["chats"]);
      },
      onError: (error) => {
        toast.error("error while deleting a chat", { id: deleteChatId });
      },
    }
  );

  const removeChat = async () => {
    deleteChatId = toast.loading("deleting a chat", { id: deleteChatId });
    mutate(id);
    router.replace("/");
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow justify-center ${
        active && "bg-gray-700/50"
      } text-white`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages.length > 0 ? messages[messages.length - 1]?.text : "New Chat"}
      </p>
      <TrashIcon
        onClick={removeChat}
        className="h-5 w-5 text-gray-700 hover:text-red-700"
      />
    </Link>
  );
}

export default ChatRow;
