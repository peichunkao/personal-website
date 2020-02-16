import React from 'react'
import PropTypes from 'prop-types'

import WOW from 'wowjs'

export default class Background extends React.Component {
  componentDidMount () {
    new WOW.WOW().init()
  }

  render () {
    return (
      <div id='my-background'>
        {/* <div id="stars" />
				<div id="stars2" />
				<div id="stars3" /> */}
        <section id='header' class='jumbotron text-center bg-dark text-white'>
          <h1 className='display-4'>
            Hi, I&apos;m Steven Kao.
            <br />
            Welcome to my personal website.
          </h1>
          <button
            className={'work-button ' + this.props.bounceInUp}
            data-wow-offset='0'
            onClick={() => {
              let node = document.getElementById(
                this.props.aboutRef.current.props.id
              )
              window.scrollTo({
                top: node.offsetTop,
                behavior: 'smooth'
              })
            }}
          >
            View my work
          </button>
        </section>
      </div>
    )
  }
}

Background.propTypes = {
  aboutRef: PropTypes.object,
  bounceIn: PropTypes.string
}
