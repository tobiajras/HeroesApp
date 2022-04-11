import { Link } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  // const imagePath = `/assets/${id}.jpg`; Imagenes assets

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row not-gutters">
          <div className="col-4">
            <img
              src={heroImages(`./${id}.jpg`)}
              className="card-img"
              alt={superhero}
            />
          </div>
          <div className="col-8">
            <div>
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="text-muted">{characters}</p>
              )}

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
