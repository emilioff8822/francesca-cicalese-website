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
          background: "#08090D",
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
              color: "#5B8DEF",
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
              background: "#5B8DEF",
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
