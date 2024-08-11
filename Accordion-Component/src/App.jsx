import { useState } from 'react';
import './style.css';
const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];
function App() {
  return (
    <ul className="container">
      {faqs.map((item, i) => (
        <Question key={i} QnA={{ ...item, key: (i + 1).toString() }} />
      ))}
    </ul>
  );
}

function Question({ QnA }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(cur => !cur);
  }
  return (
    <li className={`qna ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <span className="qnum">{QnA.key.padStart(2, 0)}</span>
      <span className="ques">{QnA.title}</span>
      <span>{isOpen ? '-' : '+'}</span>
      {isOpen ? <span className="answer">{QnA.text}</span> : ''}
    </li>
  );
}
export default App;
