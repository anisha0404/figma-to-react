import branding from '../Images/picturess.png';
const Frame1 = () => {
    return (
      <div className="frame">
        <div className="group2">
          <img src={branding} alt="Brand logo" className="brand-icon" />
          <nav className="navbar-contents">
            <a href="#" className="navbar-link">AI Tools</a>
            <a href="#" className="navbar-link">Submit Tools</a>
            <a href="#" className="navbar-link">Get Featured</a>
            <a href="#" className=" advertise">Advertise</a>
            <a href="#" className="navbar-link">About Us</a>
          </nav>
          {/* hello */}
          <button className="login-button">Login/Signup</button>
        </div>
      </div>
    );
};
export default Frame1;
