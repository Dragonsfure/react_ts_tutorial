import IBlog from "./interfaces/IBlog";

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
          <h2>{item.title}</h2>
          <p>Written by {item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
