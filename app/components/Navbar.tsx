import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";

const navItems = ["Home", "Services", "About Us", "Portfolio", "Process", "Blog", "Contact"];

export default function Navbar() {
  return (
    <header className="relative z-20 mx-auto flex min-h-[92px] w-[min(1140px,calc(100%_-_48px))] items-center justify-between gap-6 max-sm:min-h-[78px] max-sm:w-[calc(100%_-_28px)]">
      <a className="flex min-w-max items-center" href="#" aria-label="Spark Skylytics home">
        <Image
          src="/Logo/newlogo.png"
          alt="Spark Skylytics Logo"
          width={220}
          height={60}
          priority
          className="h-auto max-h-[70px] w-auto object-contain"
        />
      </a>

      <nav className="flex items-center gap-8 text-[13px] font-semibold max-lg:hidden" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            className={`relative py-3.5 ${item === "Home" ? "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-8 after:-translate-x-1/2 after:bg-[#073f35]" : ""}`}
            href="#"
            key={item}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a
          className="inline-flex min-h-[38px] items-center justify-center gap-2 rounded-full bg-[#073f35] px-5 text-sm font-semibold leading-none text-white shadow-[0_12px_24px_rgba(7,63,53,0.22)] transition hover:-translate-y-0.5 max-sm:hidden"
          href="#contact"
        >
          Let&apos;s Talk <ArrowRight size={15} />
        </a>
        <button
          className="grid size-10 place-items-center rounded-full bg-white text-[#071117] shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
