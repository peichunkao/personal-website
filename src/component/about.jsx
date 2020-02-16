import React from 'react'
import layers from '../img/layers.png'
import cogwheel from '../img/cogwheel.png'
import pen from '../img/pen.png'
import browser from '../img/browser.png'
import myImage from '../img/myImage.jpg'
import PropTypes from 'prop-types'

export default class About extends React.Component {
  render () {
    return (
      <div
        id='about-container'
        className='content-containers container text-center mt-5'
      >
        <h1 id='about' className={this.props.bounceLeft}>
          About
        </h1>
        <div className='row' style={{ marginTop: 3 + 'rem' }}>
          <div className={'col-12 col-lg-6 hidden'}>
            <div className='card border-success '>
              <div class='card-header h2'>About Me - Steven Kao</div>
              <div class='avatar white mt-3 mx-5'>
                <img
                  src={myImage}
                  class='rounded-circle img-responsive'
                  alt='myAvatar'
                  style={{
                    borderRadius: 50 + '%',
                    height: 340 + 'px',
                    alignSelf: 'center'
                  }}
                />
              </div>
              <p className={'mytext pt-3 px-5 ' + this.props.fadeIn}>
                I love to transform ideas into actual codes and bring the best
                user experience to customers. I am a enthusiastic coworker that
                happy to share my experiences and learn new technologies.
              </p>
            </div>
          </div>
          <div
            className={'col-12 col-sm-12 col-md-12 col-lg-6 ' + this.props.tada}
          >
            <div class='card border-primary mt-1'>
              <div class='card-header h2 '>Basic Information</div>
              <div class='card-body'>
                <div class='row mt-3'>
                  <div class='col-sm-4'>
                    <strong
                      class={'text-uppercase mytext ' + this.props.fadeIn}
                    >
                      Email:
                    </strong>
                  </div>
                  <div class='col-sm-8 mytext'>stevenkaoo@gmail.com</div>
                </div>
                <div class='row mt-3'>
                  <div class='col-sm-4'>
                    <strong
                      class={'text-uppercase mytext ' + this.props.fadeIn}
                    >
                      PHONE:
                    </strong>
                  </div>
                  <div class='col-sm-8 mytext'>+61 0449882068</div>
                </div>
                <div class='row mt-3'>
                  <div class='col-sm-4'>
                    <strong class='text-uppercase mytext'>ADDRESS:</strong>
                  </div>
                  <div class='col-sm-8 mytext'>
                    Courtney St, North Melbourne
                  </div>
                </div>
              </div>
            </div>
            <div class='card border-warning mt-2'>
              <div class='card-header h2'>Skills</div>
              <div class='card-body'>
                <div class='row mt-3'>
                  <div class='col-sm-4'>
                    <strong class='text-uppercase mytext'>Front-end: </strong>
                  </div>
                  <div class='col-sm-8 mytext'>
                    HTML5, CSS, JavaScript, jQuery, Bootstrap4, React.js, React
                    Native
                  </div>
                </div>
                <div class='row mt-3'>
                  <div class='col-sm-4'>
                    <strong class='text-uppercase mytext'>Back-end:</strong>
                  </div>
                  <div class='col-sm-8 mytext'>
                    Node.js, Express.js, RESTful API, Java
                  </div>
                </div>
                <div class='row mt-3'>
                  <div class='col-sm-4'>
                    <strong class='text-uppercase mytext'>Database:</strong>
                  </div>
                  <div class='col-sm-8 mytext'>MySQL, MongoDB, MS SQL</div>
                </div>
                <div class='row mt-3'>
                  <div class='col-sm-4'>
                    <strong class='text-uppercase mytext'>Other Tools:</strong>
                  </div>
                  <div class='col-sm-8 mytext'>Git, Postman, Heroku</div>
                </div>
              </div>
            </div>
          </div>
          {/* <div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-6 " +
							this.props.tada
						}>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								HTML5
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS3
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Javascript
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								PHP
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								ReactJS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								NodeJs
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								SASS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								VanillaJS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								JQuery
							</div>
						</div> */}
          {/* </div> */}
        </div>
      </div>
    )
  }
}

About.propTypes = {
  bounceLeft: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string
}
