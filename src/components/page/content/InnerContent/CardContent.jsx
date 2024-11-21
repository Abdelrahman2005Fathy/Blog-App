import Heading from "./Heading";
import Info from "./Info";

const CardContent = ({ article }) => {
  if (!article) {
    return <div>Data is not available</div>;
  }

  return (
    <div className="w-[360px] h-[200px] pt-2 px-0 pb-0 gap-5 flex flex-col border-box">
      <Heading article={article} />
      <Info
        author={article.author}
        image={article.urlToImage}
        date={article.publishedAt}
      />
    </div>
  );
};

export default CardContent;
