import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import ChatLayout from "@/components/ChatLayout";

type Props = {
  params: {
    id: string;
  };
};

const ChatPage = ({ params: { id } }: Props) => {
  return (
    <ChatLayout>
      <div className="flex flex-col h-[93vh] overflow-hidden">
        <Chat chatId={id} />
        <ChatInput chatId={id} />
      </div>
    </ChatLayout>
  );
};

export default ChatPage;
