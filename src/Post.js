import React from 'react';
import PropTypes from 'prop-types';


function Post({id, title, deletePost}) {
    return (
        <div className="Post">
            <button className="Post_delete" onClick={() => deletePost(id)}>X</button> 
            <div className="Post_title">{title}</div>
            <img className="Post_image"
            src={`http://source.unsplash.com/random?sig=${id}`}/>

        </div>
    )
}

//บรรทัด 8 ปุ่ม x สำหรับ delete post
//บรรทัด 9 div สำหรับเก็บค่าที่ post 
//บรรทัด 10 รูปภาพใน post มาจากการสุ่มตาม id

Post.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletePost : PropTypes.func.isRequired
}

export default Post