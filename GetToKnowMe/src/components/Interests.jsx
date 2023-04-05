import React from "react";
import Memory from "./Memory";
import Physical from "./Physical";
import Gaming from "./Gaming";

const Interests = () => {
  return (
    <section className="interests">
      <p className="interestsIntro">
        Learn more about my interests and accomplishments:
      </p>
      <Memory />
      <Physical />
      <Gaming />
    </section>
  );
};

export default Interests;
