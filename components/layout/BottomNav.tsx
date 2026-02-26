"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Wallet, Gamepad2 } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/useAuthStore";

// Order: Games (left), Home (center), Wallet (right)
const navItems = [
  { label: "Games", href: "/games", icon: Gamepad2 },
  { label: "Home", href: "/", icon: Home },
  { label: "Wallet", href: "/wallet", icon: Wallet },
];

const AUTH_PATHS = ["/login", "/signup"];

export default function BottomNav() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAuthPage = AUTH_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));
  const shouldShow = mounted && isAuthenticated && !isAuthPage;

  const isActive = (href: string) => {
    if (!mounted) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  if (!shouldShow) return null;

  return (
    <motion.nav
      initial={{ x: "-50%", y: 24, opacity: 0 }}
      animate={{ x: "-50%", y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-8 left-1/2 z-50 rounded-full backdrop-blur-md border border-divider bg-background/70 dark:bg-black/60 px-10 py-4 shadow-lg"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-12">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full ${
                active
                  ? "text-primary opacity-100"
                  : "text-foreground opacity-60 hover:opacity-80"
              }`}
              aria-current={active ? "page" : undefined}
              aria-label={item.label}
            >
              <Icon size={32} strokeWidth={1.5} aria-hidden />
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
