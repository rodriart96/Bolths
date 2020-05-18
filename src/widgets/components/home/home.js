import React from 'react';
import NewBolths from '../../reComponents/newbolths/newbolths';


const Home = ()=>{
    return(
        <div>
            <NewBolths
                type="card"
                loadmore={true}
                start={0}
                startAmount={4}
                amount={4}
            />
        </div>
    )
}

export default Home;