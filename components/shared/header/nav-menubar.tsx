import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  BookHeart,
  Home,
  Mailbox,
  Menu,
  MessageCircleQuestion,
  Phone,
  ShoppingCart,
  Store,
} from "lucide-react";

const navLinks = [
  {
    path: "/",
    name: "Home",
    icon: <Home />,
  },
  {
    path: "/products",
    name: "Shop",
    icon: <Store />,
  },
  {
    path: "/cart",
    name: "Cart",
    icon: <ShoppingCart />,
  },
  {
    path: "/about",
    name: "About",
    icon: <BookHeart />,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <Phone />,
  },
  {
    path: "/newsletter",
    name: "NewsLetter",
    icon: <Mailbox />,
  },
  {
    path: "/faq",
    name: "FAQ",
    icon: <MessageCircleQuestion />,
  },
];

export default function NavMenubar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Menu size={30} />
        </MenubarTrigger>
        <MenubarContent align="end">
          {navLinks.map((nl, idx) => {
            return (
              <Link key={nl.name} href={nl.path}>
                <MenubarItem className="gap-3">
                  {nl.icon}
                  {nl.name}
                </MenubarItem>
                {!!navLinks[idx + 1] && <MenubarSeparator />}
              </Link>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
