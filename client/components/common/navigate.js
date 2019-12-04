import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const Dummy = () => {
  const [counter, setCounter] = useState(0)
  useEffect(
    () => {
      const intervalId = setInterval(() => {
        setCounter(counter + 1)
      }, 1000)
      return () => {
        clearInterval(intervalId)
      }
    },
    [counter]
  )
  return (
    <div>
      <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <div> Hello world { counter }
            <button
              onClick={() => setCounter(counter + 1)}
              type="button"
            >
            addcounter
            </button>
          </div>
          <a className="btn btn-primary" href="#">Sign In</a>
        </div>
      </nav>
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
