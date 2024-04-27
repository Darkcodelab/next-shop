import Link from "next/link";
import { Key, LogOut, Truck, User } from "lucide-react";

import { useEffect, useState } from "react";

import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  MenubarSeparator,
} from "@/components/ui/menubar";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function UserIcon() {
  const { data, status } = useSession();
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  if (status === "loading") {
    return (
      <div className="ml-2 px-4">
        <Skeleton className="h-7 w-7 rounded-full" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="ml-2">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <User size={28} className="cursor-pointer" />
            </MenubarTrigger>
            <MenubarContent align="end">
              <MenubarItem
                className="gap-3"
                onClick={() => signIn(providers?.google.id)}
              >
                <Key />
                Login with Google
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div className="ml-2">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <User size={28} className="cursor-pointer" />
            </MenubarTrigger>
            <MenubarContent align="end">
              <Link href="/profile">
                <MenubarItem className="gap-3">
                  <div>
                    {data.user.image && (
                      <Image
                        src={data.user.image}
                        alt={data?.user?.name || "user icon"}
                        width={30}
                        height={30}
                        className="rounded-full border"
                      />
                    )}
                  </div>
                  Account
                </MenubarItem>
              </Link>
              <MenubarSeparator />
              <Link href="/orders">
                <MenubarItem className="gap-3">
                  <Truck />
                  Orders
                </MenubarItem>
              </Link>
              <MenubarSeparator />
              <MenubarItem
                className="gap-3"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                <LogOut />
                <span>Logout</span>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    );
  }
}
