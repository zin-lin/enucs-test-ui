import React from "react";
import {Link} from "react-router-dom";

const navSty = {
    fontSize:16, margin:10
}

const napierColor = {
    color:"#FF5757"
}

export default function MobileNav () {
    return (
        <div className='mobile-nav'>
            <div style={{display: 'flex', marginTop: '15px'}}>
            <div className='mobile-nav-item4'>
                <Link to='/'>
                    <span className="material-symbols-outlined" >
                        home
                    </span>
                </Link>
            </div>

            <div className='mobile-nav-item4'>
                <Link to='/'>
                    <span className="material-symbols-outlined">
                    event
                    </span>
                </Link>
            </div>

            <div className='mobile-nav-item4'>
                <Link to='/'>
                    <span className="material-symbols-outlined">
                    shopping_cart_checkout
                    </span>
                </Link>
            </div>

            <div className='mobile-nav-item4'>
                <Link to='/profile'>
                    <span className="material-symbols-outlined">
                    person
                    </span>
                </Link>
            </div>
            </div>
        </div>
    );
}