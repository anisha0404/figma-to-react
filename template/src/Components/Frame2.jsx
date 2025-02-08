import medal from "../Images/9.png";
import ime from "../Images/content.png";
const Frame2=()=>{
     const categories = [
        "Content Writers",
        "Solepreneurs",
        "Developers",
        "Data Analysis",
        "Content Creators",
        "Marketers",
        "Consultants",
        "Freelancers",
      ];
    return (
            <div className="big">
                <div className="badge-container">
                    <div className="medal">
                        <img src={medal} alt="Medal" />
                        <span className="medal-text"></span>
                    </div>
                    <div className="badge-content">
                        <p className="badge-title">Product Hunt</p>
                        <p className="badge-rank">
                        <span>#3</span> Product of the Day
                        </p>
                    </div>
                </div>
                <div className="f2">
                    <div className="group9">
                        <div className="rectangle5">
                            <div className="group10">
                                3000+ AI
                            </div>
                            <div className="text2">
                                Tools for you!
                            </div>
                        </div>
                        <div className="rectangle6">
                    </div>
                    </div>
                    <div className="container">
                        <h1 className="hf2">
                            Your Favourite <span className="highlight">AI Tools</span>, <br /> One Prompt away.
                        </h1>
                        <div className="search-container">
                            <input type="text" placeholder="Search Top 10 AI tools for Designing" />
                            <button>Generate</button>
                        </div>
                    </div>
                </div>
                <div className="contain">
                    {categories.map((category, index) => (
                    <div key={index} className="bb">
                    {/* Yellow Ellipse */}
                    <div className="ellipse">
                    <img src={ime} 
                        alt={category}
                        className="icon"/>{}
                    <span className="category-text">{category}</span>
                    {}
                    {index === 0 && <div className="underline"></div>}
                    </div>
                    </div>
                ))}
                </div>
            </div>
    )
}
export default  Frame2;