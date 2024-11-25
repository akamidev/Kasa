import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  const [logements, setLogements] = useState([]);

  // API LINK : https://titi.startwin.fr/logements
  // WEBSITE VIEW LINK : https://www.figma.com/file/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?type=design&node-id=0-1&mode=design

  useEffect(() => {
    fetch("https://titi.startwin.fr/logements")
        .then((res) => res.json())
        .then((data) => {
          setLogements(data);
      });
  }, []);

  return (
    <div className="homepage">
      {/* DEBUT HERO */}
      <div className="heroe">
        
          <img src="/image/hero.webp" alt="hero" className="hero__img" />
        </div>
      
      {/* FIN HERO */}

      {/* DEBUT CARDS */}

      <div className="cards">
        {logements.map((logement, index) => {
          return (
            <Link to={`/logement/${logement.id}`} key={index}>
              <div className="card">
                <img
                  src={logement.cover}
                  alt={logement.title}
                  className="card__img"
                />
                  <h2 className="card__title">{logement.title}</h2>
                
              </div>
            </Link>
          );
        })}

        {/* FIN CARDS */}



      </div>

      {/* FIN CARDS */}
    </div>
  );
}

export default Homepage;
