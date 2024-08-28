import { useState } from 'react';

function App() {
  return (
    <>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>
      <TextExpander
        collapseInWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
        fontSize="18px"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>
      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </>
  );
}

const styleContainer = {
  padding: '6px 12px',
  // display: 'flex',
  // gap: '12px',
  alignItems: 'center',
};

const containerBox = {
  border: '1px solid #777',
  borderRadius: '9px',
  backgroundColor: '#F6F6F6',
};

function TextExpander({
  collapseInWords = 10,
  expandButtonText = 'show text',
  collapseButtonText = 'hide text',
  buttonColor = 'blue',
  children,
  fontSize = '16px',
  expanded = false,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(expanded);
  const collapsedText =
    children.split(' ').slice(0, collapseInWords).join(' ') + '...';
  return (
    <div
      className="container"
      style={
        className === 'box'
          ? { ...styleContainer, fontSize: fontSize, ...containerBox }
          : { ...styleContainer, fontSize: fontSize }
      }
    >
      <p>
        {isOpen ? children : collapsedText}
        <button
          style={{
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            color: buttonColor,
            cursor: 'pointer',
            fontSize: parseInt(fontSize) + 1 + 'px',
          }}
          onClick={() => setIsOpen(cur => !cur)}
        >
          {isOpen ? collapseButtonText : expandButtonText}
        </button>
      </p>
    </div>
  );
}

export default App;
