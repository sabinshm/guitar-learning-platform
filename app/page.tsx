const instructors = [
  {
    name: "Maya Carter",
    specialty: "Folk & fingerstyle",
    rating: 4.9,
    students: 1280,
    price: 32,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Leo Rivera",
    specialty: "Rock & lead guitar",
    rating: 4.8,
    students: 960,
    price: 28,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sofia Nguyen",
    specialty: "Jazz & improvisation",
    rating: 5.0,
    students: 1480,
    price: 35,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
];

const courses = [
  { title: "Beginner Acoustic Foundations", level: "Beginner", duration: "4 weeks", lessons: 18 },
  { title: "Electric Guitar Essentials", level: "Intermediate", duration: "6 weeks", lessons: 24 },
  { title: "Rhythm Mastery for Pop", level: "All levels", duration: "3 weeks", lessons: 15 },
];

const products = [
  { name: "Yamaha FG800J", category: "Acoustic", price: 389, badge: "Best seller" },
  { name: "Fender Player Strat", category: "Electric", price: 799, badge: "New" },
  { name: "D'Addario Strings", category: "Accessories", price: 18, badge: "Popular" },
  { name: "Boss Katana Mini", category: "Amp", price: 129, badge: "Hot" },
];

const features = [
  "1-on-1 live lessons",
  "Structured recorded courses",
  "Instructor ratings and reviews",
  "Premium guitar and accessory shop",
];

const testimonials = [
  { quote: "I booked a live lesson and improved my strumming in two weeks. The platform is clean and motivating.", author: "Emma L." },
  { quote: "The course library helped me prepare for my first gig. The shop also saved me time finding the right strings and pedal.", author: "Daniel P." },
];

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="tag">Learn guitar your way</span>
            <h1>Master guitar with live coaching, recorded lessons, and premium gear.</h1>
            <p>
              Book 1-on-1 sessions with expert instructors, learn from flexible prerecorded classes, and shop the
              best guitars and accessories in one place.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="/booking">
                Book a lesson
              </a>
              <a className="btn btn-secondary" href="/shop">
                Explore shop
              </a>
            </div>
            <div className="stats-row">
              <div>
                <strong>12k+</strong>
                <span>Students</span>
              </div>
              <div>
                <strong>240+</strong>
                <span>Instructors</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Average rating</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card main-card">
              <img
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
                alt="Guitar lesson"
              />
            </div>
            <div className="floating-panel">
              <div className="mini-avatar" />
              <div>
                <strong>Top-rated instructor</strong>
                <p>Maya Carter · 4.9 rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Why students choose us"
            title="A complete platform for learning and growing"
            description="Everything you need to become a confident guitar player, from coaching to gear, in one place."
          />
          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature} className="feature-box">
                <span className="feature-icon">✓</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <SectionHeader
            eyebrow="Featured instructors"
            title="Choose the teacher that matches your style"
            description="Browse top-rated instructors by genre, price, skill level, and learner preference."
          />
          <div className="card-grid three-up">
            {instructors.map((instructor) => (
              <article key={instructor.name} className="card instructor-card">
                <img src={instructor.image} alt={instructor.name} />
                <div className="card-body">
                  <div className="card-topline">
                    <span className="rating">★ {instructor.rating}</span>
                    <span>{instructor.students} students</span>
                  </div>
                  <h3>{instructor.name}</h3>
                  <p>{instructor.specialty}</p>
                  <div className="price-row">
                    <strong>From ${instructor.price}/lesson</strong>
                    <a href="/booking">Book</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Popular learning paths"
            title="Start with lessons designed for your level"
            description="Choose live sessions, video lessons, or guided learning plans built around your goals."
          />
          <div className="card-grid three-up">
            {courses.map((course) => (
              <article key={course.title} className="card course-card">
                <div className="course-badge">{course.level}</div>
                <h3>{course.title}</h3>
                <ul>
                  <li>{course.duration}</li>
                  <li>{course.lessons} lessons</li>
                  <li>Beginner-friendly curriculum</li>
                </ul>
                <a href="/courses">View program</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <SectionHeader
            eyebrow="Store picks"
            title="Gear up with guitars and accessories"
            description="Find quality instruments, strings, pedals, amps, and accessories selected for learners and performers."
          />
          <div className="card-grid four-up">
            {products.map((product) => (
              <article key={product.name} className="card product-card">
                <span className="product-badge">{product.badge}</span>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <div className="price-row">
                  <strong>${product.price}</strong>
                  <button>Add to cart</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Student feedback"
            title="Students keep coming back for the experience"
            description="Real stories from people learning guitar online with ToneTrail."
          />
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="testimonial-card">
                <p>“{item.quote}”</p>
                <footer>{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
