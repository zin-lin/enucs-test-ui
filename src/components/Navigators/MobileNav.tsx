import React from "react";
import {Link} from "react-router-dom";
import {useAuthDispatch, useAuthSelector} from "../../redux/hook";
import {useDispatch} from "react-redux";
import {toHome, toEvent, toShop, toProfile} from "../../redux/authState";

const navSty = {
    fontSize:16, margin:10
}

const napierColor = {
    color:"#FF5757"
}

export default function MobileNav () {
    const selected = useAuthSelector(state => state.auth.selected);
    const dispatch = useAuthDispatch();
    return (
        <div className='mobile-nav'>
            <div style={{display: 'flex', marginTop: '15px'}}>
            <div className='mobile-nav-item4' onClick={()=>dispatch(toHome())}>
                <Link to='/'>
                    <span className="material-symbols-outlined" style={{color: selected.v1}}>
                        home
                    </span>
                </Link>
            </div>

            <div className='mobile-nav-item4' onClick={()=>dispatch(toEvent())}>
                <Link to='/'>
                    <span className="material-symbols-outlined" style={{color: selected.v2}}>
                    event
                    </span>
                </Link>
            </div>

            <div className='mobile-nav-item4' onClick={()=>dispatch(toShop())}>
                <Link to='/' >
                    <span className="material-symbols-outlined" style={{color: selected.v3}}>
                    shopping_cart_checkout
                    </span>
                </Link>
            </div>

            <div className='mobile-nav-item4' onClick={()=>dispatch(toProfile())}>
                <Link to='/profile'>
                    <span className="material-symbols-outlined" style={{color: selected.v4}}>
                    person
                    </span>
                </Link>
            </div>
            </div>
        </div>
    );
}