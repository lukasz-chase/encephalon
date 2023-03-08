"use client";
import { useSession } from "next-auth/react";
import NewChat from "./NewChat";
import ChatRow from "./ChatRow";
import { useQuery } from "@tanstack/react-query";
import { fetchChats } from "@/api";
import { Chat } from "@/types/Chat";
import Loading from "./Loading";

function SideBar() {
  const { data: session } = useSession();

  const { data: chats, isLoading } = useQuery<Chat[]>({
    queryFn: () => fetchChats(session?.user.id),
    queryKey: ["chats"],
  });

  return (
    <div className="p-2 flex-col h-full">
      <div className="flex-1">
        <div>
          <NewChat />
          <div className="flex flex-col space-y-2 my-2">
            {isLoading && <Loading />}
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
