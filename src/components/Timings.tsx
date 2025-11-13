"use client";

export default function Timings() {
  return (
    <section
      id="hours"
      style={{
        background: "rgba(0, 0, 0, 0.65)",
        backdropFilter: "blur(10px)",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(20px, 3vw, 28px)",
          fontWeight: 700,
          color: "#FFD700",
          marginBottom: "10px",
        }}
      >
        Hours of Operation
      </h2>

      <p style={{ fontSize: "15px", marginBottom: "8px" }}>
        <strong>Monday – Thursday:</strong> 11:00 AM – 2:30 PM | 5:00 PM – 9:00 PM
      </p>
      <p style={{ fontSize: "15px", marginBottom: "8px" }}>
        <strong>Friday – Saturday:</strong> 11:00 AM – 2:30 PM | 5:00 PM – 9:30 PM
      </p>
      <p style={{ fontSize: "15px" }}>
        <strong>Sunday:</strong> 11:00 AM – 2:30 PM | 5:00 PM – 9:00 PM
      </p>

      <p
        style={{
          marginTop: "20px",
          color: "#FFD700",
          fontWeight: 600,
          letterSpacing: "0.5px",
        }}
      >
        Dine-in • Takeout • Catering Available
      </p>
    </section>
    
  );
  
}
