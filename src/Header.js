import React from "react";
import "./CSS/header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StoreIcon from "@mui/icons-material/Store";
import Groups2Icon from "@mui/icons-material/Groups2";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Avatar, IconButton } from "@mui/material";
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profile from './images/profile.png'
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="data:image/png;base64,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"
          alt="fb-logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header_middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option ">
          <OndemandVideoIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StoreIcon fontSize="large" />
        </div>
        <div className="header__option">
          <Groups2Icon fontSize="large" />
        </div>
        <div className="header__option">
          <SportsEsportsIcon fontSize="large" />
        </div>
      </div>
      <div className="header_right">
      <IconButton>
                <AppsRoundedIcon/>
        </IconButton>
      <IconButton>
                <ForumIcon/>
        </IconButton>
      <IconButton>
                <NotificationsIcon/>
        </IconButton>
        <div className="header__info">
        <IconButton>
                <Avatar src={profile}/>
            </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
