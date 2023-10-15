import BlogList from "./BlogList";
import useFetch from "./useFetch";

interface BlogsProps {
 
}

const Home: React.FunctionComponent<BlogsProps> = (props: BlogsProps) => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error.message }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title={"All Blogs"} /> }
    </div>
  );
};

export default Home;
