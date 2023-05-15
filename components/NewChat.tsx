"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function NewChat() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    async () => await axios.post("/api/chat/addChat"),
    {
      onSuccess: (data: any) => {
        queryClient.invalidateQueries(["chats"]);
        router.push(`/chat/${data.id}`);
      },
    }
  );

  return (
    <div
      onClick={() => mutate()}
      className="border-gray-700 border chatRow flexCenter text-white p-2 gap-2 cursor-pointer"
    >
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
