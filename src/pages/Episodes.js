import { useState, useEffect } from "react";
import "./../App.css";

function Episodes() {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/episode");

    const items = await data.json();
    console.log(items);
  };

  return (
    <div>
      <h1>Episodes page</h1>
    </div>
  );
}

export default Episodes;
