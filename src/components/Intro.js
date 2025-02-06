import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Intro.css';
import logo from '../assets/Logo.svg';

class Intro extends Component {
  render() {
    return (
      <header className="center intro-component">
        <img src={logo} className="App-logo" alt="The Zen Zone" />
        <div className="zen-zone-intro">
          <h1>Welcome to The Zen Zone.</h1>
          <p>Khu vực thiền tối giản, được thiết kế để giúp bạn bình tĩnh lại thông qua sức mạnh của những hoạt động nhỏ, hấp dẫn, hơi buồn cười và kỳ lạ là thỏa mãn. Cảm nhận sự Thiền!</p>
          <Link to="/games">
            <button>Bắt đầu thôi nào!</button>
          </Link>
        </div>
      </header>
    );
  }
}

export default Intro;
