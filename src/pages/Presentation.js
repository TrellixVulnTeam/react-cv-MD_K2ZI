import React from "react";
import Navigation from "../components/Navigation";

const Presentation = () => {
  return (
    <>
      <Navigation />
      <div className="col-xl">
        <h1 className="profile display-4 fw-bolder">À propos</h1>
        <div className="boxRec  display-6">
          <p>
            Ted Saunders est un photographe primé avec un talent pour capturer
            les gens dans leur essence. Ayant fondé Tedshots en 2010, Ted est
            fier de servir des centaines de clients partout dans le monde, des
            grandes entreprises telles que Salesforce et Linked In, aux
            particuliers qui ont simplement besoin d'un excellent portrait.{" "}
            <br />
            <br />
            Ted est un assistant de caméra polyvalent, lorsqu'il ne prend pas de
            photo à la tête, Ted dirige une agence de création multimédia
            appelée Infinit Studios , où il crée du contenu vidéo pour les
            marques et les entreprises.
          </p>

          <br />

          <button className="btn btn-danger">TELECHARGER MON CV</button>
        </div>
      </div>
    </>
  );
};

export default Presentation;
