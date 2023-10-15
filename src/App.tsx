import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Navbar from "./Navbar";
import Home from "./Home";
import IBlog from "./interfaces/IBlog";

function App() {
  const title: string = "Welcome to test blog";
  const likes: number = 50;
  const link: string = "http://www.google.com";
  const [blogs, setblogs] = useState<IBlog[] | null>(null);

  const [name, setName] = useState<string>("mario");

  const handleDelete = (id: number) => {
    const newBlogs = blogs?.filter((blog) => blog.id !== id);
    if (newBlogs !== undefined) {
      setblogs(newBlogs);
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json() as Promise<IBlog[]>;
      })
      .then((data) => {
        console.log(data);
        setblogs(data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Home blogs={blogs} title="All Blogs" handleDelete={handleDelete} />

        <button onClick={() => setName("luigi")}>change name</button>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default App;
