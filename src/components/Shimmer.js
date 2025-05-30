const Shimmer = () => {
    const styleString = "m-3 p-3 bg-gray-300 rounded-2xl w-56 h-56 animate-pulse"
    return (
        <div className="flex flex-wrap">
            <div className={styleString}></div>
            <div className={styleString}></div>
            <div className={styleString}></div>
            <div className={styleString}></div>
            <div className={styleString}></div>
            <div className={styleString}></div>
            <div className={styleString}></div>
            <div className={styleString}></div>
            <div className={styleString}></div>
            <div className={styleString}></div>
            <div className={styleString}></div>
            <div className={styleString}></div>
        </div>
    );
}

export default Shimmer;