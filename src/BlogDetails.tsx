import * as React from 'react';
import { useParams } from "react-router-dom";
import IParam from "./interfaces/IParam";

interface IBlogDetailsProps {

}

const BlogDetails: React.FunctionComponent<IBlogDetailsProps> = (props) => {
  console.log("params.id");
  
  const params = useParams<IParam>();
  console.log(params.id);
  return (
    <div className="blog-details">
      {/* <h1>Blog Details - {params.id} </h1> */}
      <h1>Blog Details </h1>
    </div>
  );
};

export default BlogDetails;