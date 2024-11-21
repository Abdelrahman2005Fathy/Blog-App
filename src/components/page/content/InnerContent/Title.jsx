import { Link } from "react-router-dom";

const Title = ({ title, articleId }) => {

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  
  const truncatedTitle = truncateText(title || "Untitled Article", 11);

  return (
    <Link to={articleId}>
      {truncatedTitle}
    </Link>
  );
};

export default Title;
