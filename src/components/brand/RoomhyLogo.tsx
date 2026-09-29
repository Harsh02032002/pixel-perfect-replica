import { cn } from "@/lib/utils";

/**
 * Roomhy.com wordmark reproduced as a vector asset (roof mark + wordmark).
 * Replace with the official Roomhy SVG file when it is supplied.
 */
export function RoomhyLogo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const wordColor = variant === "light" ? "#ffffff" : "#0b1b3f";
  return (
    <svg
      viewBox="0 0 208 56"
      role="img"
      aria-label="Roomhy.com"
      className={cn("h-8 w-auto", className)}
    >
      <g>
        <path
          d="M14 20.5 33 7l19 13.5"
          fill="none"
          stroke="#2555F5"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g fill="#2555F5">
          <circle cx="29" cy="15" r="1.5" />
          <circle cx="34" cy="15" r="1.5" />
          <circle cx="39" cy="15" r="1.5" />
          <circle cx="29" cy="19.5" r="1.5" />
          <circle cx="34" cy="19.5" r="1.5" />
          <circle cx="39" cy="19.5" r="1.5" />
        </g>
      </g>
      <text
        x="10"
        y="46"
        fill={wordColor}
        fontFamily="Inter, sans-serif"
        fontSize="30"
        fontWeight="600"
        letterSpacing="-0.6"
      >
        Roomhy
      </text>
      <text
        x="126"
        y="46"
        fill="#2555F5"
        fontFamily="Inter, sans-serif"
        fontSize="17"
        fontWeight="600"
      >
        .com
      </text>
    </svg>
  );
}
