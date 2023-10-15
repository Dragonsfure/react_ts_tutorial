import React, { MouseEvent, useEffect, useState } from "react";
import IBlog from "./interfaces/IBlog";

interface BlogsProps {
  title: string;
  blogs: IBlog[] | null;
  handleDelete: Function;
}

const Home: React.FunctionComponent<BlogsProps> = (props: BlogsProps) => {
  return (
    <div className="Home">
      <h1>{props.title}</h1>
      {props.blogs?.map((item) => (
        <div className="blog-preview" key={item.id}>
          <h2>{item.title}</h2>
          <p>Written by {item.author}</p>
          <button onClick={() => props.handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
