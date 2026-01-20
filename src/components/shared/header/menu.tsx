import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./them-toggle";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      {/* desktop navigation */}
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ThemeToggle />
        <Button asChild variant={"ghost"}>
          <Link href="/cart">
            <ShoppingCart />
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon />
          </Link>
        </Button>
      </nav>
      {/* mobile navigation */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ThemeToggle />
            <Button asChild variant={"ghost"}>
              <Link href={"/cart"}>
                <ShoppingCart />
              </Link>
            </Button>
            <Button asChild>
              <Link href="/sign-in">
                <UserIcon />
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
