import "./../App.css";
import "bootstrap/dist/css/bootstrap.css";

function Card() {
  return (
    <div className="col">
      <div className="card border-dark mb-3">
        <div className="card-header">
          <h5 className="card-title">Hello world</h5>
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
