




import React from "react";
import { Formik, useFormik } from "formik";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EditVideo() {
  const [video, setvideo] = useState([
    { VideoId: "", Title: "", Url: "", Likes: "", Dislikes: "", Views: "" },
  ]);
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      VideoId: video[0].VideoId,
      Title: video[0].Title,
      Url: video[0].Url,
      Likes: video[0].Likes,
      Dislikes: video[0].Dislikes,
      Views: video[0].Views,
    },
    onSubmit: (values) => {
      axios({
        method: "put",
        url: `http://127.0.0.1:5000/updatevideo/${params.id}`,
        data: values,
      });
      alert("video Updated");
    },
    enableReinitialize: true,
  });
  useEffect(() => {
    axios({
      method: "get",
      url: `http://127.0.0.1:5000/videos/${params.id}`,
    }).then((response) => {
      setvideo(response.data);
    });
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ border: "5px solid red", height: "540px", width: "720px", padding: "20px", boxSizing: "border-box", borderRadius: "10px" }}>
        <h1 style={{marginLeft:"200px"}}>Edit Video</h1>
        <form onSubmit={formik.handleSubmit}>
          <dl>
            <dt>VideoId</dt>
            <dd>
              <input type="number" name="VideoId" onChange={formik.handleChange} value={formik.values.VideoId} style={{ width: '80%', height: '30px', borderRadius: '10px', border: '2px solid green', marginLeft: "40px" }} />
            </dd>
            <dt>Title</dt>
            <dd>
              <input type="text" name="Title" onChange={formik.handleChange} value={formik.values.Title} style={{ width: '80%', height: '30px', borderRadius: '10px', border: '2px solid green', marginLeft: "40px" }} />
            </dd>
            <dt>Url</dt>
            <dd>
              <input type="text" name="Url" onChange={formik.handleChange} value={formik.values.Url} style={{ width: '80%', height: '30px', borderRadius: '10px', border: '2px solid green', marginLeft: "40px" }} />
            </dd>
            <dt>Likes</dt>
            <dd>
              <input type="number" name="Likes" onChange={formik.handleChange} value={formik.values.Likes} style={{ width: '80%', height: '30px', borderRadius: '10px', border: '2px solid green', marginLeft: "40px" }} />
            </dd>
            <dt>Dislikes</dt>
            <dd>
              <input type="number" name="Dislikes" onChange={formik.handleChange} value={formik.values.Dislikes} style={{ width: '80%', height: '30px', borderRadius: '10px', border: '2px solid green', marginLeft: "40px" }} />
            </dd>
            <dt>Views</dt>
            <dd>
              <input type="number" name="Views" onChange={formik.handleChange} value={formik.values.Views} style={{ width: '80%', height: '30px', borderRadius: '10px', border: '2px solid green', marginLeft: "40px" }} />
            </dd>
          </dl>
          <button type="submit" style={{ width: '80%', padding: '10px', marginLeft: "50px", marginTop: '20px', backgroundColor: 'brown', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '10px' }}>Edit</button>
        </form>
      </div>
    </div>
  );
}