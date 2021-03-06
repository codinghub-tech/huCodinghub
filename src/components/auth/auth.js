import React, { useState,useRef } from 'react';
import './auth.css';
import { useSpring, animated } from 'react-spring';

function Auth(props) {
    
    const [state,setstate]=useState(false);
    const SignInView = useRef(null);
    const SignUpView = useRef(null);

    //animation for animating the bubble across the screen
    const bubbleAnimation = useSpring({
        transform: state ? `translate3d(100%,0,0)` : `translate3d(0%,0,0)`,
        config:{duration:2000}
    });

    //animation for animating the Sign In Form
    const signInFormAnimation = useSpring({
        transform: state ? `translate3d(0%,0,0)` : `translate3d(10%,0,0)`,
        config:{duration:1500}
    });

    //animation for animating the Sign Up Form
    const signUpFormAnimation = useSpring({
        transform: state ? `translate3d(-10%,0,0)` : `translate3d(0%,0,0)`,
        config:{duration:1500}
    });

    const toggle=()=>{
        setstate(!state)

        //code to move the screen along the bubble
        if(!state){
            SignUpView.current.scrollIntoView({ behavior: 'smooth',block:'start' })
        }else{
            SignInView.current.scrollIntoView({ behavior: 'smooth',block:'start' })
        }
    }

    return (
        <div style={{overflow:'auto'}}>
            <animated.div className="moving-ball" style={bubbleAnimation}>
            </animated.div>
            <div className="main-auth" style={{width:1.9*window.innerWidth,maxHeight:window.innerHeight,display:'flex',flexDirection:'row',flexWrap: 'nowrap'}}>
                
                <div style={styles.divSignIn} ref={SignInView}>

                    <div style={{flex:'1',overflow:'hidden',display:'flex',zIndex:100,flexDirection:'column'}}>
                        <div style={{flex:'1',display:'flex',flexDirection:'row'}}>
                            <div style={{flex:'1'}}>
                            </div>
                            <div style={{flex:'1',justifyContent:'center',alignSelf:'center'}}>
                                <h4 style={{color:'white'}}>New here ?</h4>
                                <span style={{color:'white'}}>Then Sign Up and Start Ordering!</span>
                                <input type="submit" className="btn2 solid" value="Sign Up" onClick={()=>toggle()} />
                            </div>
                        </div>
                        <div style={{flex:'1',display:'flex',justifyContent:'flex-end'}}>
                            <img src={require('../../signin.svg')} className="image"  alt=""/>
                        </div>
                    </div>

                    <animated.div className="divforms" style={signInFormAnimation}>
                        <form>
                            <h2 className="title" style={{fontFamily:'poppins'}}>Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user" aria-hidden="true"></i>
                                <input name="email" type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock" aria-hidden="true"></i>
                                <input name="password" type="password" placeholder="Password" />
                            </div>
                                <input type="submit" className="btn solid" value="Login" />
                                <a href="/forget" style={{fontFamily:'poppins'}}>
                                    Forgot Password?
                                </a>
                        </form>
                    </animated.div>
                </div>
                
                <div style={styles.divSignUp} ref={SignUpView}>

                    <animated.div className="divforms" style={signUpFormAnimation}>
                        <form>
                            <h2 className="title" style={{fontFamily:'poppins'}}>Sign Up</h2>
                            <div className="input-field">
                                <i className="fas fa-user" aria-hidden="true"></i>
                                <input name="name" type="text" placeholder="Name" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                                <input name="email" type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-phone" aria-hidden="true"></i>
                                <input name="contact" type="contact" placeholder="Contact Number" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock" aria-hidden="true"></i>
                                <input name="password" type="password" placeholder="Password" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock" aria-hidden="true"></i>
                                <input name="rpassword" type="rpassword" placeholder="Conform Password" />
                            </div>
                                <input type="submit" className="btn solid" value="Sign Up" />
                        </form>
                    </animated.div>

                    <div style={{flex:'1',overflow:'hidden',display:'flex',zIndex:100,flexDirection:'column'}}>
                        <div style={{flex:'1',display:'flex',flexDirection:'row'}}>
                            <div style={{flex:'1'}}>
                            </div>
                            <div style={{flex:'1',justifyContent:'center',alignSelf:'center'}}>
                                <h4 style={{color:'white'}}>One of us ?</h4>
                                <span style={{color:'white'}}>Then Sign In and get Started!</span>
                                <input type="submit" className="btn2 solid" value="Sign In" onClick={()=>toggle()} />
                            </div>
                        </div>
                        <div style={{flex:'1',display:'flex',justifyContent:'flex-end'}}>
                            <img src={require('../../signup.svg')} className="image"  alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


//styles used in for parameters fetched in javascript like screen width and height
const styles = {
    divSignIn:{
        display:'flex',
        width:0.9*window.innerWidth,
        height:window.innerHeight,
        // backgroundColor:'blue'
    },
    divSignUp:{
        display:'flex',
        width:0.9*window.innerWidth,
        height:window.innerHeight,
    }
}

export default Auth;