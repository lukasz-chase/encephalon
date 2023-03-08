import Link from "next/link";

type buttonProps = {
  text: string;
  link: {
    to: string;
    label: string;
  };
  textOrder: string;
  shadow: string;
};

const boxyButtons = ({ text, link, textOrder, shadow }: buttonProps) => {
  return (
    <div
      className={`flex flexCenter flex-col md:flex-row md:justify-between ${
        textOrder === "order-last" && "mt-auto"
      }`}
    >
      <h1 className={`text-lg ${textOrder} md:text-3xl`}>{text}</h1>
      <div
        className={`w-48 md:w-96  h-12 md:h-24 flexCenter border border-black m-5 bg-white ${shadow} hover:shadow-none transition-shadow delay-75 ease-in-out`}
      >
        <Link href={link.to} className="md:text-3xl text-black">
          {link.label}
        </Link>
      </div>
    </div>
  );
};

export default boxyButtons;
