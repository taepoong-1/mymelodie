"use client";

import { useEffect } from "react";

type AdProps = {
  slot: string;
  format?: "auto" | "fluid" | "rectangle";
  responsive?: boolean;
  style?: React.CSSProperties;
};

export default function AdSense({
  slot,
  format = "auto",
  responsive = true,
  style,
}: AdProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error", err);
    }
  }, []);

  // Check if we are in dev mode to show placeholder
  const isDev = process.env.NODE_ENV === "development";

  return (
    <div style={{ margin: "20px 0", textAlign: "center", ...style }}>
      {isDev ? (
        <div
          style={{
            background: "#eee",
            padding: "20px",
            color: "#999",
            border: "1px dashed #ccc",
          }}
        >
          AdSense Slot: {slot} <br /> ({format})
        </div>
      ) : (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // User needs to replace this
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      )}
    </div>
  );
}
