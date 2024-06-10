"use client";

import LogIn from "@/app/log-in";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username);
  const isModerator = useAppSelector(
    (state) => state.authReducer.value.isModerator
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogIn />

      <h1 className="text-[20px] text-white font-[600]">
        Username: {username}
      </h1>
      {isModerator && <h1>User {username} is Moderator</h1>}
    </main>
  );
}
