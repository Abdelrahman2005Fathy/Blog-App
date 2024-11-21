const Button =({onClick, label})=>{
    return(
        <div className="dark:bg-interactiveBlue w-[123px] h-[48px] py-3 px-5 gap-3 rounded-tl-[6px] border-t border-[1px] rounded-2 border-gray-500 text-gray-500  rounded-md hover:bg-gray-100 focus:outline-none">
            <button  onClick={onClick} className="w-[83px]  dark:text-offWhite h-[24px] font-sans text-base font-medium leading-6 text-left text-[rgba(105,106,117,1)]">
                {label}
            </button>
        </div>
    )
}

export default Button;