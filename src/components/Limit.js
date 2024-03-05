import React, { Component } from 'react'
import './Limit.css';
export default class Limit extends Component {
  render() {

    return (
      <div >
       
    <div class="error-container" >
        <h1>Oops!</h1>
        <p>API's limit reached...Come Back Tomorrow!</p>
        <form action="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=">
        <button type='submit' className="btn btn-primary">Leave NewsMonkey</button>
        </form>
    </div>

      </div>
    )
  }
}
