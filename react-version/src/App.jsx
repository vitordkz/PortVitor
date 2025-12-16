import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <>
<script src="Portf.js"></script>
    <header>
        <h1>Vitor Collin</h1>
        <p className="subtitle">Front-End Developer | Solutions Creator</p>

        <Nav />

        <div className="links">
    <a href="https://github.com/vitordkz" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/vitor-collin-antunes-de-lima-345427215" target="_blank">LinkedIn</a>
    <a href="https://www.instagram.com/vitor.dkz/" target="_blank">Instagram</a>
</div>

<p className="tagline">
    Turning ideas into reality through clean and stubborn creativity.
</p>
    </header>

    <section>
        <h2>About Me</h2>

        <div className="projeto">
          <p>Short Description about myself...</p>
        </div>
        <section>

            <h2>Projects</h2>

            <div className="projeto">
                <h3>Project 1</h3>
                <p>Brief description of project</p>
            </div>
        </section>

        <section id="skills" className="skills">
            <h2>Skills</h2>

            <div className="projeto">
              <p>HTML, CSS, JavaScript, React</p>
            </div>
        </section>
    </section>
        <footer>
            ©️ 2025 Vitor Collin
        </footer>
    </>
  )
}

export default App;

/* Próximo passo lógico quando você quiser:
transformar About, Projects e Skills em componentes
usar map() para renderizar projetos
parar de repetir div.projeto  */