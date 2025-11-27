"use client";

import Image from "next/image";

const footerLocations = [
  {
    name: "Rajni Madison",
    address: "429 Commerce Drive, Madison, WI 53719",
    map: "https://www.google.com/maps/place/Rajni+Indian+Cuisine,+429+Commerce+Dr,+Madison,+WI+53719",
    phone: "(608) 123-4567",
  },
  {
    name: "Rajni Atlanta",
    address: "Peachtree Street, Atlanta, GA",
    map: "https://maps.google.com",
    phone: "(470) 555-1212",
  },
  {
    name: "Rajni Parsippany",
    address: "Morris Corporate Center, Parsippany, NJ",
    map: "https://maps.google.com",
    phone: "(973) 555-2020",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Image src="/images/logo1.png" alt="Rajni logo" width={180} height={64} />
          <p>Rajni Indian Cuisine</p>
          <span>Red booths, warm spices, and Longtable-inspired hospitality.</span>
        </div>

        <div className="footer__group">
          <h3>Locations</h3>
          <div className="footer__locations">
            {footerLocations.map((location) => (
              <div key={location.name} className="footer__location">
                <strong>{location.name}</strong>
                <span>{location.address}</span>
                <a href={location.map} target="_blank" rel="noreferrer">
                  View map →
                </a>
                <a href={`tel:${location.phone.replace(/[^\d]/g, "")}`}>{location.phone}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__group">
          <h3>Hours</h3>
          <p>
            Mon–Thu: 11:00 AM – 2:30 PM / 5:00 PM – 9:00 PM
            <br /> Fri–Sat: 11:00 AM – 2:30 PM / 5:00 PM – 10:00 PM
            <br /> Sun: 11:00 AM – 2:30 PM / 5:00 PM – 9:00 PM
          </p>
          <span className="tag">Dine-in · Takeout · Catering</span>
        </div>

        <div className="footer__group">
          <h3>Contact & Links</h3>
          <p>
            <a href="tel:+16081234567">📞 (608) 123-4567</a>
            <br /> <a href="mailto:info@rajnimadison.com">✉️ info@rajnimadison.com</a>
          </p>
          <div className="footer__links">
            <a href="#reserve">Reserve</a>
            <a href="#contact">Catering</a>
            <a
              className="cta"
              href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
              target="_blank"
              rel="noreferrer"
            >
              Order Online →
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">© {new Date().getFullYear()} Rajni Indian Cuisine · All Rights Reserved</div>

      <style jsx>{`
        .footer {
          background: #fff8ee;
          padding: 48px 18px 28px;
          border-top: 1px solid var(--border);
          color: var(--muted);
        }

        .footer__inner {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 26px;
          max-width: 1100px;
          margin: 0 auto 30px;
        }

        .footer__brand :global(img) {
          width: 160px;
          height: auto;
          margin-bottom: 10px;
        }

        .footer__brand p {
          font-weight: 700;
          color: var(--cream);
          margin: 0 0 6px;
        }

        .footer__brand span {
          color: var(--muted);
        }

        h3 {
          margin: 0 0 8px;
          color: var(--cream);
          font-size: 16px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        p {
          margin: 0 0 8px;
          line-height: 1.6;
        }

        a {
          color: var(--accent);
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        .footer__links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer__links a {
          color: var(--cream);
        }

        .footer__links a.cta {
          color: var(--accent);
          font-weight: 700;
        }

        .footer__locations {
          display: grid;
          gap: 10px;
        }

        .footer__location {
          display: grid;
          gap: 4px;
          padding: 10px 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid var(--border);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.04);
        }

        .tag {
          display: inline-block;
          margin-top: 6px;
          padding: 8px 12px;
          border-radius: 10px;
          background: rgba(194, 123, 22, 0.12);
          color: var(--cream);
        }

        .footer__bottom {
          text-align: center;
          border-top: 1px solid var(--border);
          padding-top: 12px;
          font-size: 13px;
        }
      `}</style>
    </footer>
  );
}
