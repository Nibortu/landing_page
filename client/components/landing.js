import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Navbar from './common/navigate'
import Header from './common/header'

const Dummy = () => {
  return (
    <>
      <Navbar />
      <Header />

      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-screen-desktop m-auto text-primary" />
                </div>
                <h3>Fully Responsive</h3>
                <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-layers m-auto text-primary" />
                </div>
                <h3>Bootstrap 4 Ready</h3>
                <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-check m-auto text-primary" />
                </div>
                <h3>Easy to Use</h3>
                <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{ backgroundImage: 'url(../images/bg-showcase-1.jpg)' }}
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Fully Responsive Design</h2>
              <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it`&apos;`s a phone, tablet, or desktop the page will behave responsively!</p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 text-white showcase-img"
              style={{ backgroundImage: 'url(../images/bg-showcase-2.jpg)' }}
            />
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Updated For Bootstrap 4</h2>
              <p className="lead mb-0">Newly improved, and full of great utility classNamees, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{ backgroundImage: 'url(../images/bg-showcase-3.jpg)' }}
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Easy to Use &amp; Customize</h2>
              <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">What people are saying...</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="images/testimonials-1.jpg" alt="" />
                <h5>Margaret E.</h5>
                <p className="font-weight-light mb-0">&quot;This is fantastic! Thanks so much guys!&quot;</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="images/testimonials-2.jpg" alt="" />
                <h5>Fred S.</h5>
                <p className="font-weight-light mb-0">&quot;Bootstrap is amazing. I&apos;ve been using it to create lots of super nice landing pages.&quot;</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="images/testimonials-3.jpg" alt="" />
                <h5>Sarah W.</h5>
                <p className="font-weight-light mb-0">&quot;Thanks so much for making these free resources available to us!&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action text-white text-center">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h2 className="mb-4">Ready to get started? Sign up now!</h2>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                  </div>
                  <div className="col-12 col-md-3">
                    <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a href="#">About</a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="#">Contact</a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2019. All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mr-3">
                  <a href="#">
                    <i className="fab fa-facebook fa-2x fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a href="#">
                    <i className="fab fa-twitter-square fa-2x fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-instagram fa-2x fa-fw" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
