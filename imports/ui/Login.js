import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({error: 'Unable to login. Check email and password.'});
      } else {
        this.setState({error: ''});
      }
    });
  }
  render() {
    return (
      <div>        

        <div className="main-container">
            <section className="cover height-100 imagebg text-center banner" data-overlay="2" id="home">
                <div className="background-image-holder">
                    <img className="" alt="background" src="../img/landing-10.jpg"  />
                </div>
                <div className="container pos-vertical-center">
                    <div className="row text-center">
                        <div className="col-md-6">
                            <div className="login_wrapper">
                            <h3>
                                Login 
                            </h3>
                            {this.state.error ? <p className="alert alert-danger">{this.state.error}</p> : undefined}
                            <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" ref="email" name="email" placeholder="Email"/>
          <input type="password" ref="password" name="password" placeholder="Password"/>
          <button className="btn btn--primary type--uppercase site_btn">Login</button>
        </form>
                            <a className=" " href="#">
                                <span className="btn__text">
                                {/* <Link to="/signup">Have an account?</Link> */}
                                </span>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
    );
  }
}
