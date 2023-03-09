import styles from "../App.css";
import {Link} from "react-router-dom";

const navSty = {
    fontSize:16, margin:10
}

const napierColor = {
    color:"#FF5757"
}

export default function Nav () {
    return (
        <nav>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" ></link>

            <div>
                <p className='items' style={{fontSize:19, margin:12, marginTop:"auto", marginBottom:'auto'}}>
                    {'{'}enu<span style={{color:'#FF5757'}}>cs</span>{'}'}
                </p>
            </div>
            <div className='hider' style={{right:10, position:'absolute', display:'flex', height:'100%', alignItems:'center'}}>
                <Link to='/'><p style={{fontSize:16, margin:12 }}>Ho<span style={{color:"#FF5757"}}>me</span></p></Link>
                <Link to='/about'><p style={{fontSize:16, margin:12 }}>Eve<span style={{color:"#FF5757"}}>nts</span></p></Link>
                <Link to='/music'><p  style={{fontSize:16, margin:12 }}>About{' '}<span style={{color:"#FF5757"}}>Us</span></p></Link>
                <Link to='/ok'><p style={{fontSize:16, margin:12 }}>Pro<span style={{color:"#FF5757"}}>file </span></p></Link>
                <Link to='/ok'><p style={{fontSize:16, margin:12 }}><span className="material-symbols-outlined">
                search
                </span></p></Link>
                <Link to='/'><p style={{fontSize:16, margin:12 }}><span className="material-symbols-outlined red">
                shopping_cart_checkout
                </span></p></Link>
            </div>
        </nav>
    );
}