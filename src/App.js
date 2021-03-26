import './App.css';
import React, {useState} from 'react';

import Navbar from './Navbar';
import Input from './Input';
import Post from './Post';


let id = 1;
/* เก็บค่าของไอดีของ Post โดยเพิ่มขึ้น 1 ทุกครั้งที่เรียกใช้ Post */

function App() {
  const [posts, setPosts] = useState([]);
/* สร้าง state ให้ posts เป็น array ที่เก็บ post ให้ setPosts เป็นฟังก์ชันจัดการให้ post ที่สร้างเพิ่มมาใหม่มาเพิ่มด้านหน้า post ตัวเก่า*/

  function addPost(title) {
    const newPost = {id, title};
    setPosts([newPost, ...posts]);
    id +=1;
  }
/* ฟังก์ชัน appPost จะถูกส่งค่าไปในรูปแบบ prop ไปที่ Input  */
  function deletePost(id){
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }

  return (
    <div className="App">
      <Navbar/>
      <Input addPost={addPost}/>
      {posts.map((post) => (<Post key={post.id} id={post.id} title={post.title} deletePost={deletePost}/>))}
    </div>
  );
}

export default App;
