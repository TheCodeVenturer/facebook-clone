import { Avatar } from "@mui/material";
import React from "react";
import "./CSS/story.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import profile from './images/profile.png'
function Storyreels() {
  return (
    <div className="story_box">
      <div className="story_head">
        <div className="story_title story_title--active">Stories</div>
        <div className="story_title">Reels</div>
        <div className="story_title">Rooms</div>
      </div>
      <div className="storyreel">
        <div
          className="story"
          style={{
            backgroundImage: `url(${profile})`,
          }}
        >
          <div className="create_story">
          <AddCircleIcon fontSize="large" style={{color:"#1B74E4"}}/>
          <h4>Create Story</h4>
          </div>
        </div>
        <div
          className="story"
          style={{
            backgroundImage: `url('https://pbs.twimg.com/ext_tw_video_thumb/1035160094130855936/pu/img/HYiY277Qx_4gzY1m.jpg')`,
          }}
        >
          <Avatar src="https://pbs.twimg.com/media/COdj2pEWwAAySZo.jpg"/>
          <h4 className="story_id">Angela Yu</h4>
        </div>
        <div
          className="story"
          style={{
            backgroundImage: `url('https://s3.ap-south-1.amazonaws.com/scaler-production-domestic/public_assets/assets/000/000/242/original/Artboard_2.png?1620807380')`,
          }}
        >
          <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX///8PjP8AatoAQcoAif8Ahv8AXNd4s/8AZdl2i9sAOckANMiptefm7vtrrf+20/8Ag/8Gc+QNhPYAKsaqzv+pwe4JeekQjv8AYtjj7PoOUM8GbtuMr+qLneEAU9YAb+Nzk98ASc3c6/8Aff8AZ+LK3vqbrOXu8vpjqP671/9PoP8AF8SBld6cxv96rPWgu+3D0/KLrujbUuA+AAADL0lEQVR4nO3c23ISQRSFYUAGo7EDMVEgaNSYkESNh/d/OQkwOKfui6H3Xttd679vqK/WFDddw2DAGGOMMcYYY4wxxhhjjDHGGGOMMcYY0yt8OpFo8RkNK1uOz0cCrb68Qsv2hWIoIVxdnRoRLovhXEC4unrx2oZws6CEcAM0ItwsKCF8BtoQboH5hVugCWHYArMLd0ALwt2C2YV7oAFhCcwsLIF4YSiBeYUHIFx4WDCv8B8QLawAcworQLCwCsworAKxwhown7AGhApDDZhNWAcihfUFswkbQKCwCcwkbAJxwtAE5hG2gDBha8E8wjYQJewA5hB2AEHCLmAGYRcQI+wEHi/sBEKE7R+ZLMJuIELYveDRwggQIIwBjxTGgPrCyCN6rDAKVBdGFzxOGAdqC2++zuLdTvp2EgcqC2/ugkT361MjwuV1kPngN0aEYTHxLVwuRr6FG6BvYdgAXQufF3Qt3AEdC/dAv8IS6FYYSqBX4WFBr8IK0KcwVIAuhdUFXQrrQIfCBtCfsAl0JwxNoDdha0Fvwg6gL2H7EXUm7FrQlbAb6EgYAfoRxoBuhFGgF2Ec6ESYAI4m97m/bZeu8G2qh7OePdzZEY6H83jjvs2mloQSFRRSSCGFFFJIIYUUUkghhRRSSCGFFFJIIYUUUmhLWKRKnfxfhMXlNN7jt8TR/sKLtaZwlrw/PJMQXnzMyxtYEwoAbQklgKaEIkBLQhmgIaEQ0I5QCmhGKAa0IpQDGhEKAm0IJYEmhKJAC0JZoAGhMBAvlAbCheJAtFAeCBYqALFCDSBUqAJECnWAQKESECfUAsKEakCUUA8IEioCMcLvisC0MPnOTFL4mDq5/pHXkC55M/N0GW+aupkZ/3wX79dvTaDQ7dr8fBHt+oMqUOiGdP4+/rqYMlBdqA7UFuoDlYUAoK4QAVQVQoCaQgxQUQgC6glRQDUhDKglxAGVhECgjhAJVBFCgRpCLFBBCAbKC9FAcSEcKC3EA4WFBoCyQgtAUaEJoKTQBlBQaAQoJ7QCFBOaAQ6K3v92lez2Dxp26KVMT2gXY4wxxhhjjDHGGGOMMcYYY4wxxhhjlf4C8wil4UN/YGEAAAAASUVORK5CYII="/>
          <h4 className="story_id">Scaler Academy</h4>
        </div>
        <div
          className="story"
          style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE49N14fZTZ3NvyvI5d8DT_-A1M6I0ykVyTVzHmLPxmhBTLWe7hGJ9QoqAAVv5wrfnzFQ&usqp=CAU')`,
          }}
        >
          <Avatar src="https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg"/>
          <h4 className="story_id">Narendra Modi</h4>
        </div>
      </div>
    </div>
  );
}

export default Storyreels;
