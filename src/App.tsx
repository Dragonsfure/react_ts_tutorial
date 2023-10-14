import React from "react";
import logo from "./logo.svg";
import Navbar from "./Navbar";
import Home from "./Home";
import IBlog from "./interfaces/IBlog";

const blogs: IBlog[] = [
  { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 },
];

function App() {
  const title: string = "Welcome to test blog";
  const likes: number = 50;
  const link: string = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />


      <div className="content">
        <Home
          blogs={blogs}
          title="All Blogs"
        />
        <Home
          blogs={blogs.filter((item) => item.author === "mario")}
          title="All Marios"
        />
      </div>
    </div>
  );
}

export default App;
