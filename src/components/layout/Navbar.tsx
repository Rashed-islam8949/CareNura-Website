"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-x-8">
          <Logo />
          <nav className="hidden md:flex items-center gap-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-base font-semibold text-white/85 transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.8)] group px-1 py-1"
              >
                {link.name}
                <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-gradient-to-r from-teal-400 to-blue-500 scale-x-0 transition-transform origin-left group-hover:scale-x-100 rounded-full" />
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-x-4">
          <div className="hidden md:block">
            <Link href="/start-a-project">
              <Button variant="default" size="sm" className="font-medium">
                Start a Project
              </Button>
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <Logo />
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link href="/start-a-project" onClick={() => setIsOpen(false)} className="mt-4">
                    <Button variant="default" className="w-full">
                      Start a Project
                    </Button>
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
