import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ToneTrail Guitar Academy",
  description: "Learn guitar online with live coaching, recorded lessons, and premium gear.",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Instructors", href: "/instructors" },
  { label: "Courses", href: "/courses" },
  { label: "Shop", href: "/shop" },
  { label: "Booking", href: "/booking" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <div className="container nav-wrap">
            <div className="brand">
              <span className="brand-mark">T</span>
              <span>ToneTrail</span>
            </div>
            <nav className="nav">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="nav-actions">
              <button className="btn btn-light">Log in</button>
              <button className="btn btn-primary">Get started</button>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <div className="brand footer-brand">
                <span className="brand-mark">T</span>
                <span>ToneTrail</span>
              </div>
              <p>Learn guitar with expert instructors and premium gear curated for your sound.</p>
            </div>
            <div>
              <h4>Platform</h4>
              <ul>
                <li>1-on-1 lessons</li>
                <li>Recorded courses</li>
                <li>Progress tracking</li>
              </ul>
            </div>
            <div>
              <h4>Shop</h4>
              <ul>
                <li>Acoustic guitars</li>
                <li>Electric guitars</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li>Help center</li>
                <li>Instructor signup</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
