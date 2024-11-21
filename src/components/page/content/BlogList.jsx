import BlogCard from './BlogCard';
import { useState } from 'react';
import Button from '../Button';

const BlogList = ({ articles }) => {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 9);
  };

  return (
    <div className="bg-lightBackground dark:bg-darkGray text-lightText dark:text-lightGray w-[1216px] h-auto gap-8 flex-col flex items-center justify-center rounded-[10px]">
      <div className="flex flex-wrap gap-[20px] w-[1216px]">
        {articles.slice(0, visibleCount).map((article) => (
          <div key={article.id || article.title} className="flex-[0_1_calc(33.33%-20px)] mb-5"> 
            <BlogCard article={article} />
          </div>
        ))}
      </div>
      {visibleCount < articles.length ? (
        <Button onClick={handleLoadMore} label="Load More" />
      ) : (
        <Button disabled label="No more" />
      )}
    </div>
  );
};

export default BlogList;
