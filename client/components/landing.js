import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const Dummy = () => {
  return (
    <>
      <header className="header">
        <div className="header_wrap d-flex flex-row align-items-center justify-content-center">
          <div className="logo">
            <a href="/landing"><img src="images/logo_1.png" alt="" />
            </a>
          </div>
          <nav className="main_nav">
            <ul className="d-flex flex-row align-items-center justify-content-center">
              <li><a href="index.html">home</a></li>
              <li><a href="about.html">about us</a></li>
              <li><a href="classes.html">classes</a></li>
              <li><a href="blog.html">blog</a></li>
              <li><a href="contact.html">contact</a></li>
            </ul>
          </nav>
          <div className="social header_social">
            <ul className="d-flex flex-row align-items-center justify-content-start">
              <li><a href="http://pinterest.com">pinterest<i className="fa fa-pinterest" aria-hidden="true" /></a></li>
              <li><a href="http://facebook.com">facebook<i className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li><a href="http://twitter.com">twitter<i className="fa fa-twitter" aria-hidden="true" /></a></li>
            </ul>
          </div>
          <div className="hamburger ml-auto"><i className="fa fa-bars" aria-hidden="true" /></div>
        </div>
      </header>

      <header className="fixed_header">
        <div className="header_wrap d-flex flex-row align-items-center justify-content-center">
          <div className="logo"><a href="/home">Home</a><img src="images/logo_2.png" alt="" />
          </div>
          <nav className="main_nav">
            <ul className="d-flex flex-row align-items-center justify-content-center">
              <li><a href="index.html">home</a></li>
              <li className="active"><a href="about.html">about us</a></li>
              <li><a href="classes.html">classes</a></li>
              <li><a href="blog.html">blog</a></li>
              <li><a href="contact.html">contact</a></li>
            </ul>
          </nav>

          <div className="social header_social">
            <ul className="d-flex flex-row align-items-center justify-content-start">
              <li><a href="http://pinterest.com">pinterest<i className="fa fa-pinterest" aria-hidden="true" /></a></li>
              <li><a href="http://facebook.com">facebook<i className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li><a href="http://twitter.com">twitter<i className="fa fa-twitter" aria-hidden="true" /></a></li>
            </ul>
          </div>
          <div className="hamburger ml-auto"><i className="fa fa-bars" aria-hidden="true" /></div>

        </div>
      </header>

      <div className="menu">
        <div className="menu_door door_left" />
        <div className="menu_door door_right" />
        <div className="menu_content d-flex flex-column align-items-center justify-content-center">
          <div className="menu_close">close</div>
          <div className="menu_nav_container">
            <nav className="menu_nav text-center">
              <ul>
                <li><a href="index.html">home</a></li>
                <li><a href="about.html">about us</a></li>
                <li><a href="classes.html">classes</a></li>
                <li><a href="blog.html">blog</a></li>
                <li><a href="contact.html">contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="social menu_social">
            <ul className="d-flex flex-row align-items-center justify-content-start">
              <li><a href="http://pinterest.com">pinterest<i className="fa fa-pinterest" aria-hidden="true" /></a></li>
              <li><a href="http://facebook.com">facebook<i className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li><a href="http://twitter.com">twitter<i className="fa fa-twitter" aria-hidden="true" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
