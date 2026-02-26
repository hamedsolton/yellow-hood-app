"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  Link as NextUILink,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Settings, LogOut } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuthStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch {
      toast.error("Couldn't sign out. Please try again.");
      router.push("/");
    }
  };

  return (
    <NextUINavbar
      maxWidth="xl"
      className="bg-background/80 backdrop-blur-md border-b border-divider"
    >
      <NavbarContent justify="start">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex shrink-0 items-center justify-center">
            <Image
              src="/Yellow-hood-light-icon.svg"
              alt="Yellow Hood Logo"
              width={32}
              height={32}
              className="object-contain dark:hidden"
            />
            <Image
              src="/Yellow-hood-dark-icon.svg"
              alt="Yellow Hood Logo"
              width={32}
              height={32}
              className="hidden object-contain dark:block"
            />
          </div>
          <span className="font-bold text-xl text-foreground">Yellow Hood</span>
        </Link>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>
        </NavbarItem>

        {isAuthenticated && user ? (
          <NavbarItem>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  src={user.avatar_url || undefined}
                  name={user.username}
                  size="sm"
                  className="cursor-pointer"
                  showFallback
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User menu" variant="flat">
                <DropdownItem
                  key="profile"
                  textValue="Profile"
                  className="h-14 gap-2"
                >
                  <p className="font-semibold">Signed in as</p>
                  <p className="text-sm text-default-500">{user.email}</p>
                </DropdownItem>
                <DropdownItem
                  key="settings"
                  startContent={<Settings className="w-4 h-4" />}
                  onPress={() => router.push("/settings")}
                >
                  Settings
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  startContent={<LogOut className="w-4 h-4" />}
                  onPress={handleLogout}
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button
              as={Link}
              href="/login"
              variant="flat"
              color="primary"
              size="sm"
            >
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </NextUINavbar>
  );
}
