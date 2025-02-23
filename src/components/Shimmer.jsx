const Shimmer = () => {
    return (
      <div className="shimmer-container">
        {/* Repeating shimmer cards as placeholders */}
        {[...Array(6)].map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-image"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text short"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-image"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text short"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text short"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-image"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text short"></div>
            <div className="shimmer-text"></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  