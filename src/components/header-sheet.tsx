import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  //   SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const HeaderSheet = async () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="hidden self-start text-primary font-bold">
            FFY
          </SheetTitle>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-left text-sm leading-tight">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary truncate font-semibold">
                  FoodForYou
                </span>
                <span className="truncate text-xs">Food for everyone</span>
              </div>
            </div>
          </div>
        </SheetHeader>
        <div className="flex flex-col justify-between gap-4]">
          <div className="p-2 flex items-center flex-col gap-4">
            <Link href="#features" className="text-gray-600 hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-primary">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-primary">
              About
            </Link>
            <div className="w-full flex flex-col justify-stretch gap-2">
              <Button>Get Started</Button>
              <Button variant="outline">Sign In</Button>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            {/* <Button type="submit">Save changes</Button> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderSheet;
