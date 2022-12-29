import React, { useState } from 'react'
import "./CSS/post.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PublicIcon from '@mui/icons-material/Public';
import { Avatar } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
function Post({photoURL,image,name,timeStamp,message,title}) {
    const [liked,setLiked] = useState(false);
  return (
    <div className='post'>
        <div className='post_top'>
            <div className='post__top_left'>
                <Avatar src={photoURL}/>
                <div className='postinfo'>
                    <h4>{name}</h4>
                    <p>{timeStamp}<PublicIcon/></p>
                </div>
            </div>
            <MoreHorizIcon className='post_more'/>
        </div>
        <div className='post_middle'>
            <h3>{title}</h3>
            <p>{message}</p>
            <img src={image} alt=""/>
        </div>
        <div className='post_bottom'>
            <div className='bottom_options' onClick={()=>setLiked(!liked)}>
                {liked?<ThumbUpIcon style={{color:"#1B74E4"}} />:<ThumbUpOffAltIcon/>}
                <p>Like</p>
            </div>
            <div className='bottom_options'>
                <ChatBubbleOutlineIcon/>
                <p>Comment</p>
            </div>
            <div className='bottom_options'>
                <ShareIcon/>
                <p>Share</p>
            </div>
        </div>
    </div>
  )
}

export default Post