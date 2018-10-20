import React, { Component } from 'react';
export default class resume extends Component {
  render() {
    return (
        <React.Fragment>
        <section id="resume">
      {/* Education
    ----------------------------------------------- */}
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>University of Texas at Arlington</h3>
              <p className="info">Bachelors in Computer Science <span>•</span> <em className="date">December 2018</em><span>• GPA 3.5</span></p>
              <p>
               Relevant Courses: Object Oriented Programming (C++), Algorithms & Data Structures, Fundamentals of Software Engineering, Operating System, Functional Programming (Java), Database System, Information Security, Software Testing (Java), Computer Networks (Python), Artificial Intelligence 
              </p>
            </div>
          </div> {/* item end */}
        </div> {/* main-col end */}
      </div> {/* End Education */}
      {/* Work
    ----------------------------------------------- */}
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>State Farm</h3>
              <p className="info">Software Developer Co-op <span>•</span> <em className="date">August 2018 - Present</em></p>
              <ul>
                  <li>• Utilize Giblab’s Restful API web services to obtain daily merge request for team analytics</li>
                  <li>• Creating an issue tracking application for interdepartmental use to connect with the Product Support Team</li>
              </ul>

            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>State Farm</h3>
              <p className="info">Software Developer Intern<span>•</span> <em className="date">May 2018 - July 2018</em></p>
              <ul>
                  <li>• Apart of the Product Support Team and assisted in the production release of Policy Center </li>
                  <li>• Developed and Debugged Gosu Code to align with various business requirements</li>
                  <li>• Used Maven to build the application and wrote functional G-unit test cases for all the developed modules</li>
              </ul>
            </div>
          </div> {/* item end */}
          <div className="row item">
                <div className="twelve columns">
                  <h3>Red Door Escape Room</h3>
                  <p className="info">Research & Development Engineer<span>•</span> <em className="date">January 2016 - Feburary 2018</em></p>
                  <ul>
                      <li>• Initiated developmental stages and direct I/O Hardware design to product release </li>
                      <li>• Programmed Microcontrollers (Arduino) to automate game experience</li>
                      <li>• Performed risk and root cause analysis using engineering quality problem solving techniques</li>
                  </ul>
                </div>
              </div> {/* item end */}
          <div className="row item">
                    <div className="twelve columns">
                      <h3>Malaysian Indonesian Spring Camp</h3>
                      <p className="info">Lead Coordinator<span>•</span> <em className="date">December 2013 - April 2014</em></p>
                      <ul>
                          <li>• Engineered a committee to successfully accommodate 120+ guests</li>
                          <li>• Identified potential weaknesses to ensure subsequent camp success</li>
                          <li>• Bolstered capacity to 25% while maintaining approved budget of $4000</li>
                      </ul>
                    </div>
                  </div> {/* item end */}
        </div> {/* main-col end */}
      </div> {/* End Work */}
      
      
      
      
      {/* Skills
    ----------------------------------------------- */}
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Projects</span></h1>
        </div>
        <div className="nine columns main-col">
           
            <div className="row item">
            <div className="twelve columns">
              <h3>Run Jake Run</h3>
              <p className="info">State Farm Annual Hackathon</p>
              <ul>
                  <li>• Developed an interactive web-based game for employees when the State Farm network was down</li>
                  <li>• Use of JavaScript and Phaser (HTML-5 Framework)</li>
              </ul>
            </div>
          </div> {/* item end */}  
      
      
      
       <div className="row item">
            <div className="twelve columns">
              <h3>Mobile Escape Pod</h3>
              <p className="info">Senior Design Prokect</p>
              <ul>
                  <li>• Created an Interactive mobile escape room prototype with an emphasis on Computer Vision</li>
                  <li>• Developed a Human Skeletal Tracking interface with the Microsoft Kinect and SDK</li>
              </ul>
            </div>
          </div> {/* item end */}  
        </div> {/* main-col end */}
      </div> {/* End skills */}
    </section> {/* Resume Section End*/}
    </React.Fragment>
    );
  }
};