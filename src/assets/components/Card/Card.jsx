import "./button";

const Card = ({ title, description, img }) => (
    <div className="custom-card">
      <img className="card-image" src={img} alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <button className="btn-primary">Go somewhere</button>
      </div>
    </div>
  );


export default Card
