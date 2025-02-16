import discord from '../Images/discord.png';
import shock from '../Images/box.png';
import ground from '../Images/Online.png';
import greyround from '../Images/Total.png';
const frame6=() =>{
    return (
        <div className="outerr">
            <div className="out6">
                <div className="ltext">
                    <p className="questions">Got Questions?</p>
                    <h1>Join the Community ?</h1>
                    <p className="up">Our discord community and staff are here to help!</p>
                    <p className="down">Your feedback will help Alice AI improve in future versions.</p>
                </div>
                {/* <div className="rimage">
                    <div className="discord-card">
                        
                            <img src={discord} alt="Discord Logo"/>
                        
                        <div className="server-box">
                        <p className="invite">JOIN THE SERVER NOW</p>
                        <div className="server-container">
                            <div className="shock">
                            <img src={shock} alt="shock Logo" />
                            </div>
                            <div className="server-content">
                            <div className="server-content1">
                                <h3>PoweredbyAI.app</h3>
                                <div className="online-info">
                                <img src={ground} alt="Online Logo" />
                                <p className="online">750 Online</p>
                                <img src={greyround} alt="Total Logo" />
                                <p className="members">1,500 Members</p>
                                </div>
                            </div>
                            <div className="server-content2">
                                <button className="join-btn">Join</button>
                            </div>
                            </div> */}
                            <div className="rimage">
                            <div className="discord-icon">
                                <img src={discord} alt="Discord Logo" />
                            </div>
                            <div className="discord-card">
                                <div className="server-box">
                                <p className="invite">JOIN THE SERVER NOW</p>
                                <div className="server-container">
                                    <div className="shock">
                                    <img src={shock} alt="shock Logo" />
                                    </div>
                                    <div className="server-content">
                                    <div className="server-content1">
                                        <h3>PoweredbyAI.app</h3>
                                        <div className="online-info">
                                        <img src={ground} alt="Online Logo" />
                                        <p className="online">750 Online</p>
                                        <img src={greyround} alt="Total Logo" />
                                        <p className="members">1,500 Members</p>
                                        </div>
                                    </div>
                                    <div className="server-content2">
                                        <button className="join-btn">Join</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default frame6;
{/* <div className="server-info">
                            <p className="invite-text">JOIN THE SERVER NOW</p>
                            <div className="server-name">
                                <div className="server-icon">
                                    <img src={shock} alt="shock Logo"/>
                                </div>
                                <div className="power">
                                    <h3>PoweredbyAI.app</h3>
                                    
                                        <p className="stats1">750 Online</p>
                                        <p className="stats2">1,500 Members</p>
                                    
                                </div>
                                <button className="join-button">Join</button> 
                            </div>
                            
                        </div> */}