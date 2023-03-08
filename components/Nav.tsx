"use client";
import { signOut, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Nav = () => {
  const { data: session } = useSession();
  return (
    <div className="flex justify-between items-center px-5 md:px-10 py-3 text-black bg-white uppercase border-b-2 border-dark-accent font-bold text-xs md:text-md ">
      <Link href="/">Encephalon</Link>
      <ul className="flex flex-row gap-2 md:gap-5 items-center justify-center">
        <li>
          <Link href="/chat">ChatGPT</Link>
        </li>
        <li>
          <Link href="/dalle">Dalle</Link>
        </li>
        {session ? (
          <div
            onClick={() => signOut()}
            className="md:tooltip md:tooltip-bottom hover:tooltip-open cursor-pointer"
            data-tip="Sign out"
          >
            <img
              className="h-5 w-5 hidden md:block lg:h-8 lg:w-8 rounded-full"
              src={session.user?.image!}
              alt="Profile picture"
            />
            <p className="block md:hidden">Sign out</p>
          </div>
        ) : (
          <li
            className="bg-light-accent px-5 rounded-lg cursor-pointer"
            onClick={() => signIn("google", undefined, { prompt: "login" })}
          >
            SIGN IN
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
