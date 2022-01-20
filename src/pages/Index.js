import "bootstrap/dist/css/bootstrap.css";
import "./../App.css";

import Card from "../components/Card";

function Index() {
  return (
    <div>
      <hr className="my-5" />
      <div className="container">
        <div className="row row-cols-3 row-cols-md-3 g-4">
          <Card title="Seassons" />
          <Card title="Episodes" />
          <Card title="Characters" />
        </div>
      </div>
    </div>
  );
}

export default Index;
