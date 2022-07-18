import Facebook from "./assets/icons/Facebook";
import Instagram from "./assets/icons/Instagram";
import Logo from "./assets/icons/Logo";
import Twitter from "./assets/icons/Twitter";
import Youtube from "./assets/icons/Youtube";
import ghosts from "./assets/images/image.png";

import { Play } from "phosphor-react";

function App() {
  return (
    <div className="wrapper">
      <header className="header-container">
        <a href="https://studioghibli.com.br/" target="_blank">
          <Logo />
        </a>
        <div className="social-links">
          <a href="#">
            <Facebook />
          </a>
          <a href="https://instagram.com/gustavron" target="_blank">
            <Instagram />
          </a>
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <Youtube />
          </a>
        </div>
      </header>
      <main>
        <div className="left-main">
          <h2>HAYAO MIYAZAKI</h2>
          <h1>A VIAGEM DE CHIHIRO</h1>
          <p>
            Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que
            a desobedecem são transformados em animais.
          </p>
          <div className="left-main-buttons">
            <a
              href="https://www.netflix.com/watch/60023642?source=35"
              target="_blank"
            >
              <span>
                <Play size={25} />
                ASSISTIR AGORA
              </span>
            </a>
            <a href="https://youtu.be/SgZI655GgHk" target="_blank">
              <span>ASSISTA O TRAILER</span>
            </a>
          </div>
        </div>
        <div className="right-main">
          <img src={ghosts} alt="Imagem dos fantasmas" />
        </div>
      </main>
    </div>
  );
}

export default App;
