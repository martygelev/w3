
import { useEffect, useState } from "react";


const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");

  const fetchGifs = async () => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=eJUOr2WQXTZOUPvWU0ncQPwF5hVVS1df&q=${keyword.split(" ").join("")}&limit=1`);
      const { data } = await response.json();

      setGifUrl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      setGifUrl("https://64.media.tumblr.com/e7cfe0074ae5fd4bd2f47735e9f53206/tumblr_mkwpqrtiJN1rsdpaso1_500.gifv");
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;