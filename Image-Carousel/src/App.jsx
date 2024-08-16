import { useState } from 'react';
import './style.css';

const images = [
  'https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
];

function App() {
  const [img, setImg] = useState(0);

  function handleLeftArrow() {
    setImg(cur => (cur === 0 ? images.length - 1 : cur - 1));
  }

  function handleRightArrow() {
    setImg(cur => (cur === images.length - 1 ? 0 : cur + 1));
  }
  return (
    <div className="main">
      <Button handleClick={handleLeftArrow} className="larr">
        &larr;
      </Button>
      <img src={images[img]} alt="" />
      <Button handleClick={handleRightArrow} className="rarr">
        &rarr;
      </Button>
    </div>
  );
}

function Button({ handleClick, children, className }) {
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

export default App;
