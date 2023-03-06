import { Message } from "@/types/Chat";
import { ClipboardIcon } from "@heroicons/react/24/solid";
import { toast } from "react-hot-toast";

const Message = ({ text, author, avatar }: Message) => {
  const isChatGPT = author === "ChatGPT";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };
  const parts = text.split(/(<code>[^<]*<\/code>)/gi);

  return (
    <div
      className={`py-5 flex items-start justify-start text-white ${
        isChatGPT && "bg-[#434654]"
      }`}
    >
      <div className="flex px-2 gap-5 max-w-2xl md:mx-20 lg:mx-60">
        <img src={avatar} alt="" className="h-8 w-8 hidden md:block " />
        <p className="pt-1 text-sm">
          {parts.map((part, index) => {
            if (part.startsWith("<code>")) {
              return (
                <pre key={index} className="bg-black p-3 whitespace-pre-wrap">
                  {part.replace(/<\/?code>/gi, "")}
                </pre>
              );
            } else {
              return <span key={index}>{part}</span>;
            }
          })}
        </p>
      </div>
      {isChatGPT && (
        <div className="w-5 tooltip tooltip-left" data-tip="Copy to clipboard">
          <ClipboardIcon
            onClick={copyToClipboard}
            className="h-4 w-4 mr-3 cursor-pointer hover:text-light-accent"
          />
        </div>
      )}
    </div>
  );
};

export default Message;
