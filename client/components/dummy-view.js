import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'

const Dummy = () => {
  let initialCounter = 0
  if (typeof localStorage !== 'undefined'
    && typeof localStorage.getItem('counter') !== 'undefined') {
    initialCounter = +localStorage.getItem('counter')
  }
  const [counter, setCounterNew] = useState(initialCounter)
  const updateCounter = (counterNew) => {
    setCounterNew(counterNew)
    localStorage.setItem('counter', counterNew)
  }

  return (
    <div>
      <Head title="Hello" />
      <div> Hello World from heroku {counter} </div>
      <button
        type="button"
        onClick={() => updateCounter(counter + 1)}
      >
        update Counter
      </button>
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
