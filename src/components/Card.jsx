import "bootstrap/dist/css/bootstrap.css";
import "./../App.css";

function Card(props) {
  return (
    <div className="col">
      <div className="card border-dark mb-3">
        <div className="card-header">
          <h5 className="card-title">{props.title}</h5>
        </div>
        <img src="https://via.placeholder.com/150" className="card-img-top" />
        <div className="card-body">
          <p className="card-text">Just a quick example of cards</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
