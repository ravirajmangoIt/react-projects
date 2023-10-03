import { useState } from "react";
import List from "./list";
import { data } from "./data";

function Birthday() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays todays</h3>
        <List people={people} />
        {people.length > 0 && (
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople([])}
          >
            clear all
          </button>
        )}
      </section>
    </main>
  );
}

export default Birthday;
