import { ImageResponse } from "next/og"

export const size = { width: 48, height: 48 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
          borderRadius: "6px",
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
              fontSize: "24px",
              fontFamily: "Georgia, serif",
              color: "#1e3050",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              lineHeight: 1,
            }}
          >
            FC
          </span>
          <div
            style={{
              width: "18px",
              height: "1px",
              background: "#1e3050",
              opacity: 0.5,
              marginTop: "3px",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
