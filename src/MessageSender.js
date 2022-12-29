import { Avatar, IconButton, Modal } from "@mui/material";
import React, { useState } from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CollectionsIcon from "@mui/icons-material/Collections";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import CancelIcon from "@mui/icons-material/Cancel";
import profile from "./images/profile.png";

import "./CSS/message_sender.css";
function MessageSender({ addPosts }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleClose = () => {
    setOpen(false);
    setMessage("");
    setImageUrl("");
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const addImage = async (event) => {
    const fr = new FileReader();
    console.log(event);
    fr.readAsDataURL(event.target.files[0]);
    fr.onload = () => {
      const url = fr.result;
      setImageUrl(url);
    };
  };
  const handleCancelImage=()=>{
    setImageUrl('');
  }
  const handleSubmit = () => {
    const currentDate = new Date();
    let time = currentDate.toLocaleTimeString().split(":");
    time.pop();
    addPosts({
      photoURL: profile,
      name: "Ñîrâj Môdî",
      image: imageUrl,
      message: message,
      timeStamp: time[0] + ":" + time[1],
    });
    setMessage("");
    setImageUrl("");
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="modal_pop">
          <form>
            <div className="modalHeading">
              <h3>Create Post</h3>
              <IconButton>
                <CancelIcon fontSize="large" onClick={handleClose} />
              </IconButton>
            </div>
            <div className="modal_headerTop">
              <Avatar src={profile} />
              <h5>Ñîrâj Môdî</h5>
            </div>
            <div className="modalBody">
              <textarea
                rows="5"
                placeholder="What's on your mind Ñîrâj?"
                onChange={handleChange}
                value={message}
              ></textarea>
            </div>
            <div className="modal_footer">
              <div className="modal_footerLeft">
                <p>Add to your Post</p>
              </div>
              <div className="modal_footerRight">
                <IconButton>
                  <label htmlFor="addImg" title="Add Image">
                    <CollectionsIcon
                      fontSize="large"
                      style={{ color: "lightgreen", cursor: "pointer" }}
                    />
                  </label>
                  <input
                    type="file"
                    id="addImg"
                    style={{ display: "none" }}
                    onChange={addImage}
                  ></input>
                </IconButton>
                <IconButton>
                  <VideoCallIcon fontSize="large" style={{ color: "red" }} />
                </IconButton>
                <IconButton>
                  <TagFacesIcon fontSize="large" style={{ color: "#ffb100" }} />
                </IconButton>
              </div>
            </div>
            {imageUrl !== "" && (
              <div class="publishBox">
                <img src={imageUrl} alt="" class="prePublishImg" />
                <span>
                  <div class="cancelImage" onClick={handleCancelImage}>
                    <IconButton>
                      <CancelIcon />
                    </IconButton>
                  </div>
                </span>
              </div>
            )}
            <input
              type="button"
              className="post_submit"
              value="Post"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </Modal>
      <div className="messagesender">
        <div className="messagesender_top">
          <Avatar src={profile} />
          <form>
            <input
              type="text"
              placeholder="What's on your mind Ñîrâj"
              onClick={handleOpen}
              readOnly
            />
          </form>
        </div>
        <div className="messagesender_bottom">
          <div className="messengerOptions">
            <VideoCallIcon style={{ color: "red" }} />
            <p>Live Video</p>
          </div>
          <div className="messengerOptions">
            <CollectionsIcon style={{ color: "lightgreen" }} />
            <p>Photo/Video</p>
          </div>
          <div className="messengerOptions">
            <TagFacesIcon style={{ color: "#ffb100" }} />
            <p>Feeling/Activity</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageSender;
