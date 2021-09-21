import React from "react";

function My_projects() {
    async function  getRepositories(){
        const userName = "neyzar1111"
        let response = await fetch(`https://api.github.com/users/${userName}/repos`);
        let data = await response.json()
        console.log(data)
        return data;
    }
    getRepositories()
    return (
        <>
        <div id="projects">
            {/******1*********/}
            <div className="my_projects">
                <div className="project1-wrap">
                    <span className="decor1"></span>

                    <div className="project-tile">

                        <div>
                            <h3>The-impossible-quiz </h3>
                            <p>
                                In this project I used react and typescript.
                            </p>
                        </div>
                        <div className="icon-github-wrap">
                            <img src="https://img.icons8.com/fluency-systems-filled/25/1f4957/circled-dot.png"/>
                            <p>Typescript</p>
                            <a href="https://github.com/neyzar1111/the-impossible-quiz">
                                <img className= "footer-icon" src="https://img.icons8.com/ios-filled/30/000000/github.png"/>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            {/***********2***********/}
            <div className="my_projects">
                <div className="project1-wrap">
                    <span className="decor1"></span>

                    <div className="project-tile">

                        <div>
                            <h3>JS 21 Card Game </h3>
                            <p>
                                In this project I used JavaScript.Lets play a game!
                            </p>
                        </div>
                        <div className="icon-github-wrap">
                            <img src="https://img.icons8.com/fluency-systems-filled/25/efe943/circled-dot.png"/>
                            <p>JavaScript</p>
                            <a href="https://github.com/neyzar1111/js-21-card-game">
                                <img className= "footer-icon" src="https://img.icons8.com/ios-filled/30/000000/github.png"/>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            {/********3*******/}
            <div className="my_projects">
                <div className="project1-wrap">
                    <span className="decor1"></span>

                    <div className="project-tile">

                        <div>
                            <h3>Rock Paper Scissors </h3>
                            <p>
                                In this project I used JavaScript.
                            </p>
                        </div>
                        <div className="icon-github-wrap">
                            <img src="https://img.icons8.com/fluency-systems-filled/25/efe943/circled-dot.png"/>
                            <p>JavaScript</p>
                            <a href="https://github.com/neyzar1111/rock-paper-scissors">
                                <img className= "footer-icon" src="https://img.icons8.com/ios-filled/30/000000/github.png"/>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            {/******4*******/}
            <div className="my_projects">
                <div className="project1-wrap">
                    <span className="decor1"></span>

                    <div className="project-tile">

                        <div>
                            <h3>Weather app </h3>
                            <p>
                                In this project I used Javascript, webpack,and other tools. Click to watch the work.
                            </p>
                        </div>
                        <div className="icon-github-wrap">
                            <img src="https://img.icons8.com/fluency-systems-filled/25/efe943/circled-dot.png"/>
                            <p>JavaScript</p>
                            <a href="https://github.com/neyzar1111/weather-app">
                                <img className= "footer-icon" src="https://img.icons8.com/ios-filled/30/000000/github.png"/>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        </>

    );
};

export default My_projects;