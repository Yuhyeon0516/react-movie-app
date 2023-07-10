import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`);
    const json = await response.json();

    setMovie(json.data);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);

  return <h1>Detail</h1>;
};

export default Detail;
