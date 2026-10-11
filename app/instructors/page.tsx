const instructors = [
  {
    name: "Maya Carter",
    specialty: "Folk & fingerstyle",
    rating: 4.9,
    lessons: 24,
    price: 32,
  },
  {
    name: "Leo Rivera",
    specialty: "Rock & lead guitar",
    rating: 4.8,
    lessons: 17,
    price: 28,
  },
  {
    name: "Sofia Nguyen",
    specialty: "Jazz & improvisation",
    rating: 5.0,
    lessons: 31,
    price: 35,
  },
  {
    name: "Noah Brooks",
    specialty: "Beginner acoustic",
    rating: 4.7,
    lessons: 19,
    price: 24,
  },
];

export default function InstructorsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Find your teacher</span>
          <h1>Choose an instructor based on rating, style, and availability.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            <button className="filter-chip active">Top rated</button>
            <button className="filter-chip">Beginner-friendly</button>
            <button className="filter-chip">Rock</button>
            <button className="filter-chip">Jazz</button>
            <button className="filter-chip">Acoustic</button>
          </div>

          <div className="card-grid four-up">
            {instructors.map((instructor) => (
              <article key={instructor.name} className="card instructor-card">
                <div className="avatar-large" aria-label={instructor.name} />
                <div className="card-body">
                  <div className="card-topline">
                    <span className="rating">★ {instructor.rating}</span>
                    <span>{instructor.lessons} lessons</span>
                  </div>
                  <h3>{instructor.name}</h3>
                  <p>{instructor.specialty}</p>
                  <div className="price-row">
                    <strong>${instructor.price}/session</strong>
                    <a href="/booking">Book now</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
