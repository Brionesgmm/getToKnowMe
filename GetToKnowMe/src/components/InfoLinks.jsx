import React from "react";

const InfoLinks = () => {
  return (
    <section className="bioLinks">
      <img
        className="bioPic"
        src="./public/images/johnnyPhoto.jpg"
        alt="Johnny Briones"
      />
      <h1 className="name">Johnny Briones</h1>
      <h2 className="description">
        Frontend Developer, Game Developer, Memory Champion, Grandmaster of
        Memory, Ultrarunner, Cyclist{" "}
      </h2>
      <ul className="socialLinks">
        <li>
          <a href="https://github.com/Brionesgmm" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/johnny-briones-9090b990/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="mailto:jbrionesgmm@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCeAJS8VHBBII49eHGeBij1g"
            target="_blank"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
        </li>
        {/* <li>
          <a href=""></a>
        </li> */}
      </ul>
    </section>
  );
};

export default InfoLinks;
