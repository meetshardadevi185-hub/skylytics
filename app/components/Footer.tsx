import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const quickLinks = ["Home", "About Us", "Services", "Portfolio", "Blog", "Contact"];
const serviceLinks = ["Web Design", "Digital Marketing", "SEO & Analytics", "Branding", "PPC Advertising"];

export default function Footer() {
  return (
    <footer className="mt-5 border-t border-[#e2ded4] bg-[#f5f1e8]/90">
      <div className="mx-auto grid w-[min(1120px,calc(100%_-_48px))] grid-cols-[1.45fr_0.8fr_0.9fr_1.3fr] gap-14 py-8 max-lg:grid-cols-2 max-sm:w-[calc(100%_-_28px)] max-sm:grid-cols-1">
        <div>
          <a href="#" aria-label="Spark Skylytics home">
            <Image src="/Logo/logo.png" alt="Spark Skylytics Logo" width={220} height={60} className="h-auto w-auto" />
          </a>
          <p className="mt-3 text-sm leading-7 text-[#59635f]">
            We help businesses grow online with creative web design and result-driven marketing strategies.
          </p>
          <div className="mt-4 flex items-center gap-4 font-black text-[#073f35]">
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Facebook">fb</a>
            <a href="#" aria-label="External profile"><ArrowUpRight size={19} /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-[15px] font-bold">Quick Links</h3>
          {quickLinks.map((item) => (
            <a className="mb-2 block text-sm leading-6 text-[#59635f]" href="#" key={item}>{item}</a>
          ))}
        </div>

        <div>
          <h3 className="mb-4 text-[15px] font-bold">Services</h3>
          {serviceLinks.map((item) => (
            <a className="mb-2 block text-sm leading-6 text-[#59635f]" href="#" key={item}>{item}</a>
          ))}
        </div>

        <div>
          <h3 className="mb-4 text-[15px] font-bold">Contact Us</h3>
          <p className="text-sm leading-7 text-[#59635f]">
            +91 98765 43210<br />
            hello@sparkskylytics.com<br />
            123, Business Park, New Delhi, India<br />
            Mon - Fri: 10:00 AM - 6:00 PM
          </p>
        </div>
      </div>
      <div className="mx-auto flex min-h-12 w-[min(1120px,calc(100%_-_48px))] items-center justify-between border-t border-[#ded9ce] text-xs text-[#6c716f] max-sm:w-[calc(100%_-_28px)] max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:gap-2">
        <span>&copy; 2024 SparkSkylytics. All rights reserved.</span>
        <span>Privacy Policy &nbsp;&nbsp;&nbsp; Terms & Conditions</span>
      </div>
    </footer>
  );
}
