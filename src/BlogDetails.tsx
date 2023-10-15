import * as React from 'react';
import { useParams } from "react-router-dom";
import IParam from "./interfaces/IParam";

interface IBlogDetailsProps {

}

const BlogDetails: React.FunctionComponent<IBlogDetailsProps> = (props) => {
  const params = useParams<IParam>();
  return (
    <div className="blog-details">
      <h1>Blog Details - {params.id} </h1>
    </div>
  );
};

export default BlogDetails;