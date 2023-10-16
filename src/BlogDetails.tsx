import * as React from "react";
import { useParams } from "react-router-dom";
import IParam from "./interfaces/IParam";
import useFetch from "./useFetch";
import IBlog from "./interfaces/IBlog";

interface IBlogDetailsProps {}

const BlogDetails: React.FunctionComponent<IBlogDetailsProps> = (props) => {
  const params = useParams<IParam>();
  const hookData = useFetch("http://localhost:8000/blogs/" + params.id);
  let newData: IBlog;
  if (hookData.data !== null && (hookData.data as unknown as IBlog)) {
    newData = hookData.data as unknown as IBlog;
    return (
      <div className="blog-details">
        {hookData.isPending && <div>Loading ...</div>}
        {hookData.error && <div>{hookData.error.message}</div>}
        <article>
          <h2>{newData.title}</h2>
          <p>Written by {newData.author}</p>
          <div>{newData.body}</div>
        </article>
      </div>
    );
  }
  return (
    <div className="blog-details">
      {hookData.isPending && <div>Loading ...</div>}
      {hookData.error && <div>{hookData.error.message}</div>}
    </div>
  );
};

export default BlogDetails;
