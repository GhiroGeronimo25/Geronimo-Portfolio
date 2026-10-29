import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h1>Hi, I'm Your Name</h1>
      <p>I'm a student learning to build websites with React.</p>
      <p><Link to="/projects">See my projects</Link></p>
    </section>
  )
}
