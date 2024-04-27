"use client";
import SearchDrawer from "./search-drawer";
import NavMenubar from "./nav-menubar";
import UserIcon from "./user-icon";

export default function Navbar() {
  return (
    <nav className="flex items-center">
      <SearchDrawer />
      <UserIcon />
      <NavMenubar />
    </nav>
  );
}
