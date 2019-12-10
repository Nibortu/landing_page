import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Cookies from 'universal-cookie'

const cookies = new Cookies();
cookies.set('myCat', 'Pacman', { path: '/' })
console.log(cookies.get('myCat')); // Pacman
const Dummy = () => {
  return (
    <header className="masthead text-white text-center">
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h1 className="mb-5">Build a landing page for your business or project and generate more leads!</h1>
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
    </header>
  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
