import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Studio Legale Avv. Francesca Cicalese — Roma"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3050, #182842)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Studio Legale
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Avv. Francesca Cicalese
          </div>
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "rgba(255,255,255,0.3)",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          />
          <div
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              maxWidth: "600px",
              lineHeight: 1.5,
            }}
          >
            Diritto Penale · Famiglia · Civile · Lavoro
          </div>
          <div
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.4)",
              marginTop: "12px",
            }}
          >
            Via Sabotino 46, Roma — Zona Prati
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
