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
  const [openedID, setOpenedID] = useState(null);

  function handleToggle(id) {
    // if (openedID === id) {
    //   setOpenedID(null);
    //   return;
    // }
    setOpenedID(cur => (cur === id ? null : id));
  }
  return (
    <ul className="container">
      {faqs.map((item, i) => (
        <Question
          key={i}
          QnA={{ ...item, key: i + 1 }}
          handleToggle={handleToggle}
          openedID={openedID}
        />
      ))}
      <Question
        key={65}
        QnA={{
          key: 65,
          title: 'What is your name?',
          text: 'My name is Shiv Pratap Singh. bla la bla la blalala blala',
        }}
        handleToggle={handleToggle}
        openedID={openedID}
      />
    </ul>
  );
}

function Question({ QnA, handleToggle, openedID }) {
  const isOpen = openedID === QnA.key;
  return (
    <li
      className={`qna ${isOpen ? 'open' : ''}`}
      onClick={() => {
        handleToggle(QnA.key);
      }}
    >
      <span className="qnum">{QnA.key.toString().padStart(2, 0)}</span>
      <span className="ques">{QnA.title}</span>
      <span>{isOpen ? '-' : '+'}</span>
      {isOpen ? <span className="answer">{QnA.text}</span> : ''}
    </li>
  );
}
export default App;
