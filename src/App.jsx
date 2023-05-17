import { useState } from "react";
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  }

  return (
    <section className="section-center">
      <h4>tired fo boring lorem ipsum?</h4>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">proghraphs:</label>
        <input
          type="number"
          min={1}
          step={1}
          max={8}
          name="amount"
          value={count}
          onChange={(e) => { setCount(e.target.value) }} />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {
          text.map((item) => {
            return <p key={nanoid()}>{item}</p>
          })
        }
      </article>
    </section>
  );
};
export default App;
