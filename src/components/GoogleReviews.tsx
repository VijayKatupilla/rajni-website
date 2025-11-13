"use client";

export default function GoogleReviews() {
  return (
    <section
      id="reviews"
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(8px)",
        padding: "60px 20px",
        textAlign: "center",
        color: "white",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(20px, 3vw, 32px)",
          fontWeight: 700,
          marginBottom: "20px",
          color: "#FFD700",
        }}
      >
        ★ Google Reviews ★
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Review 1 */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            padding: "20px",
            borderRadius: "10px",
            width: "300px",
          }}
        >
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            “Authentic Indian food! The flavors were perfect and service was top-notch.
            Definitely coming back again.”
          </p>
          <p
            style={{
              marginTop: "10px",
              fontWeight: 600,
              color: "#FFD700",
            }}
          >
            — Priya S.
          </p>
        </div>

        {/* Review 2 */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            padding: "20px",
            borderRadius: "10px",
            width: "300px",
          }}
        >
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            “Great variety and amazing taste! The butter chicken and naan are my favorites.
            Highly recommend Rajni for family dinners.”
          </p>
          <p
            style={{
              marginTop: "10px",
              fontWeight: 600,
              color: "#FFD700",
            }}
          >
            — Arjun P.
          </p>
        </div>

        {/* Review 3 */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            padding: "20px",
            borderRadius: "10px",
            width: "300px",
          }}
        >
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            “We ordered catering for our event and everyone loved it! Fresh, flavorful, and
            delivered on time. Excellent service!”
          </p>
          <p
            style={{
              marginTop: "10px",
              fontWeight: 600,
              color: "#FFD700",
            }}
          >
            — Jessica L.
          </p>
        </div>
      </div>

      {/* Google link */}
      <div style={{ marginTop: "30px" }}>
        <a
          href="https://www.google.com/search?q=Rajni+Indian+Cuisine+Madison+WI"
          target="_blank"
          style={{
            color: "#FFD700",
            textDecoration: "underline",
            fontWeight: 600,
          }}
        >
          View all reviews on Google →
        </a>
      </div>
    </section>
  );
}
