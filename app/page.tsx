import Image from "next/image";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  ArrowLeft,
  Quote,
} from "lucide-react";

const stats = [
  ["200+", "Happy Clients"],
  ["98%", "Project Success"],
  ["5+", "Years Experience"],
  ["24/7", "Support"],
];

const services = [
  [
    "Web Design",
    "Beautiful, responsive websites that engage visitors and convert them into customers.",
    "/Icons/webdesignicon.png",
  ],
  [
    "Digital Marketing",
    "Data-driven campaigns that increase visibility, generate leads and boost sales.",
    "/Icons/digitalmarketingicon.png",
  ],
  [
    "SEO & Analytics",
    "Improve rankings, track performance and grow your traffic with advanced SEO.",
    "/Icons/seoanalysisicon.png",
  ],
  [
    "Branding",
    "Build a memorable brand identity that connects and creates lasting impact.",
    "/Icons/brandingicon.png",
  ],
];

const brands = [
  "webflow",
  "slack",
  "Notion",
  "HubSpot",
  "loom",
  "airbnb",
];


const reels = [
  ["Web Design Trends 2024", "12.4K", "/Reels/web-design-trends.png"],
  ["SEO Tips That Actually Work", "8.7K", "/Reels/seo-tips.png"],
  ["Landing Page Tips That Convert", "11.6K", "/Reels/landing-page-tips.png"],
  ["Brand Identity Design Process", "9.3K", "/Reels/brand-identity.png"],
];

const projects = [
  ["Fintech Website", "Web Design", "/Projects/fintech.png"],
  ["E-commerce Store", "Development", "/Projects/ecommerce.png"],
  ["SaaS Landing Page", "Web Design", "/Projects/saas.png"],
  ["Brand Identity Design", "Branding", "/Projects/branding.png"],
];

const shell = "mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[calc(100%_-_28px)]";
const pill =
  "inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold leading-none transition hover:-translate-y-0.5";
const darkPill = `${pill} bg-[#073f35] text-white shadow-[0_12px_24px_rgba(7,63,53,0.22)]`;
const lightPill = `${pill} border border-[#96aaa2] bg-white/80 text-[#071117]`;

