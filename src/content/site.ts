import { env } from "@/env";

const phoneNumber = env.NEXT_PUBLIC_PHONE_NUMBER;
const whatsappNumber = env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const email = env.NEXT_PUBLIC_CONTACT_EMAIL;

export const siteConfig = {
  name: "Aambey Estates",
  url: env.NEXT_PUBLIC_SITE_URL,
  description:
    "Aambey Estates helps buyers and investors compare new launch projects, resale flats, high-rise societies, builder inventory, and investor exit opportunities across Noida, Greater Noida, and Ghaziabad.",
  keywords: [
    "property in Noida",
    "flats in Noida",
    "new launch projects in Noida",
    "resale flats in Noida",
    "Greater Noida property consultant",
    "Ghaziabad flats",
    "Noida Extension flats",
    "Yamuna Expressway property",
    "property consultant in Noida NCR",
  ],
  contact: {
    phoneLabel: env.NEXT_PUBLIC_PHONE_LABEL,
    phoneHref: `tel:${phoneNumber}`,
    whatsappHref: `https://wa.me/${whatsappNumber}`,
    email,
    emailHref: `mailto:${email}`,
  },
  googleSiteVerification: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
} as const;
export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Locations", href: "/#locations" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;
export const services = [
  {
    slug: "new-launch-projects",
    title: "New Launch",
    description:
      "Compare upcoming and under-construction projects with payment-plan, possession, builder, and RERA checks.",
    meta: "New launch projects in Noida NCR with documentation-first advisory.",
  },
  {
    slug: "resale-homes",
    title: "Resale",
    description:
      "Shortlist resale flats and ready-to-move societies with registry, dues, loan, and negotiation checks.",
    meta: "Resale flats and ready-to-move homes in Noida, Greater Noida, and Ghaziabad.",
  },
  {
    slug: "investor-exit-deals",
    title: "Investor Exit Deals",
    description:
      "Evaluate investor exit opportunities with transfer process, pricing, builder policy, and risk flags.",
    meta: "Investor exit property deals in Noida NCR with due-diligence guidance.",
  },
  {
    slug: "builder-inventory",
    title: "Builder Inventory",
    description:
      "Review builder-direct stock with payment schedules, possession status, allocation terms, and documentation checks.",
    meta: "Builder inventory in Noida NCR with payment, possession, and documentation guidance.",
  },
] as const;
export const locations = [
  {
    slug: "noida",
    name: "Noida",
    markets: ["Noida Expressway", "Sector 150", "Sector 137", "Sector 76", "Sector 62"],
    meta: "Property in Noida, flats, resale homes, luxury apartments, and new launch projects.",
  },
  {
    slug: "greater-noida",
    name: "Greater Noida",
    markets: [
      "Greater Noida West",
      "Techzone 4",
      "Pari Chowk",
      "Yamuna Expressway",
      "Noida Extension",
    ],
    meta: "Greater Noida flats, Noida Extension property, and Yamuna Expressway projects.",
  },
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    markets: ["Indirapuram", "Vaishali", "Raj Nagar Extension", "Siddharth Vihar", "Vasundhara"],
    meta: "Ghaziabad flats, resale homes, and ready-to-move societies.",
  },
] as const;
export const faqs = [
  {
    question: "Does Aambey Estates cover only Noida NCR?",
    answer: "Yes. The current focus is Noida, Greater Noida, and Ghaziabad.",
  },
  {
    question: "Do you handle resale as well as new launches?",
    answer:
      "Yes. The advisory covers new launch projects, resale flats, builder inventory, high-rise societies, and investor exit opportunities.",
  },
  {
    question: "Do you verify RERA and documents?",
    answer:
      "The process is documentation-first and encourages verification of RERA, approvals, dues, registry, transfer rules, and possession details before commitment.",
  },
] as const;
export const authorityLinks = [
  { label: "UP RERA", href: "https://www.up-rera.in/" },
  { label: "Noida Authority", href: "https://noidaauthorityonline.in/" },
  { label: "Greater Noida Authority", href: "https://www.greaternoidaauthority.in/" },
];
