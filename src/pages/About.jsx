const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git and GitHub']

export default function About() {
  return (
    <section>
      <h1>About</h1>
      <p>
        I am a student who enjoys turning ideas into working websites.
        This paragraph is a first draft and I will rewrite it later.
      </p>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
