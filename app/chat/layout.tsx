import { ReactNode } from "react";
import SideBar from "@/components//SideBar";

const ChatLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full">
      <div className="bg-[#202123] max-w-xs overflow-y-auto md:min-w-[20rem]">
        <SideBar />
      </div>
      <div className="bg-[#343541] flex-1">{children}</div>
    </div>
  );
};

export default ChatLayout;
