import "./../App.css";
import "bootstrap/dist/css/bootstrap.css";

import Card from "../components/Card";

function Index() {
  return (
    <div>
      <h1>Index page</h1>
      <div className="container">
        <div className="row row-cols-3 row-cols-md-3 g-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Index;
