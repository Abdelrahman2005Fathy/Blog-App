import Badge from "./Badge";
import Title from "./Title";

const Heading = ({ article={} }) => {
  return (
    <div className="flex-col border-box w-[344px] h-[128px] gap-[16px]">
        <Badge category={article.category} />
        <Title title={article.title} articleId={article.url}/>
    </div>
  );
};

export default Heading;
