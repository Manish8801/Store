import { signOutUser } from "@/actions/user.actions";
import { Button } from "@/components/ui/button";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { auth } from "../../../../auth";

const UserProfileButton = async () => {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild>
        <Link href={"/sign-in"}>
          <UserIcon />
        </Link>
      </Button>
    );
  }

  const firstInitial = session?.user?.name?.charAt(0) || "";

  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="relative size-8 rounded-full ml-2 flex items-center"
            >
              {firstInitial}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <div className="text-sm font-medium leading-none">
                {session?.user?.name}
              </div>
              <div className="text-sm  text-muted-foreground font-medium leading-none">
                {session?.user?.email}
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem className="p-0 mb-1">
            <Button
              onClick={signOutUser}
              className="w-full py-4 px-2 h-4 flex items-center justify-start"
              variant={"ghost"}
            >
              Sign Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserProfileButton;
