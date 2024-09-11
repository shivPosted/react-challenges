import { useRef, useState } from "react";
import "./style.css";
import Values from "values.js";

function App() {
  const [inputHex, setInputHex] = useState("#c084fc");
  const [error, setError] = useState("");

  const color = new Values(inputHex);
  const colorData = color.all();

  return (
    <>
      <Header
        setInputHex={setInputHex}
        inputHex={inputHex}
        setError={setError}
      />
      <TintsShades data={colorData} />
      {error ? <Message message={error} /> : ""}
    </>
  );
}

function Header({ setInputHex, inputHex, setError }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const valid =
      query.startsWith("#") &&
      (query.slice(1).length === 3 || query.slice(1).length === 6);
    if (valid) setInputHex(query);
    else {
      setError("Enter valid hex code");
      setTimeout(() => setError(""), 2500);
    }
  }
  return (
    <header>
      <h1>Tints & Shades</h1>
      <div
        className="typed-color-show"
        style={{ backgroundColor: inputHex }}
      ></div>
      <form action="/none" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="#c084fc"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Generate</button>
      </form>
    </header>
  );
}

function TintsShades({ data }) {
  return (
    <main>
      {data.map((value, i) => (
        <ColorBox
          weight={value.weight}
          hexCode={value.hex}
          rgb={value.rgb}
          type={value.type}
          key={i}
        />
      ))}
    </main>
  );
}
function ColorBox({ rgb, weight, hexCode, type }) {
  const backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  const [displayCopy, setDisplayCopy] = useState(false);
  const box = useRef(null);

  function writeClipboard() {
    console.log(box.current.innerText);
    navigator.clipboard.writeText(box.current.innerText);
    setDisplayCopy(true);

    setTimeout(() => {
      setDisplayCopy(false);
    }, 1500);
  }
  return (
    <div
      className="color-box"
      style={{
        backgroundColor: backgroundColor,
        color: type === "tint" ? "#000" : "#f7f7f7",
      }}
      onClick={writeClipboard}
    >
      <p className="weight">{weight + "%"}</p>
      <p className="hex-code" ref={box}>
        #{hexCode}
      </p>
      {displayCopy ? <div className="copied">Copied</div> : ""}
    </div>
  );
}

function Message({ message }) {
  return <div className="message">{message}</div>;
}
export default App;
