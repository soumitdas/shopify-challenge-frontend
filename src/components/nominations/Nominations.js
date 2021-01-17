import "./Nominations.css";

const Nominations = ({ data = [], removeNomination }) => {
  if (data.length < 1) {
    return <></>;
  }

  return (
    <div className="nominations">
      <h2>Nominations</h2>
      <div className="nominations-content">
        {data.length < 1 && <p>No nomination found...</p>}
        {data.map((item) => (
          <div key={item.imdbID} className="nominations-item">
            <figure className="film-image">
              <img src={item.Poster} alt={item.Title} />
            </figure>
            <div>
              <h3 className="film-title">{item.Title}</h3>
              <p className="film-year">{item.Year}</p>
              <button
                onClick={() => removeNomination(item.imdbID)}
                className="btn nomination-remove-btn"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nominations;
