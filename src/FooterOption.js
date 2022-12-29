import { Avatar } from '@mui/material'
import React from 'react'
import "./CSS/menu_footer.css"
function FooterOption({src,name}) {
  return (
    <div className="footer">
        <Avatar src={src}/>
        <p>{name}</p>
    </div>
  )
}

export default FooterOption