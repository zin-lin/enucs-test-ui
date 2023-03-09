import img from '../imgs/code.jpg';
export default function MobileHome (){
    return (
        <div className='mobile-view'>
            <div>
                <div className='mobile-view-img' style={{ position:'absolute', zIndex:-3}}>

                </div>

                <div style={{ position:'absolute', zIndex:-3}}>
                    <div style={{margin:"auto", top:'auto', textAlign:'center', flex:1 , display:"flex", justifyItems:"center", alignItems:'center',
                        alignContent:'center'
                    }}>
                        <div>
                            <p className='enucs' style={{fontSize:29, marginBottom:20}} >{'{'}ENU<span className='red'>CS</span>{'}'}</p>
                            <p className='text-shadow' style={{width:'50%', margin:"auto", fontSize:14}}>
                                ENUCS is the leading society hosting contributors from all around the world. Join us explore the world of tomorrow by clicking the button below.</p><br/>
                            <button className='redx shRed' style={{width:'200px',padding:'10px'}}>Join Us Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}