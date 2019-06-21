    import React, { Component } from 'react';
    import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Grid, Cell } from 'react-mdl';

    class Projects extends Component {
        constructor(props) {
            super(props);
            this.state = { activeTab: 0 };
        }

        toggleCategories() {

            if (this.state.activeTab === 0) {
                return (
                    <div className="projects-grid">
                        <Grid className="projects-layout-grid">
                            <Cell col={4}><Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.fijitimes.com/wp-content/uploads/2018/12/getty-stock-market-rising_large.jpg) center / cover' }}>
                                    MoneyWatch - Website
                        </CardTitle>
                                <CardText>
                                    A website for the MoneyWatch team. Displays information about us, our vision, stakeholders and our published user reaserch and reaserch methods. 
                        </CardText>
                                <CardActions border>
                                    <Button colored href="https://github.com/AmineBenaceur/MoneyWatch" target="_blank"> GitHub</Button>
                                    <Button colored href="http://adarshmelethil.com/MoneyWatch/" target="_blank"> Link </Button>
                                </CardActions>
                                <CardMenu Style={{ color: '#fff' }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                            </Cell>
                            <Cell col={4}>         <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2600/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg) center / cover' }}>
                                    MyPortfolio
                                    </CardTitle>
                                <CardText>
                                    The portfolio website that you are currently looking at! Originally built for personal use in ReactJS,  but will however soon be available to others as a template.
                </CardText>
                                <CardActions border>
                                    <Button colored href="https://github.com/AmineBenaceur/MyPorfolio" target="_blank" > GitHub</Button>
                                    <Button colored href="https://aminebenaceur.github.io/" target="_blank"> Link </Button>
                                </CardActions>
                                <CardMenu Style={{ color: '#fff' }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                            </Cell>
                            <Cell col={4}>                 <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://blog.hubspot.com/hubfs/To_Do_List.png) center / cover' }}>
                                    ToDoList
            </CardTitle>
                                <CardText>
                                    A front-end To-do list application developed using ReactJS and bootstrap. Was built to use axios as an HTTP client, but was deployed as a static application. 
            </CardText>
                                <CardActions border>
                                    <Button colored href="https://github.com/AmineBenaceur/todo" target="_blank"> GitHub</Button>
                                    <Button colored href="https://aminebenaceur.github.io/todo/" target="_blank"> Link </Button>
                                    
                                </CardActions>
                                <CardMenu Style={{ color: '#fff' }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                            </Cell>
                            <Cell col={4}>          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i0.wp.com/wptavern.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-19-at-8.43.27-PM.png?ssl=1) center / cover' }}>
                                    MoneyWatch - Prototype
                </CardTitle>
                                <CardText>
                                    A prototype for MoneyWatch - a stock research and prediction application. Includes use cases from most important application functionalities. 
            </CardText>
                                <CardActions border>
                                    <Button colored href="https://www.youtube.com/watch?v=35hq-JhyyAo&t=3s" target="_blank">> Live Demo</Button>
                                    
                                </CardActions>
                                <CardMenu Style={{ color: '#fff' }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                            </Cell>
                        </Grid>

                    </div>

                )
            }
            else if (this.state.activeTab === 1) {
                return (
                    <div className="projects-grid">
                    <Grid className="projects-layout-grid">
                        <Cell col={4}><Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center / cover' }}>
                                Learning Platform
                    </CardTitle>
                            <CardText>
                                A multi-threaded client server java application with Swing GUI. Developed for use of students & professors to fascilitate learning, submit and grade assignments, E-mail communication and enrollment into courses. 
                    </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/AmineBenaceur/LearningPlatform/tree/master/src" target="_blank"> GitHub</Button>
                            
                            </CardActions>
                            <CardMenu Style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>
                        <Cell col={4}>         <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://trainstem.com/wp-content/uploads/2019/04/Java-logo-png.png) center / cover' }}>
                                Multi-threaded Client Server TicTacToe
                                </CardTitle>
                            <CardText>
                            A multi threaded TicTacToe client server Java application with SwingGUI. Players can choose to play against random, blocking or smart AI Bots or against other players.

            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/AmineBenaceur/TicTacToeCS" target="_blank" > GitHub</Button>
                            </CardActions>
                            <CardMenu Style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>
                        <Cell col={4}>                 <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/886465/pexels-photo-886465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center / cover' }}>
                            Client Manager 
        </CardTitle>
                            <CardText>
                            A functional java application which implements the MVC design pattern to track clients and info for a company.
        </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/AmineBenaceur/ClientManager" target="_blank"> GitHub</Button>
                                
                                
                            </CardActions>
                            <CardMenu Style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>
                        <Cell col={4}>          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940) center / cover' }}>
                                Inventory Tracker
            </CardTitle>
                            <CardText>
                                A Java application to track inventory items in stock, make orders, browse and search tools & items by various attriubutes. 
        </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/AmineBenaceur/InventoryManager" target="_blank"> GitHub</Button>
                                
                            </CardActions>
                            <CardMenu Style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>
                        <Cell>
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/1811991/pexels-photo-1811991.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940) center / cover' }}>
                           Employee Manager CLI
                            </CardTitle>
                        <CardText>
                          A employee managment application interface on the command line designed for use with ease and speed. 

        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/AmineBenaceur/TicTacToeCS" target="_blank" > GitHub</Button>
                        </CardActions>
                        <CardMenu Style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </Cell>
                    
                    </Grid>

                </div>

                )
            }
            else if (this.state.activeTab === 2) {
                return (
                    <div className="projects-grid">
                    {/* <Grid className="projects-layout-grid">
                        <Cell col={4}> */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://pmcvariety.files.wordpress.com/2018/04/twitch-logo.png?w=1000&h=563&crop=1) center / cover' }}>
                                TwitchHub
                    </CardTitle>
                            <CardText>
                            Twitch streaming web application in Laravel to utilize the Twitch API with PostgreSQL. Users can sign up and subscribe to various categories and stream relevant videos from Twitch in their feed.  
                    </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/AmineBenaceur/TwitchBlog" target="_blank"> GitHub</Button>

                            </CardActions>
                            <CardMenu Style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/* </Cell>
                        <Cell col={4}>      */}
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/33283/stack-of-books-vintage-books-book-books.jpg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940) center / cover' }}>
                                BookLibrary
                                </CardTitle>
                            <CardText>
                                Book library system developed using Laravel and PostgreSQL. Users can login, browse books, view their attributes and put holds on books.
            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/AmineBenaceur/BookLibrary" target="_blank" > GitHub</Button>
                                
                            </CardActions>
                            <CardMenu Style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/* </Cell>
                        <Cell col={4}>     */}
                                     <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i2.wp.com/storage.googleapis.com/blog-images-backup/1*2gKr79YTmj2MkP8zLOn-bg.png?resize=1201%2C401&ssl=1) center / cover' }}>
                                MyBlog
        </CardTitle>
                            <CardText>
                                A blogging application built using laravel along with PostgreSQL. 
        </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/AmineBenaceur/MyBlog" target="_blank"> GitHub</Button>
                                
                                
                            </CardActions>
                            <CardMenu Style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/* </Cell>
                        
                    </Grid> */}

                </div>

                )
            }
            else if (this.state.activeTab === 3) {
                return (
                    <div className="projects-grid">


                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://help.twitter.com/content/dam/help-twitter/logos/card_small_red.png) center / cover' }}>
                                TwitterClone
                    </CardTitle>
                            <CardText>
                            Ruby on Rails application to mimic the twitter website functionality.  
                    </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/AmineBenaceur/TwitterClone" target="_blank"> GitHub</Button>
                                
                            </CardActions>
                            <CardMenu Style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                   
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png) center / cover' }}>
                                FrogBlog
                    </CardTitle>
                            <CardText>
                            Blogging and image sharing application developed using Ruby on Rails and PostgreSQL.  
                    </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/AmineBenaceur/FrogBlog" target="_blank"> GitHub</Button>
                                
                            </CardActions>
                            <CardMenu Style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>


                
                        
                </div>
                )
            }
        }


        render() {
            return (
                <div className="projects-container">

                    <div className="category-tabs" >
                        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                            <Tab className="projects-catagory-tab" style={{ color: 'white', size: '18px;'}}>
                                <strong className="tabstrong">ReactJS & HTML/CSS</strong>
                            </Tab>
                            
                            <Tab className="projects-catagory-tab" style={{ color: 'white'}}>
                                <strong>Java </strong> 
                            </Tab>
                            <Tab className="projects-catagory-tab" style={{ color: 'white'}}>
                                <strong> PHP / Laravel </strong> 
                            </Tab>
                            <Tab className="projects-catagory-tab"style={{ color: 'white'}}>
                                <strong>Ruby on Rails </strong> 
                            </Tab>
                        </Tabs>
                        <Grid >
                            <Cell col={12}>
                                <div className="projects-background">
                                </div>
                                <div className="content" > {this.toggleCategories()} </div>
                            </Cell>
                        </Grid>
                    </div>
                </div>
            )
        }
    }

    export default Projects;