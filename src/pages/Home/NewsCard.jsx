import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
  const { title, image_url, thumbnail_url, details, _id } = aNews;
  return (
    <div>
      <div className="card gap-2 bg-base-100 mb-16  shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
        <figure>
          <img src={image_url} alt="" />
        </figure>
        <div className="p-4">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}
              <Link to={`/aNews/${_id}`} className="text-red-500 font-bold">
                {" "}
                Red More........
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
