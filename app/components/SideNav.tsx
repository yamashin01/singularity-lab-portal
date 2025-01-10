"use client";

import { cn } from "@/lib/utils";
import { Video, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    title: "動画一覧",
    href: "/",
    icon: <Video className="h-5 w-5" />,
  },
  {
    title: "ログアウト",
    href: "/logout",
    icon: <LogOut className="h-5 w-5" />,
  },
];

export function SideNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* モバイル用ハンバーガーメニュー */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
                  pathname === item.href ? "bg-secondary text-foreground" : ""
                )}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* デスクトップ用サイドバー */}
      <div className="hidden lg:flex h-screen w-64 flex-col fixed left-0 top-0 border-r bg-card">
        <div className="p-6">
          <h1 className="text-xl font-bold">
            シンラボ
            <br />
            ポータルサイト
          </h1>
        </div>
        <nav className="flex-1 space-y-2 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
                pathname === item.href ? "bg-secondary text-foreground" : ""
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
