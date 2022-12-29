import React from 'react'
import './CSS/sidebar.css'
import Sidebaroptions from './Sidebaroptions'
import profile from './images/profile.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Sidebar() {
  return (
    <div className='sidebar'>
        <Sidebaroptions src={profile} title="Ñîrâj Môdî"/>
        <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" title="Friends" />
        <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" title="Groups" />
        <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" title="MarketPlace" />
        <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" title="Watch"/>
        <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png" title="Memories"/>
        <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" title="Saved"/>
        <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" title="Pages"/>
        <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png" title="Events"/>
        <Sidebaroptions Icon={KeyboardArrowDownIcon} title="See more"/>
    </div>
  )
}

export default Sidebar