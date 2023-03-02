"use client";
import { signOut, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Nav = () => {
  const { data: session } = useSession();
  return (
    <div className="flex justify-between items-center px-5 py-3 text-black uppercase border-b-2 border-dark-accent font-bold">
      <h1>Encephalon</h1>
      <ul className="flex flex-row gap-5 items-center justify-center">
        <li>
          <Link href="/chat">ChatGPT</Link>
        </li>
        <li>
          <Link href="/dalle">Dalle</Link>
        </li>
        {session ? (
          <>
            <li onClick={() => signOut()}>SIGN OUT</li>
            <img
              className="h-8 w-8 rounded-full"
              src={session.user?.image!}
              alt="Profile picture"
            />
          </>
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
