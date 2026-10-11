* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #0b1220;
  color: #f3f5f7;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
select {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(11, 18, 32, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 16px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 1.2rem;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: linear-gradient(135deg, #f9a03f, #ff6b57);
  color: #0b1220;
  font-weight: 800;
}

.nav {
  display: flex;
  align-items: center;
  gap: 22px;
  color: #dfe6ef;
}

.nav a {
  opacity: 0.8;
}

.nav a:hover {
  opacity: 1;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  border: none;
  border-radius: 999px;
  padding: 12px 18px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, #f9a03f, #ff6b57);
  color: #111827;
}

.btn-secondary,
.btn-light {
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero {
  padding: 80px 0 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
}

.tag,
.eyebrow {
  display: inline-block;
  background: rgba(249, 160, 63, 0.15);
  color: #ffc77b;
  border: 1px solid rgba(249, 160, 63, 0.25);
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero-copy h1,
.page-hero h1 {
  margin: 18px 0 16px;
  font-size: clamp(2.5rem, 5vw, 4.4rem);
  line-height: 1.05;
}

.hero-copy p,
.page-hero p,
.section-header p,
.footer p,
.card-body p,
.course-card li,
.sidebar-panel li,
.summary-card li {
  color: #c8d1dc;
  line-height: 1.7;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 26px;
}

.stats-row {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 28px;
}

.stats-row div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stats-row strong {
  font-size: 1.6rem;
}

.stats-row span {
  color: #b9c2cf;
}

.hero-visual {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-card {
  width: min(100%, 540px);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
}

.hero-card img {
  width: 100%;
  height: 560px;
  object-fit: cover;
}

.floating-panel {
  position: absolute;
  left: 14px;
  bottom: 28px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(15, 23, 42, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 14px 16px;
  backdrop-filter: blur(12px);
}

.mini-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f9a03f, #ff6b57);
}

.section {
  padding: 84px 0;
}

.section.muted {
  background: rgba(255, 255, 255, 0.02);
}

.section-header {
  max-width: 680px;
  margin-bottom: 26px;
}

.section-header h2 {
  margin: 10px 0 8px;
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.feature-grid,
.card-grid,
.testimonial-grid {
  display: grid;
  gap: 22px;
}

.feature-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.feature-box {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  padding: 22px;
}

.feature-icon {
  width: 36px;
  height: 36px;
  background: rgba(249, 160, 63, 0.12);
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #f9a03f;
  font-weight: 700;
  margin-bottom: 12px;
}

.three-up {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.four-up {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 24px;
  overflow: hidden;
}

.instructor-card img,
.avatar-large {
  width: 100%;
  height: 250px;
  object-fit: cover;
  background: linear-gradient(135deg, #312e81, #f97316);
}

.avatar-large {
  height: 220px;
}

.card-body {
  padding: 18px 18px 20px;
}

.card-topline,
.price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: #d5dae3;
}

.rating {
  color: #f9c74f;
  font-weight: 700;
}

.card-body h3,
.product-card h3,
.course-card h3,
.summary-card h3,
.sidebar-panel h3,
.booking-card h3 {
  margin: 12px 0 8px;
  font-size: 1.4rem;
}

.price-row a,
.price-row button {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  padding: 8px 12px;
  border-radius: 999px;
  cursor: pointer;
}

.course-card {
  padding: 20px;
}

.course-card ul,
.sidebar-panel ul,
.summary-card ul {
  margin: 18px 0;
  padding-left: 18px;
}

.course-badge,
.product-badge {
  display: inline-block;
  background: rgba(249, 160, 63, 0.12);
  color: #f9a03f;
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.75rem;
  font-weight: 700;
}

.product-card {
  padding: 20px;
}

.product-card p {
  color: #d5dae3;
}

.testimonial-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.testimonial-card {
  margin: 0;
  padding: 26px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.testimonial-card p {
  color: #edf3ff;
  font-size: 1.04rem;
  line-height: 1.8;
}

.testimonial-card footer {
  color: #f9a03f;
  margin-top: 18px;
  font-weight: 700;
}

.page-shell {
  padding-bottom: 60px;
}

.page-hero {
  padding: 72px 0 32px;
}

.narrow {
  max-width: 760px;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 28px;
}

.filter-chip,
.option {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.02);
  color: #fff;
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
}

.filter-chip.active,
.option.active {
  background: rgba(249, 160, 63, 0.15);
  border-color: rgba(249, 160, 63, 0.3);
  color: #ffc77b;
}

.shop-layout,
.booking-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 26px;
}

.sidebar-panel,
.booking-card,
.summary-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 22px;
}

.shop-grid {
  width: 100%;
}

.booking-form {
  display: grid;
  gap: 18px;
  margin-top: 22px;
}

.booking-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #dfe6ef;
}

.booking-form select,
.booking-form input {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  color: white;
  padding: 12px 14px;
}

.option-row {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}

.full-width {
  width: 100%;
}

.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(7, 13, 24, 0.9);
  padding: 42px 0 60px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 26px;
}

.footer h4 {
  margin-top: 0;
  margin-bottom: 14px;
}

.footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
  color: #c8d1dc;
}

@media (max-width: 980px) {
  .hero-grid,
  .shop-layout,
  .booking-layout,
  .footer-grid,
  .feature-grid,
  .three-up,
  .four-up,
  .testimonial-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .nav {
    display: none;
  }
}

@media (max-width: 640px) {
  .hero-copy h1,
  .page-hero h1 {
    font-size: 2.4rem;
  }

  .feature-grid,
  .three-up,
  .four-up,
  .testimonial-grid,
  .footer-grid,
  .shop-layout,
  .booking-layout {
    grid-template-columns: 1fr;
  }

  .nav-actions {
    display: none;
  }
}
