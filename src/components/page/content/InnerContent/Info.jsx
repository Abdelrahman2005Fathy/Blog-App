const Info = ({ author, image, date }) => {
  const timeZone = 'Africa/Cairo';

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: timeZone,
  };

  const isUrl = (string) => {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return regex.test(string);
  };

  const getFirstTwoWords = (text) => {
    const words = text.split(' ');
    return words.slice(0, 2).join(' ');
  };

  let displayAuthor = "Unknown Author";


  if (author) {
    if (isUrl(author)) {
      displayAuthor = "Unknown Author";
    } else {
      displayAuthor = getFirstTwoWords(author);
    }
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(date));

  return (
    <div className="flex items-center justify-center w-[303px] h-[36px] gap-[20px]">
      <div className="flex items-center justify-center text-lg w-[157px] h-[36px] gap-[12px]">
        <img src={image || "./src/assets/Image.png"} alt="Article image" className="w-[36px] h-[36px] rounded-full" />
        <p className="font-['Work_Sans'] text-[16px] font-medium leading-[24px] text-left text-[rgba(151,152,159,1)] w-[109px] h-[24px] ">
          {displayAuthor}
        </p>
      </div>
      <time dateTime={date} className="w-[126px] h-[24px] font-['Work_Sans'] text-[16px] font-normal leading-[24px] text-[rgba(151,152,159,1)] text-left">
        {formattedDate}
      </time>
    </div>
  );
};

export default Info;
