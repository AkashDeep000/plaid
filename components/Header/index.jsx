"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Github, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  console.log(session);
  const [isClickedSingin, setIsClickedSignin] = useState(false);

  return (
    <div className="border-b bg-primary-foreground text-primary px-4 py-2 flex justify-between items-center">
      <Link className="text-xl font-bold" href="/">
        Plaid
      </Link>
      {status === "authenticated" ? (
        <Avatar>
          <AvatarImage src={session?.user?.image} />
          <AvatarFallback>{session?.user?.name[0]}</AvatarFallback>
        </Avatar>
      ) : (
        <Button variant="outline" onClick={() => {
        setIsClickedSignin(true)
        signIn("github")
          
        }}>
          {status === "loading" || isClickedSingin ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Github className="mr-2 h-4 w-4" />
          )}
          Signin with Github
        </Button>
      )}
    </div>
  );
};

export default Header;
