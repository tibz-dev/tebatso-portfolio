import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08080b",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(91,99,211,0.35), transparent 50%), radial-gradient(circle at 80% 80%, rgba(66,200,183,0.2), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#42c8b7", fontFamily: "monospace", marginBottom: 24 }}>
          Software Engineer · South Africa
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.02em" }}>
          Tebatso Seshayi
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#9a9aa4", marginTop: 24, maxWidth: 900 }}>
          Building enterprise-grade systems and AI-powered software.
        </div>
      </div>
    ),
    { ...size }
  );
}