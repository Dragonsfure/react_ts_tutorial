import { Link } from "react-router-dom";

interface NotFoundProps {}

const NotFound: React.FunctionComponent<NotFoundProps> = (
  props: NotFoundProps
) => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to the Homepage....</Link>
    </div>
  );
};

export default NotFound;
