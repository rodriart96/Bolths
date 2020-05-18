import React, { Component } from 'react';
import styles from './layout.module.css'
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer';


class Layout extends Component{

    
    state={
        showNav:false
    }

    toggleSideNav = (action) => {
        this.setState({
            showNav:action
        })
    }
    
    render(){
        return(
            <div className={styles.body}>
                <NavBar
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSideNav(false)}
                    onOpenNav={() => this.toggleSideNav(true)}
                />
                {this.props.children}
                <Footer
                    loadMore={()=>this.loadMore()}
                />
            </div>
        )
    }
}

export default Layout;