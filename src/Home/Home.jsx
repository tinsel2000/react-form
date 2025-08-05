function Home() {
  return (
    <>
        <section id="top"></section>
      <main>
        <header />
        <section className="about" id="about">
          <h3>About Me</h3>
          <div className="intro-text">
            Look at our many things below:
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi itaque,
              consequuntur omnis molestias maxime eaque tempore quod accusantium
              ullam eius officiis quas corporis quos at illo quasi aut esse qui.
            </p>
          </div>
          <div className="aboutme-container">
            <img className="aboutme-image" src="" />
          </div>
        </section>
        <section className="skillset">
          <div className="skill-wrapper">
            <i className="devicon-git-plain colored" />
            <div className="skill-text">Git</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-github-original colored" />
            <div className="skill-text">Github</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-html5-plain-wordmark colored" />
            <div className="skill-text">HTML 5</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-css3-plain-wordmark colored" />
            <div className="skill-text">CSS 3</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-javascript-plain colored" />
            <div className="skill-text">JavaScript</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-npm-original-wordmark colored" />
            <div className="skill-text">NPM</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-react-original colored" />
            <div className="skill-text">React</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-yarn-original colored" />
            <div className="skill-text">Yarn</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-nodejs-plain colored" />
            <div className="skill-text">NodeJS</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-vscode-plain colored" />
            <div className="skill-text">VS Code</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-python-plain colored" />
            <div className="skill-text">Python</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-mysql-original colored" />
            <div className="skill-text">MySQL</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-linux-plain colored" />
            <div className="skill-text">Linux</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-windows11-original colored" />
            <div className="skill-text">Windows</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-azure-plain colored" />
            <div className="skill-text">Azure</div>
          </div>
          <div className="skill-wrapper">
            <i className="devicon-powershell-plain colored" />
            <div className="skill-text">PowerShell</div>
          </div>
        </section>
        <h3>My Projects</h3>
        <div className="subtitle">A small selection of my works</div>
        <section className="app-collection" id="app-collection">
          <div className="battleship">
            <span className="mdi mdi-ferry" />
            <div className="app-text">Battleship</div>
          </div>
          <div className="calculator">
            <span className="mdi mdi-calculator" />
            <div className="app-text">Calculator</div>
          </div>
          <div className="rockpaperscissors">
            <span className="mdi mdi-content-cut" />
            <div className="app-text">Rock Paper Scissors</div>
          </div>
          <div className="apis">
            <span className="mdi mdi-weather-partly-cloudy" />
            <div className="app-text">Weather</div>
          </div>
        </section>
      </main>
      <footer>
        <section id="contact">
          <h3 className="contact-header">Contact Me</h3>
          <div className="contacts">
            <div className="contact-container">
              <a
                className="devicon-github-original colored"
                href="https://github.com/"
              />
              <div className="contact-text">GitHub</div>
            </div>
            <div className="contact-container">
              <a
                className="devicon-linkedin-plain colored"
                href="https://www.linkedin.com/"
              />
              <div className="contact-text">LinkedIn</div>
            </div>
            <div className="contact-container">
              <a className="mdi mdi-phone" href="phone:0712345678" />
              <div className="contact-text">Phone: 07123 456789</div>
            </div>
            <div className="contact-container">
              <a className="mdi mdi-email-outline" href="mailto:hell@email.com" />
              <div className="contact-text">Email: hell@email.com</div>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Home