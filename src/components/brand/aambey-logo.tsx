import Image from "next/image";

import { cn } from "@/lib/utils";

const logos = {
  full: {
    src: "/brand/aambey-estates-logo.png",
    alt: "Aambey Estates - Finding Spaces. Creating Legacies.",
    width: 792,
    height: 750,
  },
  lockup: {
    src: "/brand/aambey-estates-lockup.png",
    alt: "Aambey Estates",
    width: 1250,
    height: 287,
  },
  mark: {
    src: "/brand/aambey-estates-mark.png",
    alt: "Aambey Estates logo mark",
    width: 898,
    height: 777,
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
    <Image
      alt={decorative ? "" : logo.alt}
      className={cn("h-auto w-auto", className)}
      decoding="async"
      height={logo.height}
      loading={eager ? "eager" : "lazy"}
      preload={eager}
      src={logo.src}
      width={logo.width}
    />
  );
}
