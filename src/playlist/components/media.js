import React, {Component} from 'react';
import PropTypes from "prop-types";
import './media.css'

class Media extends Component {

  handleCLick = (event) => {
    console.log(this.props.image)
  }

  render(){
    return(
      <div className= "Media" onClick={this.handleCLick}>
        <img 
        src={this.props.cover}
        width={260}
        alt={this.props.alt}
        />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
      )
  }
}

//validador de tipo de datos
Media.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}

export default Media