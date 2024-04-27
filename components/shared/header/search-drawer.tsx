import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchDrawer() {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer mx-2">
        <Search />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-center">Search Plants</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <input
            type="search"
            placeholder="search for plants..."
            className="border w-full p-3 rounded-md text-sm outline-none focus:border-gray-800 text-black"
          />
        </div>
        <DialogFooter>
          <Button
            type="submit"
            variant={"outline"}
            className="bg-gray-200 w-full py-5"
          >
            Search
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
