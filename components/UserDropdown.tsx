"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import NavIteams from "./NavIteams";
import { signOut } from "@/lib/actions/auth.actions";

const UserDropdown = ({user}:{user:User}) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-in");
  };
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-400  hover:text-yellow-500 !bg-transparent !ring-0 !outline-none
"
        >
          <Avatar className="h-8 w-8 ">
            <AvatarImage src="https://avatars.githubusercontent.com/u/188599940?s=400&u=58b54c67880f8325c7933a6318610389c23f7e9e&v=4" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold capitalize">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400 capitalize">
              {user.name.split(" ")[0]}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400 mt-2 mr-2 sm:mr-0">
        <DropdownMenuLabel>
          <div className="flex relative items-center gap-3 py-2 ">
            <Avatar className="h-10 w-10 ">
              <AvatarImage src="https://avatars.githubusercontent.com/u/188599940?s=400&u=58b54c67880f8325c7933a6318610389c23f7e9e&v=4" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-sm text-gray-500 ">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem
          onClick={() => handleSignOut()}
          className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointerz"
        >
          <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
          Logout
        </DropdownMenuItem>

        <nav className="sm:hidden">
          <NavIteams />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
