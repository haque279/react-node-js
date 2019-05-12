import React from 'react';

export default class Home extends React.Component {
  render() {
    return(
    <div>

    <div className="nav-container ">
        <div className="bar bar--sm visible-xs">
            <div className="container">
                <div className="row">
                    <div className="col-3 col-md-2">
                        <a href="index.html">
                            <img className="logo logo-dark" alt="logo" src="../img/logo-dark.png" />
                            <img className="logo logo-light" alt="logo" src="../img/logo-light.png" />
                        </a>
                    </div>
                    <div className="col-9 col-md-10 text-right">
                        <a href="#" className="hamburger-toggle" data-toggle-className="#menu2;hidden-xs hidden-sm">
                            <i className="icon icon--sm stack-interface stack-menu"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <nav id="menu2" className="bar bar-2 hidden-xs bar--transparent bar--absolute" data-scroll-className='90vh:pos-fixed'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 text-center text-left-sm hidden-xs order-lg-2">
                        <div className="bar__module">
                            <a href="index.html">
                                <img className="logo logo-dark" alt="logooo" src="../img/logo-dark.png" />
                                <img className="logo logo-light" alt="logooo" src="../img/logo-dark.png" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 order-lg-1">
                        <div className="bar__module">
                            <ul className="menu-horizontal text-left">
                                <li>
                                    <a href="/">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="links">
                                        Accordions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 text-right text-left-xs text-left-sm order-lg-3">
                        <div className="bar__module">
                            <a className="btn btn--sm type--uppercase mr15" href="account.html" >
                                <span className="btn__text">
                                    Create Account
                                </span>
                            </a>
                                    <div className="modal-instance">
                                        <a href="#" className="btn btn--sm btn--primary type--uppercase modal-trigger">
                                            <span className="btn__text">
                                                Login
                                            </span>
                                        </a>
                                        <div className="modal-container">
                                            <div className="modal-content section-modal">
                                                <section className="unpad ">
                                                    <div className="container">
                                                        <div className="row justify-content-center">
                                                            <div className="col-md-6">
                                                                <div className="boxed boxed--lg bg--white text-center feature">
                                                                    <div className="modal-close modal-close-cross"></div>
                                                                    <h3>Login to Your Account</h3>
                                                                    <a className="btn block btn--icon bg--facebook type--uppercase" href="#">
                                                                        <span className="btn__text">
                                                                            <i className="socicon-facebook"></i>
                                                                            Login with Facebook
                                                                        </span>
                                                                    </a>
                                                                    <a className="btn block btn--icon bg--twitter type--uppercase" href="#">
                                                                        <span className="btn__text">
                                                                            <i className="socicon-twitter"></i>
                                                                            Login with Twitter
                                                                        </span>
                                                                    </a>
                                                                    <hr data-title="OR" />
                                                                    <div className="feature__body">
                                                                        <form>
                                                                            <div className="row">
                                                                                <div className="col-md-12">
                                                                                    <input type="text" placeholder="Username" />
                                                                                </div>
                                                                                <div className="col-md-12">
                                                                                    <input type="password" placeholder="Password" />
                                                                                </div>
                                                                                <div className="col-md-12">
                                                                                    <button className="btn btn--primary type--uppercase" type="submit">Login</button>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                        <span className="type--fine-print block">Dont have an account yet?
                                                                            <a href="#">Create account</a>
                                                                        </span>
                                                                        <span className="type--fine-print block">Forgot your username or password?
                                                                            <a href="#">Recover account</a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
        <div className="main-container">
            <section className="cover height-100 imagebg text-center banner" data-overlay="2" id="home">
                <div className="background-image-holder">
                    <img className="" alt="background" src="../img/landing-10.jpg"  />
                </div>
                <div className="container pos-vertical-center">
                    <div className="row">
                        <div className="col-md-8">
                            <img alt="Image" className="unmarg--bottom" src="../img/headline-1.png" />
                            <h3>
                                Streamline your workflow with Stack.
                            </h3>
                            <a className="btn btn--primary type--uppercase" href="#">
                                <span className="btn__text">
                                    View The Demos
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    );
  }
}
