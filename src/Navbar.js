import React, {Component} from 'react';

class Navbar extends Component{
    constructor(props){
        super(props);

        this.state = [

        ]
    }
    render(){
        return(
        <div>
            <div class="login-wrapper" id="login-content">
            <div class="login-content">
                <a href="#" class="close">x</a>
                <h3>Login</h3>
                <form>
                    <div class="row">
                     <label for="username">
                            Username:
                        <input type="text" name="username" id="username" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
                    </label>
                    </div>
               
                    <div class="row">
                        <label for="password">
                            Password:
                            <input type="password" name="password" id="password" placeholder="******" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                        </label>
                    </div>
                    <div class="row">
                        <div class="remember">
                            <div>
                                <input type="checkbox" name="remember" value="Remember me"></input>
                            </div>
                            <a href="#">Forget password ?</a>
                        </div>
                    </div>
                <div class="row">
                    <button type="submit">Login</button>
                </div>
                </form>
                <div class="row">
                    <p>Or via social</p>
                    <div class="social-btn-2">
                        <a class="fb" href="#"><i class="ion-social-facebook"></i>Facebook</a>
                        <a class="tw" href="#"><i class="ion-social-twitter"></i>twitter</a>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="login-wrapper"  id="signup-content">
            <div class="login-content">
                <a href="#" class="close">x</a>
                <h3>sign up</h3>
                <form method="post" action="signup.php">
                    <div class="row">
                        <label for="username-2">
                            Username:
                            <input type="text" name="username" id="username-2" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
                        </label>
                    </div>
                
                    <div class="row">
                        <label for="email-2">
                            your email:
                            <input type="password" name="email" id="email-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                        </label>
                    </div>
                    <div class="row">
                        <label for="password-2">
                            Password:
                            <input type="password" name="password" id="password-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                        </label>
                    </div>
                    <div class="row">
                        <label for="repassword-2">
                            re-type Password:
                            <input type="password" name="password" id="repassword-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                        </label>
                    </div>
                <div class="row">
                    <button type="submit">sign up</button>
                </div>
                </form>
            </div>
        </div>
    
    <header class="ht-header">
        <div class="container">
        <nav class="navbar navbar-default navbar-custom">

				<div class="navbar-header logo">
				    <div class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					    <span class="sr-only">Toggle navigation</span>
					    <div id="nav-icon1">
							<span></span>
							<span></span>
							<span></span>
						</div>
				    </div>
				    <a href="index.html"><img class="logo" src="/images/logo1.png" alt="" width="119" height="58" /></a>
			    </div>

				<div class="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav flex-child-menu menu-left">
						<li class="hidden">
							<a href="#page-top"></a>
						</li>
						<li class="dropdown first">
							<a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
							Home <i class="fa fa-angle-down" aria-hidden="true"></i>
							</a>
						</li>
						<li class="dropdown first">
							<a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							about<i class="fa fa-angle-down" aria-hidden="true"></i>
							</a>
						</li>
						<li class="dropdown first">
							<a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							how it works <i class="fa fa-angle-down" aria-hidden="true"></i>
							</a>
						</li>
						<li class="dropdown first">
							<a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							winners <i class="fa fa-angle-down" aria-hidden="true"></i>
							</a>
						</li>
						<li class="dropdown first">
							<a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							contest <i class="fa fa-angle-down" aria-hidden="true"></i>
							</a>
						</li>
                        <li class="dropdown first">
							<a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							contact <i class="fa fa-angle-down" aria-hidden="true"></i>
							</a>
						</li>
					</ul>
					<ul class="nav navbar-nav flex-child-menu menu-right">
						<li class="loginLink"><a href="#">LOG In</a></li>
						<li class="btn signupLink"><a href="#">sign up</a></li>
					</ul>
				</div>
	    </nav>
    
            <div class="top-search">
                <select>
                    <option value="united">TV show</option>
                    <option value="saab">Others</option>
                </select>
                <input style={{borderRadius: "3px"}} type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for" />
            </div>
        </div>
    </header>
    </div>
        )
    }
}

export default Navbar