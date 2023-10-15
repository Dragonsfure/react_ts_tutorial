import React, { useState } from "react";
import logo from "./logo.svg";
import Navbar from "./Navbar";
import Home from "./Home";
import IBlog from "./interfaces/IBlog";


function App() {
  const title: string = "Welcome to test blog";
  const likes: number = 50;
  const link: string = "http://www.google.com";
  const [blogs,setblogs ] = useState<IBlog[]>([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);

  const handleDelete=(id:number) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setblogs(newBlogs);
  }

  return (
    <div className="App">
      <Navbar />


      <div className="content">
        <Home
          blogs={blogs}
          title="All Blogs"
          handleDelete = {handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
