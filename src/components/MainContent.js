import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './maincontent.css';

const propTypes = {
    title:PropTypes.string.isRequired,
    onClicked:PropTypes.string,
    title: PropTypes.string.isRequired

}

class MainContent extends Component {
    render() {
        const { title, name, onClick } = this.props;
        return (
          <div className="MainContent">
            <h1>Title: {title}</h1>
            <h2>Name: {name}</h2>
            <div onClick={onClick}>Click me</div>
            
          </div>
        );
      }
}

MainContent.propTypes = propTypes;
export default MainContent;