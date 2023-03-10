import React from "react";
import {useState, useEffect} from "react";
import {Provider, useSelector} from "react-redux";
import loginStore from "../redux/loginStore";
import {useAppDispatch, useAppSelector} from "../redux/hook";
import {toLogin, toRegister} from "../redux/loginState";

function Renderer  (){

    let ctrl: string;
    ctrl = useAppSelector(state => state.log.value);
    const dispatch = useAppDispatch();
    return (

            <div style={{width:'100%', height:'100%', display:'flex', flex:1, position:'relative'}}>
                <div className='full-bg-img'>
                </div>
                <div className='full-bg-img-mask'>
                    <div style={{background:'rgba(245,245,245,0.93)', height:'80%', width:'80%', maxHeight:370, maxWidth:500, minWidth:300,
                        borderRadius:30, boxShadow:'2px 2px 18px 15px 0xff333333', overflow:'auto'}}>
                        <div style={{padding:'20px', textAlign:'center', justifyContent:'center'}}>
                            <div style={{display:'flex'}}>
                                <button className='circle' style={{background:'grey'}} onClick={()=>dispatch(toLogin())}></button>
                                <button className='circle' style={{background:'#c76161'}} onClick={()=>dispatch(toRegister())}></button>
                            </div>

                            <div style={{display:'flex', alignItems:'center', marginLeft:26}}>
                                <span style={{color:'#aaa', fontSize:19, marginRight:10}}  className="material-symbols-outlined">
                                     mail
                                </span><p style={{color:'#aaa', fontSize:14}}>User Name or Email</p>
                            </div>
                            <input placeholder='@email' className='noner'/>
                            <br/>
                            <div style={{display:'flex', alignItems:'center', marginLeft:26}}>
                                    <span style={{color:'#aaa', fontSize:19, marginRight:10}} className="material-symbols-outlined">
                                         password
                                    </span> <p style={{color:'#aaa', fontSize:14}}>Password</p> <span><a style={{fontSize:13, color:'#aaa', marginLeft:30, fontStyle:'italic'}}>Forget Password</a></span>
                            </div>
                            <input placeholder='Ur Password' className='noner' type='password' />
                            <button className='redx shRed' style={{margin:20, width:170, paddingTop:8, paddingBottom:8}}>{ctrl}</button>
                        </div>
                    </div>
                </div>
            </div>

    );
}
export default function Profile () {

   /*
   This bit has to do with talking to the BE Docker
   auth should be a listener for authentication
   as of for now let's call it false for
   GLOBAL AUTH HERE IF AUTHED, setAuth (true)
    */

   const [auth, setAuth] = useState(false);
   const [sign, setSign] = useState("Sign In");

   const changeSign = ()=>{
           if (sign === "Sign In"){
               setSign("Register");
           }else{
               setSign("Sign In");
           }
   }
   return (
           (<div className='page'>
               <Provider store={loginStore}>
                   {<Renderer/>}
               </Provider>
           </div>)
   )

}