import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 transition-opacity hover:opacity-80 group",
        className
      )}
    >
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 overflow-hidden shrink-0 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(45,212,191,0.2)] group-hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-shadow duration-300">
        <Image
          src="/images/logo-v3.jpg"
          alt="CareNura Logo"
          fill
          className="object-cover scale-[1.75] -translate-y-[12%]"
          priority
        />
      </div>
      <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tighter bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(45,212,191,0.3)]">
        CareNura
      </span>
    </Link>
  );
}
