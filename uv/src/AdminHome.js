




import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab, Table, TableBody, TableRow, TableCell, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  viewButton: {
    backgroundColor: "green",
    color: "white",
    marginRight: theme.spacing(1),
  },
  editButton: {
    backgroundColor: "blue",
    color: "white",
    marginRight: theme.spacing(1),
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    marginRight: theme.spacing(1),
  },
  actionButtons: {
    display: "flex",
    justifyContent: "center",
  },
  appBar: {
    marginBottom: theme.spacing(2),
  },
  tab: {
    minWidth: 100,
  },
}));

export default function AdminHome() {
  const [videos, setVideos] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    loadVideos();
  }, []);

  function loadVideos() {
    axios
      .get("http://127.0.0.1:5000/videos")
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error("Error loading videos:", error);
      });
  }

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Tabs>
            <Tab className={classes.tab} label="Title"   style={{color:"white"}}/>
            <Tab className={classes.tab} label="Preview"   style={{color:"white",marginLeft:"200px"}} />
            <Tab className={classes.tab} label="Actions"   style={{color:"white",marginLeft:"700px"}}/>
          </Tabs>
        </Toolbar>
      </AppBar>

      <h1>Admin Home</h1>
      <Table>
        <TableBody>
          {videos.map((vid) => (
            <TableRow key={vid.VideoId}>
              <TableCell>{vid.Title}</TableCell>
              <TableCell>
                <iframe
                  title={vid.Title}
                  width="200"
                  height="400"
                  src={vid.Url}
                  frameBorder="0"
                ></iframe>
              </TableCell>
              <TableCell>
                <div className={classes.actionButtons}>
                  <Button
                    variant="contained"
                    className={classes.viewButton}
                    component={Link}
                    to={`/ViewVideo/${vid.VideoId}`}
                    style={{backgroundColor:"green"}}
                  >
                    View Video
                  </Button>
                  
                  <Button
                    variant="contained"
                    className={classes.editButton}
                    component={Link}
                    to={`/EditVideo/${vid.VideoId}`}
                    style={{backgroundColor:"blue"}}
                  >
                    Edit Video
                  </Button>
                
                  <Button
                    variant="contained"
                    className={classes.deleteButton}
                    component={Link}
                    to={`/DeleteVideo/${vid.VideoId}`}
                    style={{backgroundColor:"red"}}
                  >
                    Delete Video
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
