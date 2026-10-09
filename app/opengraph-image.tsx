
import { ImageResponse } from "next/og";

export const alt = "Rizky Aditya Pratama — Digital Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          color: "#F3F2ED",
          padding: "56px 64px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 17,
            letterSpacing: 3,
            color: "#C8FF00",
          }}
        >
          <span>RIZKY/001 — DIGITAL EDITORIAL</span>
          <span>2026 / INDONESIA</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 94,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: -4,
            }}
          >
            RIZKY ADITYA
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <span
              style={{
                fontSize: 94,
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: -4,
              }}
            >
              PRATAMA
            </span>
            <span
              style={{
                width: 18,
                height: 18,
                backgroundColor: "#C8FF00",
                marginLeft: 18,
                marginTop: 18,
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "2px solid #C8FF00",
            paddingTop: 22,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontSize: 22, fontWeight: 700 }}>
              WEB DEVELOPER
            </span>
            <span
              style={{
                fontSize: 15,
                letterSpacing: 2,
                color: "#A6A6A6",
              }}
            >
              DESIGN / CODE / ITERATE
            </span>
          </div>

          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#C8FF00",
            }}
          >
            001 ↗
          </span>
        </div>
      </div>
    ),
    size
  );
}