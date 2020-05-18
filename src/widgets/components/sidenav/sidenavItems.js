import React from 'react';
import SideCard from './sideCard/sidecard';
import  FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import styles from './sidenavItems.module.css';

const SidenavItems = () =>{

    const items = [
        {
            type: styles.option,
            icon:'user',
            text:'Home',
            link:'/'
        },
        {
            type: styles.option,
            icon:'envelope',
            text:'Messages',
            link:'/Messages'
        },
        {
            type: styles.option,
            icon:'play',
            text:'Videos',
            link:'/videos'
        },
        {
            type: styles.option,
            icon:'sign-out',
            text:'Sign-out',
            link:'/sign-in'  
        }
    ]

    const showItems = () =>{
        return items.map( (item,i) =>{
            return(
                <div className={styles.container}>
                    <div key={i} >
                        <div className={styles.option}>
                            <Link to={item.link} >
                                
                        <FontAwesome   name={item.icon}>
                                   <div className={styles.botones}style={{
                            fontFamily:"'Roboto', sans-serif"
                        }
                               }>
                                       {item.text }
                                   </div>
                           
                        </FontAwesome>
                    </Link>
                        </div>
                    
                </div> 
                </div>
                
            )
        })
    }

    return(
        <div>
            <SideCard
            type="card"
            />
            {showItems()}
        </div>
        
    )

}
export default SidenavItems;