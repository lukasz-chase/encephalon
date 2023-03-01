"use client";
import { useSession } from "next-auth/react";
import NewChat from "./NewChat";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import { useQuery } from "@tanstack/react-query";
import { fetchChats } from "@/api";
import { Chat } from "@/types/Chat";

function SideBar() {
  const { data: session } = useSession();
  const { data: chats, isLoading } = useQuery<Chat[]>({
    queryFn: fetchChats,
    queryKey: ["chats"],
  });
  return (
    <div className="p-2 flex-col h-full">
      <div className="flex-1">
        <div>
          <NewChat />
          <div className="hidden sm:inline">{/* <ModelSelection /> */}</div>
          <div className="flex flex-col space-y-2 my-2">
            {isLoading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
            {chats?.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
