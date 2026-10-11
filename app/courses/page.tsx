const courses = [
  {
    title: "Acoustic Starter",
    level: "Beginner",
    lessons: 18,
    duration: "4 weeks",
    price: 79,
  },
  {
    title: "Lead Guitar Foundations",
    level: "Intermediate",
    lessons: 26,
    duration: "6 weeks",
    price: 129,
  },
  {
    title: "Chord Shapes & Songwriting",
    level: "All levels",
    lessons: 20,
    duration: "5 weeks",
    price: 99,
  },
  {
    title: "Jazz Improvisation Lab",
    level: "Advanced",
    lessons: 15,
    duration: "3 weeks",
    price: 89,
  },
];

export default function CoursesPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Learn at your pace</span>
          <h1>Pick a prerecorded class or follow a guided course path.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid four-up">
            {courses.map((course) => (
              <article key={course.title} className="card course-card">
                <div className="course-badge">{course.level}</div>
                <h3>{course.title}</h3>
                <ul>
                  <li>{course.lessons} video lessons</li>
                  <li>{course.duration}</li>
                  <li>Progress tracking included</li>
                </ul>
                <div className="price-row">
                  <strong>${course.price}</strong>
                  <a href="/booking">Enroll</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
