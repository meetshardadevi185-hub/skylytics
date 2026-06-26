import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ArrowUpRight,Play  } from "lucide-react";

const navItems = ["Home", "Services", "About Us", "Portfolio", "Process", "Blog", "Contact"];

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
    "/Icons/webdesignicon.png"
  ],
  [
    "Digital Marketing",
    "Data-driven campaigns that increase visibility, generate leads and boost sales.",
    "/Icons/digitalmarketingicon.png"
  ],
  [
    "SEO & Analytics",
    "Improve rankings, track performance and grow your traffic with advanced SEO.",
    "/Icons/seoanalysisicon.png"
  ],
  [
    "Branding",
    "Build a memorable brand identity that connects and creates lasting impact.",
    "/Icons/brandingicon.png"
  ],
];

const reels = [
  ["Web Design Trends 2024", "12.4K", "reel-one"],
  ["SEO Tips That Actually Work", "8.7K", "reel-two"],
 
  ["Landing Page Tips That Convert", "11.6K", "reel-four"],
  ["Brand Identity Design Process", "9.3K", "reel-five"],
];

const projects = [
  ["Fintech Website", "Web Design", "/Projects/fintech.png"],
  ["E-commerce Store", "Development", "/Projects/ecommerce.png"],
  ["SaaS Landing Page", "Web Design", "/Projects/saas.png"],
  ["Brand Identity Design", "Branding", "/Projects/branding.png"],
];

function Icon({ name }: { name: string }) {
  return <span className={`icon icon-${name}`} aria-hidden="true" />;
}

