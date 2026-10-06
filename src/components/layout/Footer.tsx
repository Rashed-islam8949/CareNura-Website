import Link from "next/link";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Premium Digital Engineering & AI Agency. We build intelligent digital solutions that help businesses scale.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/services/web-software" className="hover:text-foreground transition-colors">Web & Software</Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-foreground transition-colors">AI & Automation</Link>
              </li>
              <li>
                <Link href="/services/data-intelligence" className="hover:text-foreground transition-colors">Data & Intelligence</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CareNura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
