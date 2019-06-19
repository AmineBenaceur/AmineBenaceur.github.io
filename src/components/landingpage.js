import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl'
import AminoAvatar from './AminoAvatar.png';
import ReactGA from 'react-ga';


class LandingPage extends Component{
    componentDidMount() {
        ReactGA.initialize('UA-142421303-1');
     }
     
    render(){
        
        return(
            
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className= "landing-grid">
                    <Cell col={12}>
                    <hr/>
                    <hr/>
                    <hr/>
                    

                    <img
                    src={AminoAvatar}
                    alt= "avatar"
                    className = "avatar-img"
                    />
                    <div className="banner-text" >
                        <h1>Software Developer</h1>
                         <hr/>

                         <p> HTML/CSS | Bootstrap | JavaScript | React | PHP | Java | Ruby/Rails | MySQL | PostgreSQL </p>
                        <div className="social-links">
                        {/* LinkedIn*/}
                        <a href="https://www.linkedin.com/in/amine-benaceur-8a624b170/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square"  aria-hidden="true"></i>
                        </a>
                         {/* GitHub*/}
                         <a href="https://github.com/AmineBenaceur" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square"  aria-hidden="true"></i>
                        </a>
                          {/* Youtube */}
                          <a href="https://www.youtube.com/channel/UCQXgGmVBzIh9TmXWudIv0Gw" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-youtube-square"  aria-hidden="true"></i>
                        </a>
                        
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;