import ybox from '../Images/Frame4.png';
 const Frame4 = () => {
    return (
       <div className="frame4">
        <div className="load">
                Load More
        </div>
        <div className="f4" >
              <img src={ybox} alt="ybox" className="yimage" />
              <div className="ytext">
                <h1>Stay in the loop</h1>
                <h3>Get the latest insights</h3>
                <div className="search-container2">
                        <input type="text" placeholder="Enter your Email Id" />
                        <button>Subscibe</button>
                    </div>
              </div>
       </div>
       </div>
    );
}

export default Frame4;