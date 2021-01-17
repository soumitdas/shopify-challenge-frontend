import "./Card.css";
import NoImagePlaceholder from "../../assets/images/No-Image-Placeholder.png";

const Card = ({ image, title, year, onClick }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image === "N/A" ? NoImagePlaceholder : image} alt={title} />
      </div>
      <header className="card-header">
        <h3>{title}</h3>
      </header>
      <div className="card-content">
        <div className="year-tag">{year}</div>
        <button onClick={onClick} className="btn btn-green">
          Nominate
        </button>
      </div>
    </div>
  );
};

export default Card;
