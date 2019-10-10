import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Navelement extends React.Component {
  render() {
    return (
      <div className="naveleContainer">
        { ( this.props.type == 'Button' ) ? (<button className="btn btn-primary btn-block" onClick = {()=>{ this.props.method ? this.props.method(() => this.props.history.push(this.props.destination),this.props.mode):this.props.history.push(this.props.destination)}}>{this.props.value}</button>) : " "}
        { ( this.props.type == 'HashTag' ) ? (<p onClick = {()=>{ this.props.method ? this.props.method(() => this.props.history.push(this.props.destination),this.props.mode):this.props.history.push(this.props.destination)}}>{this.props.value}</p>) : " "}
      </div>
       
    )
  }
}

export default withRouter(Navelement)