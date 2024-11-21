import { useState, useEffect } from 'react';
import Header from './components/navBar/Header';
import BlogList from './components/page/content/BlogList';
const API_KEY = '832818af9f934e2194e8af2bee08ab4c';
const COUNTRY = 'us';
const CATEGORY = 'general';

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); 

  const URL = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${CATEGORY}&apiKey=${API_KEY}`;

  const fetchArticles = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      
      if (response.ok) {
        setArticles(data.articles); 
      } else {
        throw new Error(data.message || 'Failed to fetch data');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return( 
           <div className="text-[100px] text-center block mt-4 text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400">
              Loading...
           </div>
           );
  }

  if (error) {
    return (
      <div className="m-12 text-[40px] text-center bg-red-100 text-red-800 border border-red-300 p-4 rounded-lg">
        Error: {error}
      </div>
    );
  }
  

  const filteredArticles = articles.filter((article) => {
    const title = article.title || ''; 
    return title.toUpperCase().includes(searchTerm.toUpperCase());
  });
  
  if(filteredArticles.length === 0){
    return(
      <div className="flex-col items-center">
        <Header/>
        <div className='justify-center text-center text-xl font-semibold p-4 
          bg-lightBackground dark:bg-darkGray text-lightText dark:text-darkText'>
          There are no articles matching your search!
        </div>

      </div>
    );
  }

  return (
    <div className="flex flex-col w-full justify-center items-center overflow-x-hidden px-8 py-4 bg-lightBackground dark:bg-darkGray text-lightText dark:text-offWhite">
      <Header setSearchTerm={setSearchTerm} />
      <BlogList articles={filteredArticles} />
    </div>
  );
}

export default Home;