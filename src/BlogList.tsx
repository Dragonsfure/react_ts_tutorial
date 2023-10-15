import IBlog from "./interfaces/IBlog";
import { Link } from "react-router-dom";
interface BlogsProps {
  title: string;
  blogs: IBlog[] | null;
}

const BlogList: React.FunctionComponent<BlogsProps> = (props: BlogsProps) => {
  return (
    <div className="Home">
      <h1>{props.title}</h1>
      {props.blogs?.map((item) => (
        <div className="blog-preview" key={item.id}>
          <Link to={`/blogs/${item.id}`}>
            <h2>{item.title}</h2>
            <p>Written by {item.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
