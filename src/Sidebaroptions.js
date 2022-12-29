import React from 'react';
import { Avatar } from '@mui/material';
import './CSS/siderow.css';
function Sidebaroptions({ src, Icon, title }) {
  return (
    <div className="Sidebar_row">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <p>{title}</p>
          </div>
      )
}

export default Sidebaroptions