const pageStyles = String.raw`
:root {
  --ink: #071117;
  --muted: #5d6864;
  --green: #073f35;
  --green-2: #0e6b58;
  --line: #dfe4dc;
  --white: #ffffff;
  --shadow: 0 22px 70px rgba(11, 38, 32, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at 76% 7%, rgba(8, 83, 68, 0.12), transparent 24rem),
    radial-gradient(circle at 13% 53%, rgba(189, 178, 138, 0.12), transparent 26rem),
    linear-gradient(180deg, #fffdfa 0%, #f8f6ef 66%, #f4f0e7 100%);
  color: var(--ink);
  font-family: Arial, Helvetica, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  border: 0;
  color: inherit;
  font: inherit;
  cursor: pointer;
}

.section-shell {
  width: min(1120px, calc(100% - 48px));
  margin-inline: auto;
}

.site-header {
  width: min(1140px, calc(100% - 48px));
  min-height: 92px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  position: relative;
  z-index: 5;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: max-content;
}

.brand-mark {
  width: 58px;
  height: 36px;
  position: relative;
  display: inline-block;
}

.brand-mark span {
  position: absolute;
  inset: 7px 5px;
  border: 8px solid var(--green);
  border-radius: 999px;
  transform: rotate(35deg);
  box-shadow: inset 4px -4px 0 rgba(255, 255, 255, 0.8);
}

.brand-mark span + span {
  transform: rotate(-35deg);
  border-color: #1f806b;
  mix-blend-mode: multiply;
}

.brand strong,
.brand small {
  display: block;
  line-height: 0.9;
  letter-spacing: 0;
}

.brand strong {
  font-size: 24px;
}

.brand small {
  font-size: 16px;
  font-weight: 800;
  color: var(--green);
}

nav {
  display: flex;
  align-items: center;
  gap: 34px;
  font-size: 13px;
  font-weight: 800;
}

nav a {
  position: relative;
  padding: 14px 0;
  font-weight: 600;
}

nav a.active::after {
  content: "";
  width: 32px;
  height: 2px;
  background: var(--green);
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}

.pill {
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 18px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.pill:hover {
  transform: translateY(-2px);
}

.pill.dark {
  background: var(--green);
  color: var(--white);
  box-shadow: 0 12px 24px rgba(7, 63, 53, 0.22);
}

.pill.light {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid #96aaa2;
  color: var(--ink);
}

.pill.glass {
  min-height: 40px;
  color: var(--white);
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.pill.small {
  min-height: 42px;
  padding-inline: 20px;
}

.menu-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  gap: 3px;
  background: var(--white);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.menu-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
}

.menu-button span {
  width: 16px;
  height: 1.8px;
  border-radius: 999px;
  background: var(--ink);
}

.hero {
  position: relative;
  min-height: 72vh;
  display: flex;
  align-items: center;
  padding: 40px 0;
  overflow: hidden;
}

.hero::before {
  background: linear-gradient(
    90deg,
    rgba(255,255,255,.95) 0%,
    rgba(255,255,255,.85) 30%,
    rgba(255,255,255,.25) 55%,
    rgba(255,255,255,0) 100%
  );
}

.hero-copy {
  position: relative;
  z-index: 3;
}

.hero-visual {
  position: absolute;
  inset: 0;
  z-index: 1;
  min-height: 570px;
  overflow: visible;
}

.hero-visual img {
  object-fit: contain;
  object-position: center right;
  opacity: 1;
  filter: drop-shadow(0 24px 40px rgba(10, 48, 40, 0.13));
}

.eyebrow,
.overline,
.section-heading p,
.showreel p,
.cta p {
  margin: 0 0 18px;
  text-transform: uppercase;
  color: #173f37;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.eyebrow {
  width: fit-content;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: inset 0 0 0 1px rgba(18, 60, 50, 0.08);
}

.eyebrow span {
  width: 7px;
  height: 7px;
  display: inline-block;
  margin-right: 8px;
  border-radius: 50%;
  background: #28836d;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  max-width: 540px;
  margin-bottom: 16px;
  font-size: clamp(38px, 4vw, 58px);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: 0;
}

h1 em,
h2 em {
  color: var(--green-2);
  font-style: normal;
}

.lead {
  max-width: 540px;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.75;
}

.hero-buttons,
.metric-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
}

.hero-buttons {
  margin-top: 30px;
}

.play-mini {
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border: 1px solid #9aa9a4;
  border-radius: 50%;
  font-size: 9px;
}

.metric-row {
  margin-top: 50px;
  gap: 30px;
}

.metric {
  min-width: 96px;
  display: grid;
  grid-template-columns: 28px 1fr;
  column-gap: 10px;
  align-items: center;
}

.metric strong {
  font-size: 17px;
}

.metric span:last-child {
  grid-column: 2;
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
}

.icon {
  width: 28px;
  height: 28px;
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
  background: #fff;
  box-shadow: inset 0 0 0 1px var(--line);
  position: relative;
}

.icon::before,
.icon::after {
  content: "";
  position: absolute;
}

.icon-badge::before {
  width: 10px;
  height: 10px;
  border: 2px solid var(--green);
  border-radius: 50%;
}

.icon-badge::after {
  width: 13px;
  height: 8px;
  border: 2px solid var(--green);
  border-top: 0;
  bottom: 6px;
  border-radius: 0 0 10px 10px;
}

.analytics-card {
  position: absolute;
  z-index: 2;
  width: 122px;
  min-height: 130px;
  border-radius: 10px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
}

.analytics-card small {
  color: var(--muted);
  font-size: 10px;
  font-weight: 800;
}

.analytics-card strong {
  display: block;
  margin-top: 12px;
  font-size: 20px;
}

.traffic {
  right: 120px;
  bottom: 70px;
}

.leads {
  right: -4px;
  bottom: 100px;
}

.sparkline {
  display: block;
  height: 42px;
  margin-top: 15px;
  background: linear-gradient(135deg, transparent 38%, rgba(21, 127, 92, 0.25) 39% 52%, transparent 53%), linear-gradient(160deg, transparent 35%, #68b98b 36% 40%, transparent 41%);
}

.bars {
  height: 58px;
  margin-top: 14px;
  display: flex;
  align-items: end;
  gap: 8px;
}

.bars i {
  width: 12px;
  border-radius: 5px 5px 0 0;
  background: linear-gradient(#9bc9a5, #0e614f);
}

.bars i:nth-child(1) { height: 20px; }
.bars i:nth-child(2) { height: 28px; }
.bars i:nth-child(3) { height: 38px; }
.bars i:nth-child(4) { height: 48px; }
.bars i:nth-child(5) { height: 58px; }
.trusted {
  min-height: 65px;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr repeat(6, auto);
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 30px rgba(8, 34, 28, 0.06);
}

.trusted strong {
  font-size: 10px;
  text-transform: uppercase;
  line-height: 1.3;
  white-space: nowrap;
}

.trusted span {
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #e3e7e4;
  padding-left: 16px;
  color: #6a6f6c;
  font-size: 16px;
  font-weight: 700;
}
.services {
  padding: 80px 0 30px;
}

.section-heading.centered {
  max-width: 460px;
  margin: 0 auto 48px;
  text-align: center;
}

.section-heading.centered p {
  margin: 0 0 14px;
  text-transform: uppercase;
  color: var(--muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.service-card {
  padding: 30px 26px 32px;
  border: 1px solid rgba(12, 48, 40, 0.08);
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(8, 34, 28, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 50px rgba(8, 34, 28, 0.1);
}

.service-art {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;
  height: 96px;
}

.service-image {
  width: auto;
  height: 156px;
  object-fit: contain;
}

.service-card h3 {
  margin-bottom: 10px;
  font-size: 19px;
  font-weight: 700;
  color: var(--ink);
}

.service-card p {
  color: var(--muted);
  line-height: 1.7;
  font-size: 14px;
  margin-bottom: 18px;
}

.service-card a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
}

.service-card a span {
  transition: transform 0.25s ease;
}

.service-card a:hover span {
  transform: translateX(4px);
}

@media (max-width: 980px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .service-grid {
    grid-template-columns: 1fr;
  }
}

.section-heading.centered {
  max-width: 430px;
  margin: 0 auto 38px;
  text-align: center;
}

h2 {
  margin-bottom: 0;
  font-size: clamp(30px, 3vw, 42px);
  line-height: 1.12;
  letter-spacing: 0;
}

.service-grid,
.project-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.service-card,
.project-card,
.quote-card {
  border: 1px solid rgba(12, 48, 40, 0.1);
  border-radius: 18px;
 background: rgb(255, 255, 255);
  box-shadow: 0 18px 45px rgba(8, 34, 28, 0.08);
}

.service-card {
  padding: 22px;
}

.service-art {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background: transparent;
  height: auto;
  padding: 0;
}

.service-art .icon {
  width: 74px;
  height: 74px;
  box-shadow: 0 18px 28px rgba(7, 63, 53, 0.14);
}

.icon-window::before {
  inset: 16px;
  border: 3px solid var(--green);
  border-radius: 5px;
}

.icon-megaphone::before {
  width: 35px;
  height: 24px;
  border-radius: 4px 22px 22px 4px;
  background: linear-gradient(90deg, #f3f0e8 25%, var(--green));
  transform: rotate(-12deg);
}

.icon-chart::before {
  width: 38px;
  height: 38px;
  border-left: 8px solid var(--green);
  border-bottom: 8px solid var(--green);
  border-radius: 50%;
}

.icon-tag::before {
  width: 36px;
  height: 28px;
  border-radius: 8px;
  background: linear-gradient(135deg, #e9e2d3, var(--green-2));
  transform: rotate(-18deg);
}

.service-card h3,
.project-card h3 {
  margin-bottom: 10px;
  font-size: 20px;
}

.service-card p {
  color: var(--muted);
  line-height: 1.7;
  font-size: 14px;
}

.service-card a {
  display: inline-flex;
  margin-top: 10px;
  gap: 10px;
  font-size: 13px;
  font-weight: 900;
}

.showreel {
  min-height: 300px;
  margin-top: 34px;
  padding: 38px;
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  color: var(--white);
  background: radial-gradient(circle at 68% 24%, rgba(101, 197, 168, 0.42), transparent 16rem), linear-gradient(120deg, rgba(1, 23, 19, 0.95), rgba(4, 52, 43, 0.9)), url("/hero-infinity.png") center right / contain no-repeat;
}

.showreel h2 {
  margin-bottom: 16px;
}

.showreel span {
  display: block;
  max-width: 360px;
  color: #d9e3de;
  line-height: 1.7;
  font-size: 14px;
}

.showreel .pill {
  margin-top: 24px;
}

.play-button {
  width: 86px;
  height: 86px;
  justify-self: center;
  border: 5px solid #fff;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  font-size: 32px;
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.24);
}

.showreel ul {
  position: absolute;
  left: 48%;
  right: 12%;
  bottom: 22px;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  list-style: none;
  color: #e4eee9;
  font-size: 13px;
  font-weight: 800;
}

.showreel li::before {
  content: "o";
  margin-right: 8px;
}
/* ===========================
   Instagram Reels
=========================== */

.reels{
    display:grid;
    grid-template-columns:300px 1fr auto;
    align-items:center;
    gap:24px;
    padding:80px 0;
}

/* Left Content */

.reel-copy{
    width:100%;
    max-width:360px;
}

.reel-copy .overline{
    font-size:13px;
    font-weight:700;
    letter-spacing:.12em;
    color:#0a5144;
    margin-bottom:14px;
}

.reel-copy h2{
    font-size:30px;
    line-height:1.15;
    font-weight:600;
    margin-bottom:18px;
}

.reel-copy span{
    display:block;
    font-size:18px;
    line-height:1.7;
    color:#707070;
    margin-bottom:22px;
}

.reel-copy .pill{
    height:46px;
    padding:0 22px;
}

/* Cards */

.reel-track{
    display:flex;
    gap:14px;
    min-width:0;      /* allows flex children to shrink below content size */
    overflow:hidden;
}


.reel-card{

      flex:1 1 0;        /* cards share available space equally */
    min-width:120px;   /* don't get too cramped */
    max-width:170px;   /* don't get too wide either */
    height:250px;

    border-radius:20px;

    padding:18px;

    position:relative;

    overflow:hidden;

    display:flex;

    flex-direction:column;

    justify-content:space-between;

    box-shadow:0 18px 40px rgba(0,0,0,.12);

    transition:.35s;
}

.reel-card:hover{

    transform:translateY(-10px);
}

.reel-card::before{

    content:"";

    position:absolute;

    inset:0;

    background:
    radial-gradient(circle at 50% 48%,
    rgba(255,255,255,.22),
    transparent 25%),

    linear-gradient(to top,
    rgba(0,0,0,.55),
    rgba(0,0,0,.1));

}

/* Different Backgrounds */

.reel-one{ background: url("/Reels/web-design-trends.png") center/cover; }
.reel-two{ background: url("/Reels/seo-tips.png") center/cover; }

.reel-four{ background: url("/Reels/landing-page-tips.png") center/cover; }
.reel-five{ background: url("/Reels/brand-identity.png") center/cover; }

.reel-card h3{

    position:relative;

    z-index:2;

    color:white;

    font-size:17px;

    line-height:1.35;

    font-weight:700;
}
.reel-card button{
    position: absolute;
    left: 50%;
    top: 52%;
    transform: translate(-50%, -50%);

    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background: #fff;
    color: #073f35;

    z-index: 2;
    transition: all .3s ease;

    box-shadow: 0 8px 20px rgba(0,0,0,.15);
}

.reel-card button svg{
    width: 20px;
    height: 20px;
    margin-left: 2px; /* visually centers the play icon */
}

.reel-card:hover button{
    transform: translate(-50%, -50%) scale(1.08);
}

.reel-card small{

    position:relative;

    z-index:2;

    color:white;

    font-weight:700;

    font-size:15px;
}

/* Arrow */

.round.next{
    width:60px;
    height:60px;

    display:flex;
    align-items:center;
    justify-content:center;

    border-radius:50%;
    background:#fff;
    color:#073f35;

    flex-shrink:0;

    box-shadow:0 10px 25px rgba(0,0,0,.12);
    transition:all .3s ease;
}

.round.next svg{
    width:22px;
    height:22px;
    stroke-width:2.5;
}

.round.next:hover{
    transform:translateX(6px);
    box-shadow:0 15px 35px rgba(0,0,0,.18);
}

.round.next:hover{

    transform:translateX(6px);

}

.work-head {
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 250px 1fr max-content;
  align-items: end;
  gap: 26px;
}

.work-head h2{
    font-size: 25px;
    line-height: 1.6;
    font-weight: 700;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.filters button {
  min-height: 36px;
  padding: 0 20px;
  border: 1px solid #d3d9d5;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.66);
  font-size: 12px;
}

.filters .selected {
  color: #fff;
  background: var(--green);
}

.work-head > a {
  font-size: 13px;
  font-weight: 900;
}

.project-card {
  padding: 16px;
  position: relative;
}

.project-thumb {
  height: 150px;
  margin-bottom: 14px;
  border-radius: 7px;
  background: #eef1f0;
  position: relative;
  overflow: hidden;
}

.project-thumb::before,

.project-thumb::before {
  inset: 20px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.08);
}

.project-thumb::after {
  width: 56px;
  height: 56px;
  right: 28px;
  bottom: 26px;
  border-radius: 50%;
  background: var(--green);
}



.project-one { background: linear-gradient(135deg, #d8ebf5, #f9fbfd); }
.project-two { background: linear-gradient(135deg, #ffd2df, #caf2db); }
.project-three { background: linear-gradient(135deg, #e5d9ff, #f7f8ff); }
.project-four { background: linear-gradient(135deg, #edeae2, #d7c3ac); }

.project-card span {
  color: var(--muted);
  font-size: 12px;
}

.project-card > a {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  position: absolute;
  right: 16px;
  bottom: 18px;
  border: 1px solid #bfd0ca;
  border-radius: 50%;
  color: var(--green);
  font-weight: 900;
}

.wide-stats {
  min-height: 120px;
  margin-top: 4px;
  padding: 20px 42px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  border-radius: 14px;
  background: radial-gradient(circle at 50% 50%, rgba(17, 104, 84, 0.2), transparent 9rem), rgba(255, 255, 255, 0.72);
  box-shadow: var(--shadow);
}

.wide-stats div {
  display: grid;
  grid-template-columns: 44px 1fr;
  column-gap: 16px;
  align-items: center;
  border-right: 1px solid #dce2de;
}

.wide-stats div:last-child {
  border-right: 0;
}

.wide-stats .icon {
  width: 38px;
  height: 38px;
}

.wide-stats strong {
  font-size: 30px;
}

.wide-stats span:last-child {
  grid-column: 2;
  color: var(--muted);
}

.testimonials {
  padding: 56px 0 48px;
  display: grid;
  grid-template-columns: 220px 1fr 260px;
  align-items: center;
  gap: 44px;
}

.section-heading:not(.centered) p {
  margin-bottom: 12px;
}

.arrows {
  display: flex;
  gap: 16px;
  margin-top: 30px;
}

.quote-card {
  min-height: 190px;
  padding: 32px 42px;
}

.quote-mark {
  color: var(--green);
  font-size: 48px;
  font-weight: 900;
}

.quote-card p {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.75;
}

.person {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 20px;
}

.person > span {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: white;
  background: linear-gradient(135deg, #d7874a, #5d2f1e);
  font-size: 12px;
  font-weight: 900;
}

.person small {
  display: block;
  margin-top: 4px;
  color: var(--muted);
}

.quote-visual {
  width: 190px;
  height: 170px;
  display: grid;
  place-items: center;
  border-radius: 50% 50% 46% 50%;
  background: linear-gradient(145deg, #98cda8, #0e5b4d);
  color: #fff;
  font-size: 120px;
  line-height: 0;
  box-shadow: 22px 24px 0 #d9d1c4, var(--shadow);
}

.cta {
  min-height: 132px;
  margin-bottom: 0;
  padding: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-radius: 14px;
  color: #fff;
  background: radial-gradient(circle at 82% 48%, rgba(255, 255, 255, 0.28), transparent 14rem), linear-gradient(120deg, #021d19, #084638);
  overflow: hidden;
}

.cta h2 {
  margin-bottom: 10px;
}

.cta span {
  color: #dde9e4;
}

.footer {
  margin-top: 18px;
  background: rgba(245, 241, 232, 0.92);
  border-top: 1px solid #e2ded4;
}

.footer-inner {
  padding: 34px 0 22px;
  display: grid;
  grid-template-columns: 1.45fr 0.8fr 0.9fr 1.3fr;
  gap: 56px;
}

.footer p,
.footer a {
  color: #59635f;
  font-size: 13px;
  line-height: 1.65;
}

.footer h3 {
  margin-bottom: 16px;
  font-size: 15px;
}

.footer a:not(.brand) {
  display: block;
  margin-bottom: 8px;
}

.socials {
  display: flex;
  gap: 18px;
  margin-top: 16px;
  color: var(--green);
  font-weight: 900;
}

.copyright {
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ded9ce;
  color: #6c716f;
  font-size: 12px;
}

@media (max-width: 980px) {
  nav {
    display: none;
  }

  .hero {
    grid-template-columns: 1fr;
    padding-top: 8px;
  }

  .hero-visual {
    min-height: 420px;
    order: -1;
  }

  .trusted,
  .service-grid,
  .project-grid,
  .wide-stats,
  .footer-inner {
    grid-template-columns: repeat(2, 1fr);
  }

  .trusted {
    padding: 24px;
  }

  .trusted strong {
    grid-column: 1 / -1;
  }

  .work-head,
  .reels,
  .testimonials {
    grid-template-columns: 1fr;
  }

  .showreel {
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .showreel ul {
    position: static;
    margin-top: 24px;
  }

  .reel-track {
    overflow-x: auto;
    grid-auto-flow: column;
    grid-auto-columns: minmax(170px, 1fr);
    grid-template-columns: none;
    padding-bottom: 8px;
  }

  .quote-visual {
    justify-self: center;
  }
}

@media (max-width: 640px) {
  .section-shell,
  .site-header {
    width: min(100% - 28px, 1120px);
  }

  .site-header {
    min-height: 78px;
  }

  .brand strong {
    font-size: 19px;
  }

  .brand small {
    font-size: 13px;
  }

  .header-actions .pill {
    display: none;
  }

  h1 {
    font-size: 42px;
  }

  .hero {
    min-height: 0;
  }

  .hero-visual {
    min-height: 310px;
  }

  .analytics-card {
    transform: scale(0.82);
  }

  .traffic {
    right: 82px;
    bottom: 20px;
  }

  .leads {
    right: -14px;
    bottom: 48px;
  }

  .metric-row {
    gap: 18px;
  }

  .trusted,
  .service-grid,
  .project-grid,
  .wide-stats,
  .footer-inner {
    grid-template-columns: 1fr;
  }

  .trusted span {
    border-left: 0;
    border-top: 1px solid #cfd7d1;
    padding-top: 14px;
  }

  .showreel,
  .cta {
    padding: 24px;
  }

  .play-button {
    width: 72px;
    height: 72px;
  }

  .work-head {
    align-items: start;
  }

  .wide-stats {
    gap: 18px;
  }

  .wide-stats div {
    border-right: 0;
  }

  .testimonials {
    gap: 24px;
  }

  .quote-card {
    padding: 24px;
  }

  .cta,
  .copyright {
    align-items: flex-start;
    flex-direction: column;
  }
  
}
`;

