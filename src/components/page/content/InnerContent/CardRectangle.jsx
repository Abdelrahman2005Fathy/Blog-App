const CardRectangle = ({img})=> {
    if(!img){
        return(
          <div className="flex items-center justify-center w-[360px] h-[240px] rounded-md bg-gray-200 text-gray-500">
            There isn't an image
          </div>
        );
    }
    return(
        <img src={img} className="w-[360px] h-[240px] rounded-md"/>
    );
};
export default CardRectangle;