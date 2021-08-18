import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Header.css';


const MainView = () => {
    return(
        <div className="headerScreenContainer">
            <div className="header">
                <div className="headerPollSimulator">
                    <NavLink className="textLink" to="/" activeClassName="textLinkActive">Poll Simulator</NavLink>
                </div>
                <div className="headerSub">   
                    <NavLink className="textLink" to="/become-candidate">Become Candidate</NavLink>
                    <NavLink className="textLink" to="/cast-vote">Cast Vote</NavLink>
                    <NavLink className="textLink" to="election-result">Election Result</NavLink>
                </div>
            </div>
            <div className="headerScreenTitle">
                <h1>Welcome to Poll Simulator</h1>
            </div>
        </div>
    )
};

export default MainView;