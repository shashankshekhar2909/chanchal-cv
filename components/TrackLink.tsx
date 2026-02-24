"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type TrackLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  children: ReactNode;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function TrackLink({
  event,
  children,
  onClick,
  ...props
}: TrackLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", event, {
            link_url: props.href,
          });
        }
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
