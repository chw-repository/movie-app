import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    // const json = await (
    //   await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    // ).json();

    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();

    setMovie(json.data.movie);
    console.log(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description_full}</p>
          <p>
            <img src={movie.large_cover_image} alt={movie.title} />
          </p>
        </div>
      )}
    </div>
  );
}

export default Detail;
