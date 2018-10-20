import React, { Component } from 'react';
export default class about extends Component {
  render() {
    return (
        <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/zaim_profile.jpg" alt />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>Hello! I’m a currently completing my senior year as a Computer Science Student at the 
                University of Texas at Arlington. While attending school, I am working part-time as a software developer 
                at State Farm under the Business Lines Modernization product pupport team. My love for Technology and
                curiosity to create meaningful applications has driven me to pursue programming. During my free time,
                I have a passion for exploring different cultures and seeing the world in a new perspective!
              </p>
        
            <h2>Tecnical Skills</h2>
            <p>
               <ul>
                  <li>Languages: Java, Gosu, Python, C++, C, HTML, CSS, JavaScript, Arduino, SQL, ARM Assembl</li>
                  <li><p>Tools: Github, GitLab, IntelliJ, Eclipse, Android Studio, Xcode, Maven, Command Line, Unix/Linux, MS Office-Suite, Adobe Photoshop, Adobe Illustrator, Arduino Microcontroller, Raspberry Pi, Relays Boards</p></li>
              </ul>
            </p>
    

              <div className="row">
                <div className="columns contact-details">
                  <h2>Lets get in Touch!</h2>
                  <p className="address">
                    <span>Syed Zaim Zanaruddin</span><br />
                    <span>12725 Chinaberry Ct.<br />
                      Euless, TX 76040 US
                    </span><br />
                    <span>Phone: (469) 230-4092</span>
                    <span>Email: Zaim.Zanaruddin56@gmail.com</span><br />
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
        </React.Fragment>
    );
  }
};