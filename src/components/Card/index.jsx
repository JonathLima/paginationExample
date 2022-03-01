import "./styles.modules.scss";

function Card({ name }) {
  return (
    <div className="card-container">
      <h1>{name}</h1>
    </div>
  );
}

export default Card;
