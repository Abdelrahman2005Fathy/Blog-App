import CardRectangle from "./InnerContent/CardRectangle";
import CardContent from "./InnerContent/CardContent";

const BlogCard = ({ article }) => {
  return (
    <div className="bg-lightBackground dark:bg-mediumGray text-lightText w-[392px] h-[488px] p-4 gap-4 rounded-[12px] border border-solid border-[rgba(232,232,234,1)] bg-white bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <CardRectangle img={article.urlToImage}/>
      <CardContent article={article}/>
    </div>
    
  );
};

export default BlogCard;
