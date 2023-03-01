import Link from "next/link";
import Image from "next/image";
import futureSVG from "@/assets/future.svg";
import BoxyButton from "@/components/BoxyButton";

export default function Home() {
  return (
    <div className="flex-col flexCenter h-full">
      <div className="flex flex-col w-full h-1/2 bg-no-repeat bg-center p-5 md:w-3/4 2xl:w-1/2  lg:p-0">
        <BoxyButton
          text={"Explore AI possibilities"}
          link={{ to: "/chat", label: "Talk with ChatGPT" }}
          textOrder={"order-first"}
          shadow={"shadow-darkBoxy"}
        />
        <Image
          className="absolute top-[60%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 -z-50"
          src={futureSVG.src}
          alt="future"
          priority
          height={350}
          width={350}
        />
        <BoxyButton
          text={"Use your creativity"}
          link={{ to: "/dalle", label: "Create images" }}
          textOrder={"order-last"}
          shadow={"shadow-mainBoxy"}
        />
      </div>
    </div>
  );
}
