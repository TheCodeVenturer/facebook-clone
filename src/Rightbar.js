import React from "react";
import "./CSS/rightbar.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CampaignIcon from "@mui/icons-material/Campaign";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SearchIcon from "@mui/icons-material/Search";
import FooterOption from "./FooterOption";
function Rightbar() {
  return (
    <div className="menu">
      <div className="menu_header">
        <h4>Your Pages and Profiles</h4>
        <MoreHorizIcon />
      </div>
      <div className="menu_body">
        <div className="menu_body_parent">
          <Avatar src="https://cdn.imgbin.com/2/3/15/imgbin-venkateswara-temple-tirumala-package-tour-srikalahasti-tirumala-tirupati-devasthanams-hindu-temple-tample-BLRPVpvTfvgK6xkY0gfuQ62eu.jpg" />
          <h4>Radhe Nam Sang</h4>
        </div>
        <div className="menu_bodyOptions">
          <NotificationsActiveIcon />
          <p>20+ notification</p>
        </div>
        <div className="menu_bodyOptions">
          <CampaignIcon />
          <p>Create Promotion</p>
        </div>
      </div>
      <hr />
      <div className="menu_footer">
        <div className="menu__footerHead">
          <h4>Contacts</h4>
          <div className="menu_body_right">
            <VideoCallIcon />
            <SearchIcon />
            <MoreHorizIcon />
          </div>
        </div>
        <FooterOption src="data:image/jpeg;base64,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" name="Mark Zuckerberg"/>
        <FooterOption src="https://i.insider.com/617127ab33f4b300189ad412?width=1136&format=jpeg" name="Elon Musk"/>
        <FooterOption src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg" name="Bill Gates"/>
        <FooterOption src="https://media.wired.com/photos/5cd04013b683182462a25235/1:1/w_1327,h_1327,c_limit/microsoft-3590-2.jpg" name="Satya Nadella"/>
        <FooterOption src="https://pbs.twimg.com/media/COdj2pEWwAAySZo.jpg" name="Angela Yu"/>
        <FooterOption src="https://sugermint.com/wp-content/uploads/2020/04/Biography-of-Sundar-Pichai.jpg" name="Sundar Pichai"/>
        <FooterOption src="https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg" name="Narendra Modi"/>
        <FooterOption src="https://i.ytimg.com/vi/gg1lI6ivUXc/maxresdefault.jpg" name="Love Babbar"/>
        
      </div>
    </div>
  );
}

export default Rightbar;
