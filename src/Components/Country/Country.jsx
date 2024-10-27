import { useState } from "react";

const Country = ({ country }) => {
  const { name, flags, capital, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(true);
  };

  return (
    <div className={`country ${visited ? "visited" : "not"}`}>
      <img src={flags.png} alt="" />
      <h3>{name.common}</h3>
      <p>Capital: {capital}</p>
      <p>Population: {population} Humans</p>
      <p>
        <small>{area}</small> Areas
      </p>
      <p>
        <small>Code: {cca3}</small>
      </p>

      <div className="visit-btn-txt">
        <button onClick={handleVisited} className="visit-btn">
          {visited ? "I have visited here" : "  Visited?"}
        </button>
        {visited
          ? " ~ I have visited this country 🥱~"
          : " -- I haven't visited this country 🙄 "}
      </div>
    </div>
  );
};

export default Country;
