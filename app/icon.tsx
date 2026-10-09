
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

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
          background: "#0A0A0A",
          color: "#F3F2ED",
          fontFamily: "Arial",
          fontWeight: 900,
          fontSize: 31,
          border: "3px solid #C8FF00",
          borderRadius: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>R</span>
          <span style={{ color: "#C8FF00" }}>/</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}