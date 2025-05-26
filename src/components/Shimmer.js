const Shimmer = () => {
    const shimmerList = []
    for(let i = 0 ; i <=5; i++){
        shimmerList.push(i);
    }
    return (
        <div className="shimmer-container">
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
        </div>
    );
}

export default Shimmer;