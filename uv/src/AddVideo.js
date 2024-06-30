


import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
 

export default function AddVideo() {
  const [nextVideoId, setNextVideoId] = useState(1);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/videos")
      .then((response) => {
        const videos = response.data;
        if (videos.length > 0) {
          const maxId = Math.max(...videos.map(video => video.VideoId));
          setNextVideoId(maxId + 1);
        }
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      VideoId: 0,
      Title: "",
      Url: "",
      Likes: 0,
      Dislikes: 0,
      Views: 0,
      CategoryId: 0,
    },
    onSubmit: async (values) => {
      values.VideoId = nextVideoId;
      try {
        await axios.post("http://127.0.0.1:5000/addvideo", values);
        alert("Video added successfully");
        setNextVideoId(nextVideoId + 1);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert("VideoId already exists");
        } else {
          alert("An error occurred while adding the video");
        }
      }
    },
  });

  return (



    <div style={{ marginTop: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'rgba(0, 128, 128, 0.5)' }}>
      <div style={{ border: '4px solid red', height: '540px', width: '720px', padding: '20px', boxSizing: 'border-box', borderRadius: '30px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>

      

        <form onSubmit={formik.handleSubmit}>
          <dl>
            <dt>VideoId</dt>
            <dd>
              <input
                type="number"
                name="VideoId"
                value={nextVideoId}
                
                style={{ width: '80%', height: '30px', borderRadius: '10px', border: '2px solid green', marginLeft: "40px" }}
              />
            </dd>
            <dt>Title</dt>
            <dd>
              <input
                type="text"
                name="Title"
                onChange={formik.handleChange}
                value={formik.values.Title}
                style={{ width: '80%', height: '30px', borderRadius: '10px', border: '2px solid green', marginLeft: "40px" }}
              />
            </dd>
            <dt>Url</dt>
            <dd>
              <input
                type="text"
                name="Url"
                onChange={formik.handleChange}
                value={formik.values.Url}
                style={{ width: '80%', height: '30px', borderRadius: '10px', border: '2px solid green', marginLeft: "40px" }}
              />
            </dd>
            <dt>Likes</dt>
            <dd>
              <input
                type="number"
                name="Likes"
                onChange={formik.handleChange}
                value={formik.values.Likes}
                style={{ width: '80%', height: '30px', borderRadius: '10px', border: '2px solid green', marginLeft: "40px" }}
              />
            </dd>
            <dt>Dislikes</dt>
            <dd>
              <input
                type="number"
                name="Dislikes"
                onChange={formik.handleChange}
                value={formik.values.Dislikes}
                style={{ width: '80%', height: '30px', borderRadius: '10px', border: '2px solid green', marginLeft: "40px" }}
              />
            </dd>
            <dt>Views</dt>
            <dd>
              <input
                type="number"
                name="Views"
                onChange={formik.handleChange}
                value={formik.values.Views}
                style={{ width: '80%', height: '30px', borderRadius: '10px', border: '2px solid green', marginLeft: "40px" }}
              />
            </dd>
            <dt>CategoryId</dt>
            <dd>
              <input
                type="number"
                name="CategoryId"
                onChange={formik.handleChange}
                value={formik.values.CategoryId}
                style={{ width: '80%', height: '30px', borderRadius: '10px', border: '2px solid green', marginLeft: "40px" }}
              />
            </dd>
          </dl>
          <button type="submit" style={{ width: '80%', padding: '10px', marginLeft: "50px", marginTop: '20px', backgroundColor: 'brown', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '10px' }}>Add</button>
        </form>
        
      </div>
    </div>
    
  );
}


