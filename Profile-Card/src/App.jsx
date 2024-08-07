import './app.css';

function App() {
  return (
    <main className="container">
      <Avatar />
      <About />
    </main>
  );
}
function Avatar() {
  return <img src="IMG_20240413_195538_976.jpg" alt="" />;
}
function About() {
  return (
    <div className="info">
      <h1>Shiv Pratap Singh</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        eaque corporis molestias iure ducimus cum, rerum laboriosam unde
        officia, minima delectus illo, omnis quas ut praesentium culpa accusamus
        quasi optio.
      </p>
      <SkillSet />
    </div>
  );
}
function SkillSet() {
  return (
    <div className="skill-set">
      <Skill name="HTML+CSS" emoji="💪" bgColor="blue" />
      <Skill name="JavaScript" emoji="💪" bgColor="yellow" />
      <Skill name="Web Design" emoji="👍" bgColor="lightgreen" />
      <Skill name="Git and GitHub" emoji="👍" bgColor="#E4462C" />
      <Skill name="React" emoji="👶" bgColor="#53D4F6" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      {props.name}
      <span>{props.emoji}</span>
    </div>
  );
}
export default App;
