
 
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ViewVideo() {
  const params = useParams();
  const [video, setVideo] = useState({
    VideoId: "",
    Title: "",
    Url: "",
    Likes: 0,
    Dislikes: 0,
    Views: 0,
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/videos/${params.id}`)
      .then(response => {
        if (response.data.length > 0) {
          setVideo(response.data[0]);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [params.id]);

  return (
    <div>
      <h1>ViewVideo-{params.id}</h1>
      <h2>{video.Title}</h2>
      <iframe title="video" src={video.Url} width="400" height="300" allowFullScreen></iframe>
      <p>
        <Link to="/AdminHome">Adminhome</Link>
      </p>
      <p>Likes: {video.Likes}</p>
      <p>Dislikes: {video.Dislikes}</p>
      <p>Views: {video.Views}</p>
    </div>
  );
}
