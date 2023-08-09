"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
//import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  console.log(session);
  return (
    <div className="border-b bg-primary-foreground text-primary px-4 py-2 flex justify-between items-center">
      <Link className="text-xl font-bold" href="/">
        Plaid
      </Link>
      {status === "authenticated" ? (
        <Avatar>
          <AvatarImage src={session?.user?.image}/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ) : (
        <Button onClick={() => signIn("github")}>
          <p className="mr-2 h-4 w-4" /> Signin with Github
        </Button>
      )}
    </div>
  );
};

export default Header;
