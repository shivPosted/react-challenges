import './app.css';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'intermediate',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'beginner',
    color: '#60DAFB',
  },
];

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
    <ul className="skill-set">
      {skills.map((skill, i) => (
        <Skill
          key={i}
          color={skill.color}
          name={skill.skill}
          level={skill.level}
        />
      ))}
    </ul>
  );
}

function Skill({ color, level, name }) {
  let emoji = '';
  if (level === 'beginner') emoji = '👶';
  else if (level === 'intermediate') emoji = '👍';
  else emoji = '💪';
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      {name}
      <span>{emoji}</span>
    </div>
  );
}
export default App;
