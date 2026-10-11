export default function BookingPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Book your lesson</span>
          <h1>Choose a lesson type and schedule your next session.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container booking-layout">
          <div className="booking-card">
            <h3>1-on-1 lesson</h3>
            <div className="option-row">
              <button className="option active">Live class</button>
              <button className="option">Pre-recorded</button>
            </div>
            <form className="booking-form">
              <label>
                Instructor
                <select defaultValue="maya">
                  <option value="maya">Maya Carter</option>
                  <option value="leo">Leo Rivera</option>
                  <option value="sofia">Sofia Nguyen</option>
                </select>
              </label>
              <label>
                Skill level
                <select defaultValue="beginner">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </label>
              <label>
                Date
                <input type="date" />
              </label>
              <label>
                Preferred time
                <input type="time" />
              </label>
              <button className="btn btn-primary full-width" type="button">
                Confirm booking
              </button>
            </form>
          </div>

          <aside className="summary-card">
            <h3>Lesson summary</h3>
            <ul>
              <li>Live session with Maya Carter</li>
              <li>45-minute private lesson</li>
              <li>Includes practice plan</li>
              <li>Total: $32</li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
