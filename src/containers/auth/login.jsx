import React, {Component} from 'react';
import LoginForm from '../../components/login/login_form';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height:0,
      width:0
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    //this.setState({ width: window.innerWidth, height: window.innerHeight });
  }



  render() {
    let coverImage = {
      height: this.state.height + "px",
      width: this.state.width + "px",
      backgroundImage: `url(https://rydecars.com/static/media/login-bg.d20f0e58.jpg)`
    };
    return (
      <div  className="wrapper">
        <LoginForm />
      </div>
    )
  }
}

export default Login;
