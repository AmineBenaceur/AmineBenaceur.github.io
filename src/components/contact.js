import React, { Component } from 'react';
import { Grid, Cell, List, ListItemContent, ListItem } from 'react-mdl';
import ContactPhoto from './ContactPhoto.jpg';
import AminoAvatar from './AminoAvatar.png'
class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <div className= "contact-left">
                        <h2>Amine Benaceur</h2>
                        <img
                            src={AminoAvatar}
                            alt=""
                            className="contact-img"
                        />
                        <div>
                        <p>
                            
                            "When I’m working on a problem, I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong. " 
                            <br/> - R. Buckminster Fuller
                            
                        </p>
                        </div>
                    </div> 
                    </Cell>
                    <Cell col={6}>
  
                        <h2> Let's Chat! </h2>
                        {/* <hr /> */}
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                <div className="contact-list-item">
                                <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton', }}>
                                &ensp;
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        &ensp;&ensp;(587) 700-6628
                                    </ListItemContent>
                                    </div>
                                </ListItem>
                                <ListItem>
                                <div className="contact-list-item">
                                    <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton', }}>
                                    &ensp;
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        &ensp; abenaceur12@gmail.com
                                    </ListItemContent>
                                    </div>
                                </ListItem>
                                <ListItem>
                                <div className="contact-list-item">
                                    <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton', }}>
                                    &ensp;
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        &ensp;&ensp;<span>abenaceur12</span>
                                    </ListItemContent>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div className="contact-list-item">
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', }}>
                                    &ensp;  
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                        &ensp; &ensp;&ensp;&ensp;&ensp;
                                        <a href="https://www.linkedin.com/in/amine-benaceur-8a624b170/" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-link" aria-hidden="true" />
                                        </a>


                                    </ListItemContent>
                                    </div>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;