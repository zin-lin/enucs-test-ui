import {useState, useEffect} from "react";
import styles from '../App.css'
import code from '../imgs/code.jpg'
import {Link} from "react-router-dom";

export default function Home (){

    const [opacity, setOpacity] =useState(0);

    useEffect(()=>{
        setOpacity(1);
    })

    return (

        <div className='page'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" ></link>
            <div className='home-1'>
                <div style={{width: '42%', left:0, display:'flex', zIndex:4,justifyContent:'center', alignItems:"center", overflow:'auto'}} className='left-sider'>
                    <div id='console' style={{transition:'0.8s ease', opacity:opacity}}>
                        <div style={{  display:"flex", alignItems:'center', justifyContent:'center'}}>
                            <div style={{margin:'20px', display:'flex'}}>
                                <div className='circle back-red'></div>
                                <div className='circle back-pink'></div>
                                <div className='circle back-white' ></div>
                            </div>
                        </div>
                        <div style={{paddingLeft:'40px', paddingRight:'20px'}}>
                            <p className='web-console' style={{margin:'7px'}}><span style={{color:'grey'}}>{'>>'}</span> Hello <span className='red'>World</span></p>
                            <p className='web-console small'>........</p>
                            <p className='web-console small'>{'<'} This is <span className='red'>where</span> your journey <span style={{color:'grey'}}>begins</span> with ENU<span
                            className='red'
                            >CS</span>{'>'}</p>
                        </div>
                    </div>
                </div>

                <div style={{textAlign:"center",transition:'1.2s ease', opacity:opacity, zIndex:3}} className='left-sider'>
                    <div className='home-cour'>

                    </div>
                    <div className='full' style={{width:'60%', position:"absolute", minHeight:'50px', overflow:"auto", display:'flex', alignItems:'center'}} >
                        <div style={{margin:"auto", top:'auto'}}>
                        <p className='enucs' >{'{'}ENU<span className='red'>CS</span>{'}'}</p>
                        <p className='text-shadow' style={{width:'60%', margin:"auto"}}>
                            ENUCS is the leading society hosting contributors from all around the world. Join us explore the world of tomorrow by clicking the button below.</p><br/>
                        <button className='redx shRed' style={{width:'200px'}}>Join Us Now</button>
                        <br/><br/>
                            <a to='https://'><button className='orangex shOrange' style={{width:'200px'}}>Join Napier</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>

            <div style={{background:"#131F2E", height:'20px'}}>

            </div>

        </div>
    );
}
