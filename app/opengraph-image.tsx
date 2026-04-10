import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Vazby Květin — Květiny pro chvíle, na kterých záleží"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 80px",
          backgroundColor: "#522953",
          color: "#FFFFFF",
          fontFamily: "serif",
        }}
      >
        {/* Top area — decorative line */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 80,
            right: 80,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.15)",
          }}
        />

        {/* Centered tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 20,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 400,
              lineHeight: 1.15,
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
            }}
          >
            Vazby pro život.
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 400,
              lineHeight: 1.15,
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
            }}
          >
            Vazby pro loučení.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.6)",
              fontWeight: 400,
            }}
          >
            Květiny pro chvíle, na kterých záleží.
          </div>
          <div
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.4)",
              fontWeight: 400,
            }}
          >
            vazbykvetin.cz
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
