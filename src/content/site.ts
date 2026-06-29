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
    question: "How do I choose the right property in Noida NCR?",
    answer:
      "Start with your purpose, budget, preferred location, property type, and timeline. Then compare builder record, RERA status, possession stage, total cost, daily travel, and resale or rental logic before booking a visit.",
  },
  {
    question: "Which areas does Aambey Estates cover?",
    answer:
      "The current focus is Noida, Noida Expressway, Greater Noida, Noida Extension, Ghaziabad, and nearby NCR residential markets.",
  },
  {
    question: "Should I buy a new launch or a ready-to-move flat?",
    answer:
      "New launch projects can suit buyers who want more unit choice or a longer payment plan. Ready-to-move and resale homes can suit buyers who want to see the actual society, check documents, and move faster.",
  },
  {
    question: "Do you help with resale flats in Noida NCR?",
    answer:
      "Yes. Aambey Estates helps buyers compare resale flats and ready-to-move homes with checks around registry, dues, loan status, society condition, maintenance, and negotiation scope.",
  },
  {
    question: "Do you handle new launch projects?",
    answer:
      "Yes. The advisory covers new launch and under-construction projects with guidance on builder record, RERA registration, payment plan, possession timeline, location fit, and site visits.",
  },
  {
    question: "Do you help property investors?",
    answer:
      "Yes. For investors, the focus is on location demand, project category, entry price, transfer rules, rental or resale logic, and risk checks. Aambey Estates does not promise guaranteed returns.",
  },
  {
    question: "Do you verify RERA, pricing, and documents?",
    answer:
      "The process is document-first and encourages verification of RERA, approvals, dues, registry, transfer rules, possession details, pricing, and availability before commitment.",
  },
  {
    question: "Can you help plan site visits?",
    answer:
      "Yes. Share your budget, preferred area, purpose, and timeline. Aambey Estates can help create a cleaner shortlist so your site visits are focused and useful.",
  },
  {
    question: "Do you quote live prices or availability online?",
    answer:
      "No. Prices and availability change often. The website gives guidance, but final price, inventory, payment plan, and legal or loan details should be confirmed by a human advisor.",
  },
] as const;
export const authorityLinks = [
  { label: "UP RERA", href: "https://www.up-rera.in/" },
  { label: "Noida Authority", href: "https://noidaauthorityonline.in/" },
  { label: "Greater Noida Authority", href: "https://www.greaternoidaauthority.in/" },
];
