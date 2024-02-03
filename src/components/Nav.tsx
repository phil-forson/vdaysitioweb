"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const { user, isLoaded } = useUser();
  return (
    <header>
      <nav className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-l-0 border-r-0 border-b-gray-600">
        <div className="flex lg:flex-1 justify-between">
          <a href="/" className="-m-1.5 p-1.5">
            VDaySitio Web
          </a>
          {isLoaded ? (
            user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link href={"/accounts/create"}>Create Account</Link>
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </nav>
    </header>
  );
}