function BadgeIcon() {
  return (
    <span className="relative inline-grid size-7 place-items-center rounded-full bg-white shadow-[inset_0_0_0_1px_#dfe4dc]">
      <span className="absolute top-[7px] size-2.5 rounded-full border-2 border-[#073f35]" />
      <span className="absolute bottom-1.5 h-2 w-3 rounded-b-full border-2 border-t-0 border-[#073f35]" />
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_76%_7%,rgba(8,83,68,0.12),transparent_24rem),radial-gradient(circle_at_13%_53%,rgba(189,178,138,0.12),transparent_26rem),linear-gradient(180deg,#fffdfa_0%,#f8f6ef_66%,#f4f0e7_100%)] text-[#071117]">
      <Navbar />

      <section
        className={`${shell} relative flex min-h-[72vh] items-center py-10
  max-lg:min-h-auto max-lg:flex-col max-lg:gap-10 max-lg:py-8`}
      >
        {/* Left Content */}
        <div
          className="relative z-10 max-w-[540px]
    max-lg:max-w-full max-lg:text-center"
        >
          <p
            className="mb-5 w-fit rounded-full bg-white/80 px-3.5 py-2
      text-[11px] font-black uppercase tracking-[0.08em] text-[#173f37]
      shadow-[inset_0_0_0_1px_rgba(18,60,50,0.08)]
      max-lg:mx-auto"
          >
            <span className="mr-2 inline-block size-[7px] rounded-full bg-[#28836d]" />
            Marketing & Web Design Agency
          </p>

          <h1
            className="mb-4 text-[clamp(38px,4vw,58px)] font-semibold leading-[1.05]
      max-md:text-[44px]
      max-sm:text-[34px]"
          >
            Ideas That Spark. Strategies That Soar.
            <em className="not-italic text-[#0e6b58]"> Growth</em> That Lasts.
          </h1>

          <p
            className="text-[17px] leading-[1.75] text-[#5d6864]
      max-md:text-[16px]
      max-sm:text-[15px]"
          >
            We create stunning websites and high-performing marketing strategies
            that attract the right audience, build strong brands and drive real
            results.
          </p>

          {/* Buttons */}
          <div
            className="mt-8 flex flex-wrap items-center gap-4
      max-lg:justify-center"
          >
            <a className={darkPill} href="#contact">
              Get a Free Quote <ArrowRight size={16} />
            </a>

            <a className={lightPill} href="#work">
              View Our Work
              <Play
                className="rounded-full border border-[#9aa9a4] p-1"
                size={24}
              />
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-12 flex items-center justify-between gap-6
      max-lg:grid max-lg:grid-cols-2
      max-sm:grid-cols-2
      max-lg:gap-y-6"
          >
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="grid min-w-24 grid-cols-[28px_1fr] items-center gap-x-2.5
          max-lg:justify-self-center"
              >
                <BadgeIcon />
                <strong className="text-[17px]">{value}</strong>
                <span className="col-start-2 text-[11px] font-bold text-[#5d6864]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div
          className="absolute inset-0 z-0
    max-lg:relative
    max-lg:h-[380px]
    max-md:h-[320px]
    max-sm:h-[260px]
    max-lg:w-full"
        >
          <Image
            src="/hero-infinity.png"
            alt="Hero"
            fill
            priority
            className="object-contain object-right max-lg:object-center"
          />
        </div>
      </section>

      <section className={`${shell} mt-8`}>
        <div className="rounded-2xl border border-[#e8e6df] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col lg:flex-row lg:items-center">

            {/* Left */}
            <div className="border-b border-[#e6e6e6] px-6 py-5 text-center lg:min-w-[170px] lg:border-b-0 lg:border-r lg:text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6d6d6d]">
                Trusted By
              </p>
              <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.08em] text-[#1d1d1d]">
                Growing Brands
              </p>
            </div>

            {/* Brands */}
            <div className="grid flex-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {brands.map((brand, index) => (
                <div
                  key={brand}
                  className={`
              flex h-20 items-center justify-center
              border-[#e6e6e6]
              lg:border-r
              ${index !== brands.length - 1
                      ? "border-b lg:border-b-0"
                      : ""
                    }
              ${index === brands.length - 1
                      ? "lg:border-r-0"
                      : ""
                    }
            `}
                >
                  <span className="text-lg font-semibold tracking-tight text-[#555] sm:text-xl">
                    {brand}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className={`${shell} py-20`}>
        <div className="mx-auto mb-12 max-w-[460px] text-center">
          <p className="mb-3.5 text-xs font-extrabold uppercase tracking-[0.1em] text-[#5d6864]">What We Do</p>
          <h2 className="text-[clamp(30px,3vw,42px)] leading-[1.12]">
            Digital Solutions That <em className="not-italic text-[#0e6b58]">Drive Real Impact</em>
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {services.map(([title, text, image]) => (
            <article className="rounded-[18px] border border-[#0c30281a] bg-white p-6 shadow-[0_18px_45px_rgba(8,34,28,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(8,34,28,0.1)]" key={title}>
              <div className="mb-5 flex items-center justify-center">
                <Image src={image} alt={title} width={120} height={120} className="h-36 w-auto object-contain" />
              </div>
              <h3 className="mb-2.5 text-xl font-bold">{title}</h3>
              <p className="mb-5 text-sm leading-7 text-[#5d6864]">{text}</p>
              <a className="inline-flex items-center gap-2 text-sm font-bold" href="#">
                Explore More <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={`${shell} relative grid min-h-[300px] grid-cols-[0.9fr_1fr] items-center overflow-hidden rounded-[18px] bg-[radial-gradient(circle_at_68%_24%,rgba(101,197,168,0.42),transparent_16rem),linear-gradient(120deg,rgba(1,23,19,0.95),rgba(4,52,43,0.9)),url('/hero-infinity.png')] bg-right bg-no-repeat p-10 text-white max-lg:grid-cols-1 max-sm:p-6`}>
        <div>
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.08em] text-white/80">Immersive Experience</p>
          <h2 className="mb-4 text-[clamp(30px,3vw,42px)] leading-[1.12]">We Bring Ideas<br />To Life In 3D</h2>
          <span className="block max-w-[360px] text-sm leading-7 text-[#d9e3de]">Experience our work like never before with interactive 3D animations that showcase creativity and strategy in action.</span>
          <a className={`${pill} mt-6 border border-white/20 bg-white/10 text-white`} href="#">
            Watch 3D Showreel <Play size={16} />
          </a>
        </div>
        <button className="size-20 justify-self-center rounded-full border-[5px] border-white bg-white/10 text-3xl shadow-[0_0_50px_rgba(255,255,255,0.24)]" aria-label="Play showreel">
          <Play className="mx-auto" fill="currentColor" />
        </button>
        <ul className="absolute bottom-5 left-[48%] right-[12%] flex list-none justify-around text-sm font-extrabold text-[#e4eee9] max-lg:static max-lg:mt-6">
          {["Interactive", "Engaging", "Impressive"].map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className={`${shell} grid grid-cols-[300px_1fr_auto] items-center gap-6 py-20 max-lg:grid-cols-1`}>
        <div className="max-w-[360px]">
          <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#0a5144]">Instagram Reels</p>
          <h2 className="mb-4 text-3xl font-semibold leading-[1.15]">Tips, Insights &<br />Behind The Scenes</h2>
          <span className="mb-5 block text-lg leading-8 text-[#707070]">Short videos. Real strategies. Big impact.</span>
          <a className={darkPill} href="#">Follow Us <ArrowUpRight size={16} /></a>
        </div>
        <div className="flex min-w-0 gap-3.5 overflow-hidden max-lg:overflow-x-auto max-lg:pb-2">
          {reels.map(([title, views, image]) => (
            <article
              className="relative flex h-[250px] min-w-[120px] flex-1 basis-0 flex-col justify-between overflow-hidden rounded-[20px] bg-cover bg-center p-4.5 text-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition hover:-translate-y-2 max-lg:min-w-[170px]"
              key={title}
              style={{ backgroundImage: `linear-gradient(to top,rgba(0,0,0,.55),rgba(0,0,0,.1)),url(${image})` }}
            >
              <h3 className="relative z-10 text-[17px] font-bold leading-[1.35]">{title}</h3>
              <button className="absolute left-1/2 top-[52%] z-10 grid size-[52px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#073f35] shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition hover:scale-105" aria-label={`Play ${title}`}>
                <Play size={22} fill="currentColor" />
              </button>
              <small className="relative z-10 flex items-center gap-1 text-[15px] font-bold">
                <ArrowUpRight size={16} strokeWidth={3} />
                {views}
              </small>
            </article>
          ))}
        </div>
        <button className="grid size-[60px] place-items-center rounded-full bg-white text-[#073f35] shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition hover:translate-x-1.5" aria-label="Next reel">
          <ArrowRight size={26} strokeWidth={2.5} />
        </button>
      </section>

      <section id="work" className={shell}>
        <div className="mb-6 grid grid-cols-[250px_1fr_max-content] items-end gap-6 max-lg:grid-cols-1">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.08em] text-[#173f37]">Our Work</p>
            <h2 className="text-2xl font-bold leading-relaxed">Transforming Ideas<br />Into Digital Success</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["All", "Web Design", "E-commerce", "Branding", "Digital Marketing"].map((item) => (
              <button className={`min-h-9 rounded-full border px-5 text-xs ${item === "All" ? "border-[#073f35] bg-[#073f35] text-white" : "border-[#d3d9d5] bg-white/70"}`} key={item}>{item}</button>
            ))}
          </div>
          <a className="text-sm font-black" href="#">View All Projects <ArrowRight className="inline" size={16} /></a>
        </div>
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {projects.map(([title, type, image]) => (
            <article className="relative rounded-[18px] border border-[#0c30281a] bg-white p-4 shadow-[0_18px_45px_rgba(8,34,28,0.08)]" key={title}>
              <div className="relative mb-3.5 h-[150px] overflow-hidden rounded-md bg-[#eef1f0]">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
              <h3 className="mb-2.5 text-xl font-bold">{title}</h3>
              <span className="text-xs text-[#5d6864]">{type}</span>
              <a className="absolute bottom-4 right-4 grid size-9 place-items-center rounded-full border border-[#bfd0ca] text-[#073f35]" href="#" aria-label={`Open ${title}`}>
                <ArrowUpRight size={18} />
              </a>
            </article>
          ))}
        </div>
      </section>

     <section
  className={`${shell} mt-6 rounded-2xl border border-[#e8e6df] bg-white/80 px-6 py-5 shadow-[0_12px_35px_rgba(8,34,28,0.08)]`}
>
  <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
    {[
      ["200+", "Happy Clients"],
      ["350+", "Projects Completed"],
      ["98%", "Client Satisfaction"],
      ["5+", "Years Experience"],
    ].map(([value, label], index) => (
      <div
        key={label}
        className={`flex items-center gap-3 ${
          index !== 3 ? "lg:border-r lg:border-[#e6ebe8] lg:pr-4" : ""
        } max-lg:border-none`}
      >
        {/* Icon */}
        <div className="scale-90">
          <BadgeIcon />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-[28px] font-bold leading-none text-[#071117]">
            {value}
          </h3>

          <p className="mt-1 text-[13px] font-medium text-[#6b7471]">
            {label}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      <section
        className={`${shell} grid grid-cols-[220px_1fr_240px] items-center gap-10 py-16 max-lg:grid-cols-1 max-lg:text-center`}
      >
        {/* Left Side */}
        <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.08em] text-[#173f37]">
            Client Love
          </p>

          <h2 className="text-[clamp(28px,3vw,42px)] font-semibold leading-[1.15]">
            What Our Clients Say
          </h2>

          <div className="mt-8 flex gap-4">
            <button className="grid h-11 w-11 place-items-center rounded-full border border-[#dfe4df] bg-white shadow-md transition hover:bg-[#073f35] hover:text-white">
              <ArrowLeft size={18} />
            </button>

            <button className="grid h-11 w-11 place-items-center rounded-full border border-[#dfe4df] bg-white shadow-md transition hover:bg-[#073f35] hover:text-white">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <div>
          <article className="rounded-[24px] border border-[#ece8e1] bg-white px-8 py-7 shadow-[0_18px_45px_rgba(8,34,28,0.08)] max-sm:px-6">

            <Quote
              size={36}
              strokeWidth={3}
              className="mb-5 text-[#0b6b58]"
            />

            <p className="text-[17px] leading-8 text-[#2d2d2d]">
              SparkSkylytics transformed our online presence completely.
              The new website is beautiful, fast and the marketing strategy
              brought us 3X more leads in just a few months.
            </p>

            <div className="mt-7 flex items-center gap-4 max-lg:justify-center">
              <Image
                src="/testimonial/user.png"
                alt="Rohit Mehta"
                width={52}
                height={52}
                className="rounded-full border"
              />

              <div>
                <h4 className="font-semibold text-[#111]">
                  Rohit Mehta
                </h4>

                <p className="text-sm text-[#6d6d6d]">
                  CEO, FinBudget
                </p>
              </div>
            </div>
          </article>

          {/* Slider Dots */}

          <div className="mt-6 flex justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#d7d7d7]" />
            <span className="h-2 w-2 rounded-full bg-[#0b6b58]" />
            <span className="h-2 w-2 rounded-full bg-[#d7d7d7]" />
          </div>
        </div>

        {/* Right Side Image */}

        <div className="flex justify-center">
          <Image
            src="/Icons/testimonial-chat-removebg-preview.png"
            alt="3D Chat"
            width={320}
            height={320}
            className="object-contain"
          />
        </div>
      </section>
   <section
  id="contact"
  className={`${shell} flex items-center justify-between gap-6 rounded-2xl bg-[radial-gradient(circle_at_82%_48%,rgba(255,255,255,0.18),transparent_14rem),linear-gradient(120deg,#021d19,#084638)] px-8 py-6 text-white max-lg:flex-col max-lg:items-start max-lg:px-6 max-lg:py-5`}
>
  <div>
    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.12em] text-white/70">
      Ready To Grow?
    </p>

    <h2 className="text-[clamp(24px,2.6vw,36px)] font-semibold leading-tight">
      Let's Build Something Amazing Together
    </h2>

    <p className="mt-2 text-[15px] text-[#d8e5df]">
      Your growth story starts with the right strategy.
    </p>
  </div>

  <a
    href="#"
    className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold text-[#073f35] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
  >
    Get a Free Quote
    <ArrowRight size={18} />
  </a>
</section>

      <Footer />
    </main>
  );
}
