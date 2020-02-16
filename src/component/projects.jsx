import React from 'react'
import timesheet from '../img/Timesheet.jpg'
import timesheet2 from '../img/Timesheet2.jpg'
import bootstrapDemo from '../img/Bootstrap_Pattern.png'
import poker from '../img/poker.jpg'
import todo from '../img/todolist.png'
import PropTypes from 'prop-types'

export default class Projects extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div id='my-projects' className='container-fluid bg-light mt-5'>
          <div className='project-container container bg-light pb-5'>
            <h1
              id='projects'
              className={'text-center ' + this.props.fadeInRight}
            >
              Projects
            </h1>
            <div className='row my-5'>
              <div
                className={
                  'testbg col-12 col-sm-12 col-md-4 ' + this.props.fadeIn
                }
              >
                <div className='overlay'>
                  <div className='text'>
                    <h2>iOS/Android Timesheet</h2>
                  </div>
                  <div>
                    <button
                      id='vmarine-button'
                      className='project-button'
                      onClick={() => {
                        var modalBG = document.getElementById('gallery-card')
                        var marineModal = document.getElementById('vmarine')
                        modalBG.style.display = 'block'
                        marineModal.style.display = 'block'
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  'aguabg col-12 col-sm-12 col-md-4 ' + this.props.fadeIn
                }
              >
                <div className='overlay'>
                  <div className='text'>
                    <h2>Bootstrap Demo</h2>
                  </div>
                  <div>
                    <button
                      id='agua-button'
                      className='project-button'
                      onClick={() => {
                        var modalBG = document.getElementById('gallery-card')
                        var aguaModal = document.getElementById(
                          'bootstrap_pattern'
                        )
                        modalBG.style.display = 'block'
                        aguaModal.style.display = 'block'
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  'todobg col-12 col-sm-12 col-md-4 ' + this.props.fadeIn
                }
              >
                <div className='overlay'>
                  <div className='text'>
                    <h2>Poker Dealer</h2>
                  </div>
                  <div>
                    <button
                      id='todo-button'
                      className='project-button'
                      onClick={() => {
                        var modalBG = document.getElementById('gallery-card')
                        var todoModal = document.getElementById('poker')
                        modalBG.style.display = 'block'
                        todoModal.style.display = 'block'
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*hidden modals*/}
        <div id='gallery-card'>
          <div id='vmarine' className='modal-card'>
            <div className='visual d-flex flex-row justify-content-around'>
              <img
                className='mt-3'
                src={timesheet}
                style={{
                  height: '450px',
                  width: 'auto',
                  margin: 'auto 0',
                  marginLeft: '50px'
                }}
                alt=''
              />
              <img
                className='mt-3'
                src={timesheet2}
                style={{ height: '450px', width: 'auto', margin: 'auto 0' }}
                alt=''
              />
            </div>
            <div className='modal-info'>
              <h2>Timesheet App</h2>
              <div className='modal-description'>
                <ul>
                  <li>
                    Provides a user-friendly app that allows employees and
                    managers to manipulate timesheets and schedules.
                  </li>
                  <li>
                    Developed with React Native to reach both iOS and Android
                    users.
                  </li>
                  <li>
                    Tools:{' '}
                    <strong>
                      React Native Expo, Mongoose, Express.js, MongoDB, Node.js,
                      Android Studio
                    </strong>
                  </li>
                </ul>
              </div>
              <div className='modal-bottom'>
                <a
                  href='https://github.com/peichunkao/React_Native_Timesheet'
                  target='_blank'
                >
                  <h3>View live demo</h3>
                </a>
                <p
                  className='close-icon'
                  style={{
                    textAlign: 'right',
                    fontWeight: 900,
                    fontSize: 2 + 'rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    var modalBG = document.getElementById('gallery-card')
                    var marineModal = document.getElementById('vmarine')
                    modalBG.style.display = 'none'
                    marineModal.style.display = 'none'
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>
          {/* bootstrap_pattern */}
          <div id='bootstrap_pattern' className='modal-card'>
            <div className='visual d-flex flex-row justify-content-around'>
              <img
                className='pt-4'
                src={bootstrapDemo}
                style={{
                  height: '500px',
                  width: 'auto',
                  margin: 'auto 0'
                }}
                alt=''
              />
            </div>
            <div className='modal-info'>
              <h2>Bootstrap Demo</h2>
              <div className='modal-description'>
                <ul>
                  <li>Prototype responsive website devloped by Bootstrap4.</li>
                  <li>
                    Tools: <strong>HTML5, CSS3, Bootstrap</strong>
                  </li>
                </ul>
              </div>
              <div className='modal-bottom'>
                <a
                  href='https://peichunkao.github.io/bootstrappattern.github.io/'
                  target='_blank'
                >
                  <h3>View live demo</h3>
                </a>
                <p
                  className='close-icon'
                  style={{
                    textAlign: 'right',
                    fontWeight: 900,
                    fontSize: 2 + 'rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    var modalBG = document.getElementById('gallery-card')
                    var aguaModal = document.getElementById('bootstrap_pattern')
                    modalBG.style.display = 'none'
                    aguaModal.style.display = 'none'
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>

          <div id='poker' className='modal-card'>
            <div className='visual d-flex flex-row justify-content-around'>
              <img
                className='mt-5 ml-5'
                src={poker}
                style={{
                  height: '450px',
                  width: 'auto',
                  margin: 'auto 0'
                }}
                alt=''
              />
            </div>
            <div className='modal-info'>
              <h2>Poker Dealer</h2>
              <div className='modal-description'>
                <ul>
                  <li>
                    A react app that using Deck of Cards API to deal random
                    porkers.
                  </li>
                  <li>
                    Tools: <strong>ReactJS, CSS3 and Deck of Cards API.</strong>
                  </li>
                </ul>
              </div>
              <div className='modal-bottom'>
                <a
                  href='https://peichunkao.github.io/react-randomPokerCards/'
                  target='_blank'
                >
                  <h3>View live demo</h3>
                </a>
                <p
                  className='close-icon'
                  style={{
                    textAlign: 'right',
                    fontWeight: 900,
                    fontSize: 2 + 'rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    var modalBG = document.getElementById('gallery-card')
                    var todoModal = document.getElementById('poker')
                    modalBG.style.display = 'none'
                    todoModal.style.display = 'none'
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>

					<div id='todo' className='modal-card'>
            <div className='visual d-flex flex-row justify-content-around'>
              <img
                className='mt-5 ml-5'
                src={todo}
                style={{
                  height: '450px',
                  width: 'auto',
                  margin: 'auto 0'
                }}
                alt=''
              />
            </div>
            <div className='modal-info'>
              <h2>Todo List</h2>
              <div className='modal-description'>
                <ul>
                  <li>
                    A react app that using Deck of Cards API to deal random
                    porkers.
                  </li>
                  <li>
                    Tools: <strong>ReactJS, CSS3 and Deck of Cards API.</strong>
                  </li>
                </ul>
              </div>
              <div className='modal-bottom'>
                <a
                  href='https://peichunkao.github.io/react-randomPokerCards/'
                  target='_blank'
                >
                  <h3>View live demo</h3>
                </a>
                <p
                  className='close-icon'
                  style={{
                    textAlign: 'right',
                    fontWeight: 900,
                    fontSize: 2 + 'rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    var modalBG = document.getElementById('gallery-card')
                    var todoModal = document.getElementById('poker')
                    modalBG.style.display = 'none'
                    todoModal.style.display = 'none'
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>
					
        </div>
      </React.Fragment>
    )
  }
}

Projects.propTypes = {
  bounceIn: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string
}
