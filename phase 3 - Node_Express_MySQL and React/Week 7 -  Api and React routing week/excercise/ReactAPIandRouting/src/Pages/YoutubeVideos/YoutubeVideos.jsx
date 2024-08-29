import React, { useEffect, useState } from "react";
import "./youtubeVideos.css";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const APPLE_CHANNEL_ID = import.meta.env.VITE_APPLE_CHANNEL_ID;

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = () => {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${APPLE_CHANNEL_ID}&maxResults=8&order=date&key=${YOUTUBE_API_KEY}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setVideos(data.items);
          console.log("Videos fetched:", data.items);
        })
        .catch((err) => {
          alert("Error occurred while fetching data");
          console.error("Error occurred while fetching data: ", err);
        });
    };

    fetchVideos();
  }, []);

  return (<>
   <h2 className="text-center m-5">Youtube Videos</h2>
  </>)
}

export default YoutubeVideos;
