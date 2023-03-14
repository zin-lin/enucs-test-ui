import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {toProfile, toRegister} from "../redux/authState";
import {useAuthDispatch} from "../redux/hook";

export default function MobileHome (){
    const navigate = useNavigate();
    const dispatch = useAuthDispatch();
    return (<div className='mobile-view'>
            <div>
                <div className='mobile-view-img' style={{ position:'absolute', zIndex:-1}}>

                </div>

                <div style={{ position:'absolute', zIndex:2}}>
                    <div style={{margin:"auto", top:'auto', textAlign:'center', flex:1 , display:"flex", justifyItems:"center", alignItems:'center',
                        alignContent:'center'
                    }}>
                        <div style={{height:'100%', overflow:'auto'}}>
                            <p className='enucs' style={{fontSize:29, marginBottom:20}} >{'{'}enu<span className='red'>cs</span>{'}'}</p>
                            <p className='text-shadow' style={{width:'50%', margin:"auto",  fontWeight:'bold'}}>
                                ENUCS is the leading society hosting contributors from all around the world. Join us explore the world of tomorrow by clicking the button below.</p><br/>
                            <button className='redx shRed' style={{width:'200px',padding:'10px', margin:'10px', zIndex:15}}
                                    onClick={() => {
                                        dispatch(toProfile()); //dispatch to profile
                                        dispatch(toRegister());
                                        navigate('/profile');
                                    }}
                            >Join Us Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}