import { useState } from 'react';
import './style.css';
const questions = [
  {
    id: 3457,
    question: 'What language is React based on?',
    answer: 'JavaScript',
  },
  {
    id: 7336,
    question: 'What are the building blocks of React apps?',
    answer: 'Components',
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: 'JSX',
  },
  {
    id: 1297,
    question: 'How to pass data from parent to child components?',
    answer: 'Props',
  },
  {
    id: 9103,
    question: 'How to give components memory?',
    answer: 'useState hook',
  },
  {
    id: 2002,
    question:
      'What do we call an input element that is completely synchronised with state?',
    answer: 'Controlled element',
  },
];

function App() {
  return <Cards />;
}

function Cards() {
  const [shownID, setShownID] = useState(null);
  function handleClick(id) {
    setShownID(id === shownID ? null : id);
  }
  return (
    <ul className="cards">
      {questions.map(card => (
        <li
          className={`card ${card.id === shownID ? 'show' : ''}`}
          key={card.id}
          onClick={() => handleClick(card.id)}
        >
          {card.id === shownID ? card.answer : card.question}
        </li>
      ))}
    </ul>
  );
}

export default App;
