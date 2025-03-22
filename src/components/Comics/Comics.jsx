import React from "react";
import { useParams } from "react-router-dom";
import DataComics from "../../Data/DataComics";

const Comics = () => {
  const { id } = useParams();
  const comic = DataComics.find((comic) => comic.id === id);

  if (!comic) {
    return <h1>Comic not found</h1>;
  }
  return <h1>{comic.titolo}</h1>;
};

export default Comics;
