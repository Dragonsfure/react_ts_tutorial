import React, { MouseEvent, useEffect, useState } from "react";
import IBlog from "./interfaces/IBlog";

interface BlogsProps{
    blogs: IBlog[];
}

const Home: React.FunctionComponent<BlogsProps> = ({blogs}:BlogsProps) => {
 
  return (
    <div className="Home">
      {blogs.map(item  => (
        <div className="blog-preview" key={item.id} >
        <h2>{ item.title }</h2>
        <p>Written by { item.author }</p>
      </div>
      ))}
    </div>
  );
};

export default Home;
