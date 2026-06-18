import { cn } from "@/lib/utils";

const logos = {
  full: {
    src: "/brand/aambey-estates-logo.svg",
    alt: "Aambey Estates - Finding Spaces. Creating Legacies.",
  },
  lockup: {
    src: "/brand/aambey-estates-lockup.svg",
    alt: "Aambey Estates",
  },
  mark: {
    src: "/brand/aambey-estates-mark.svg",
    alt: "Aambey Estates logo mark",
  },
} as const;

type LogoVariant = keyof typeof logos;

type AambeyLogoProps = {
  variant?: LogoVariant;
  className?: string;
  decorative?: boolean;
  eager?: boolean;
};

export function AambeyLogo({
  variant = "lockup",
  className,
  decorative = false,
  eager = false,
}: AambeyLogoProps) {
  const logo = logos[variant];

  return (
    <img
      alt={decorative ? "" : logo.alt}
      className={cn("h-auto w-auto", className)}
      decoding="async"
      loading={eager ? "eager" : "lazy"}
      src={logo.src}
    />
  );
}