export default function Home() {
  return (
    <>
      <style>{pageStyles}</style>
      <main>
        <header className="site-header">
          <a href="#" className="flex items-center">
            <Image
              src="/Logo/logo.png"
              alt="Spark Skylytics Logo"
              width={220}
              height={60}
              priority
              className="h-auto w-auto max-h-[60px] object-contain"
            />
          </a>
          <nav aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item} className={item === "Home" ? "active" : ""} href="#">
                {item}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="pill dark" href="#contact">Let&apos;s Talk <span>-&gt;</span></a>
            <button className="menu-button" aria-label="Open menu">
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Marketing & Web Design Agency</p>
            <h1>Ideas That Spark. Strategies That Soar. <em>Growth</em> That Lasts.</h1>
            <p className="lead">
              We create stunning websites and high-performing marketing strategies that attract the right audience,
              build strong brands and drive real results.
            </p>
            <div className="hero-buttons">
              <a className="pill dark" href="#contact">Get a Free Quote <span>-&gt;</span></a>
              <a className="pill light" href="#work">View Our Work <span className="play-mini">&gt;</span></a>
            </div>
            <div className="metric-row">
              {stats.map(([value, label]) => (
                <div className="metric" key={label}>
                  <Icon name="badge" />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <Image src="/hero-bg.png" alt="Glossy infinity rocket brand visual" priority fill sizes="(max-width: 900px) 100vw, 58vw" />

          </div>
        </section>

        <section className="trusted section-shell">
          <strong>Trusted by<br />Growing Brands</strong>
          {["webflow", "slack", "Notion", "HubSpot", "loom", "airbnb"].map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </section>

        <section className="services section-shell">
          <div className="section-heading centered">
            <p>What We Do</p>
            <h2>
              Digital Solutions That <em>Drive Real Impact</em>
            </h2>
          </div>

          <div className="service-grid">
            {services.map(([title, text, image]) => (
             <article className="service-card" key={title}>
  <div className="service-art">
    <Image
      src={image}
      alt={title}
      width={120}
      height={120}
      className="service-image"
    />
  </div>

  <h3>{title}</h3>
  <p>{text}</p>

  <a href="#">
    Explore More <span>-&gt;</span>
  </a>
</article>
            ))}
          </div>
        </section>

        <section className="showreel section-shell">
          <div>
            <p>Immersive Experience</p>
            <h2>We Bring Ideas<br />To Life In 3D</h2>
            <span>Experience our work like never before with interactive 3D animations that showcase creativity and strategy in action.</span>
            <a className="pill glass" href="#">Watch 3D Showreel <span>&gt;</span></a>
          </div>
          <button className="play-button" aria-label="Play showreel">&gt;</button>
          <ul>
            <li>Interactive</li>
            <li>Engaging</li>
            <li>Impressive</li>
          </ul>
        </section>

        <section className="reels section-shell">
          <div className="reel-copy">
            <p className="overline">Instagram Reels</p>
            <h2>Tips, Insights &<br />Behind The Scenes</h2>
            <span>Short videos. Real strategies. Big impact.</span>
            <a className="pill dark small" href="#">Follow Us <span>o</span></a>
          </div>
          <div className="reel-track">
            {reels.map(([title, views, tone]) => (
              <article className={`reel-card ${tone}`} key={title}>
                <h3>{title}</h3>
<button className="play-btn" aria-label={`Play ${title}`}>
    <Play size={22} fill="currentColor" />
</button>
<small className="reel-views">
  <ArrowUpRight size={16} strokeWidth={3} />
  {views}
</small>
              </article>
            ))}
          </div>
<button className="round next" aria-label="Next reel">
  <ArrowRight size={26} strokeWidth={2.5} />
</button>
        </section>

        <section id="work" className="work section-shell">
          <div className="work-head">
            <div>
              <p className="overline">Our Work</p>
              <h2>Transforming Ideas<br />Into Digital Success</h2>
            </div>
            <div className="filters">
              {["All", "Web Design", "E-commerce", "Branding", "Digital Marketing"].map((item) => (
                <button className={item === "All" ? "selected" : ""} key={item}>{item}</button>
              ))}
            </div>
            <a href="#">View All Projects <span>-&gt;</span></a>
          </div>
          <div className="project-grid">
           {projects.map(([title, type, image]) => (
  <article className="project-card" key={title}>
    <div className="project-thumb">
      <Image
        src={image}
        alt={title}
        fill
        className="project-image"
      />
    </div>

    <div className="project-content">
      <div>
        <h3>{title}</h3>
        <span>{type}</span>
      </div>

      <a href="#" aria-label={`Open ${title}`}>
        <ArrowUpRight size={18} />
      </a>
    </div>
  </article>
))}
          </div>
        </section>

        <section className="wide-stats section-shell">
          {[
            ["200+", "Happy Clients"],
            ["350+", "Projects Completed"],
            ["98%", "Client Satisfaction"],
            ["5+", "Years Experience"],
          ].map(([value, label]) => (
            <div key={label}>
              <Icon name="badge" />
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="testimonials section-shell">
          <div className="section-heading">
            <p>Client Love</p>
            <h2>What Our Clients Say</h2>
            <div className="arrows"><button>&lt;-</button><button>-&gt;</button></div>
          </div>
          <article className="quote-card">
            <span className="quote-mark">&quot;</span>
            <p>SparkSkylytics transformed our online presence completely. The new website is beautiful, fast and the marketing strategy brought us 3X more leads in just a few months.</p>
            <div className="person">
              <span>RM</span>
              <div><strong>Rohit Mehta</strong><small>CEO, FinBudget</small></div>
            </div>
          </article>
          <div className="quote-visual" aria-hidden="true">&quot;</div>
        </section>

        <section id="contact" className="cta section-shell">
          <div>
            <p>Ready To Grow?</p>
            <h2>Let&apos;s Build Something Amazing Together</h2>
            <span>Your growth story starts with the right strategy.</span>
          </div>
          <a className="pill light" href="#">Get a Free Quote <span>-&gt;</span></a>
        </section>

        <footer className="footer">
          <div className="footer-inner section-shell">
            <div>
              <a href="#">
                <Image
                  src="/Logo/logo.png"
                  alt="Spark Skylytics Logo"
                  width={220}
                  height={60}
                />
              </a>
              <p>We help businesses grow online with creative web design and result-driven marketing strategies.</p>
              <div className="socials"><span>o</span><span>in</span><span>x</span><span>&gt;</span></div>
            </div>
            <div>
              <h3>Quick Links</h3>
              {["Home", "About Us", "Services", "Portfolio", "Blog", "Contact"].map((item) => <a key={item} href="#">{item}</a>)}
            </div>
            <div>
              <h3>Services</h3>
              {["Web Design", "Digital Marketing", "SEO & Analytics", "Branding", "PPC Advertising"].map((item) => <a key={item} href="#">{item}</a>)}
            </div>
            <div>
              <h3>Contact Us</h3>
              <p>+91 98765 43210<br />hello@sparkskylytics.com<br />123, Business Park, New Delhi, India<br />Mon - Fri: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="copyright section-shell">
            <span>&copy; 2024 SparkSkylytics. All rights reserved.</span>
            <span>Privacy Policy &nbsp;&nbsp;&nbsp; Terms & Conditions</span>
          </div>
        </footer>
      </main>
    </>
  );
}
