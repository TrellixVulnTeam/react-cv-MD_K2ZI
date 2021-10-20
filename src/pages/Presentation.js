import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Aos from "aos";

const Presentation = () => {
  useEffect(() => {
    Aos.init({ duration: 200 });
  });

  // function removeEffect() {
  //   window.classList.add("fonduChargement");
  // }

  return (
    <>
      {/* <Chargement /> */}
      <Navigation imgchaque="../../../images/profil.webp" />
      <div className="col-xl">
        <h1 className="profile display-4 fw-bolder">About</h1>
        <div className="boxRec  display-6" data-aos="fade-up">
          <p>
            Développeur web curieux, autonome, rigoureux, j'aime les sites
            simples, rapides et efficaces. Un sens de l'écoute et du service
            renforcé par 4 ans d'expérience à travailler sur des projets variés,
            une expertise technique en constante progression grâce à des
            formations .
            <br />
            <br />
            Motivé par le besoin de faire toujours mieux et appuyer par de
            solides bases acquises lors de mon parcours, je prends plaisir à
            relever de nouveaux challenges. Actuellement en poste, je m'épanouis
            avec l'équipe d' Apple.
          </p>

          <br />

          <button className="btn btn-danger">TELECHARGER MON CV</button>
        </div>
      </div>
    </>
  );
};

export default Presentation;
