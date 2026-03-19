import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1e3050",
          borderRadius: "28px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "88px",
              fontFamily: "Georgia, serif",
              color: "#FFFFFF",
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            FC
          </span>
          <div
            style={{
              width: "64px",
              height: "2px",
              background: "#FFFFFF",
              opacity: 0.4,
              marginTop: "8px",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
