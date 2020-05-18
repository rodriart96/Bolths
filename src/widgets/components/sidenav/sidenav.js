import React from 'react';
import SideNav from 'react-simple-sidenav';
import SidenavItems from './sidenavItems';

const SideNavigation = (props) =>{
    return(
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background:'#30475e',
                    maxWidth:'270px',
                }}
                type="card"
                loadmore={true}
                start={0}
                amount={1}
            >
                <SidenavItems />
            </SideNav>
        </div>
    )
}
export default SideNavigation;