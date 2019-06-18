import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import ProfilePhoto from './ProfilePhoto.png';
import UIDesign from './UIDesign.png';
import FullStack from './FullStack.png';
import BugIcon from './BugIcon.jpg';

class About extends Component{
    render(){
        return(
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={5}>
                        <div className="ProfilePhoto-container">
                        <img
                            src={ProfilePhoto}
                            alt=""
                            className="profile-img"
                        />
                        
                        </div>
                       
                    </Cell>
                    <Cell col={7}>
                    <div className="about-me-wrapper" >
                        <div className="about-me-text">
                            <h2 >   Who I Am </h2>
                            {/* <hr/> */}
                            <p> <span className="about-me-span"> Hello! I'm <strong>Amine</strong>, a <strong>Software Engineering</strong> student based in <strong>Calgary, AB </strong> who enjoys building things that live on the internet. I develop exceptional <strong>Websites</strong> and <strong> Applications</strong> that provide intuitive, pixel-perfect <strong> User Interfaces </strong> with efficient and <strong>Modern Backends </strong>. My intrests include <strong> Web-System Design </strong>, <strong> Software Testing & QA </strong> and <strong> Human-Computer Interaction</strong> but are growing everyday. When I'm not coding away on my MacBook, I prefer to be playing sports, listening to music or enjoying the outdoors. </span>  </p>
                        </div>
                        <br/>
                        {/* <hr/> */}
                        <div className="about-me-photos">
                            <h2> What I Offer </h2>
                            
                            <div className="row">
                                <div className="column">
                                    <img src={UIDesign} alt="Snow" />
                                    <p> Elegant UI Design </p>
                                </div>
                                <div className="column">
                                    <img src={FullStack} alt="Forest" />
                                    <p> Full Stack Development</p>
                                </div>
                                <div className="column">
                                    <img src={BugIcon} alt="Mountains" />
                                    <p> Testing & Quality Assurance</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Cell>

                
                </Grid>
            </div>
        )
    }
}

export default About ;