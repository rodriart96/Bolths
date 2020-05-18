import React from 'react';
import style from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope,faBell, faSearch, faBolt   } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


const Footer = (props) => {
    return(
        
          <div className={style.pie}>
              <Link to="/home"><FontAwesomeIcon size='lg' className={style.iconos} icon={faHome}/></Link>
              <Link to="/bolths" ><FontAwesomeIcon size='lg' className={style.iconos} icon={faSearch}/></Link>
              <div onClick={props.loadMore}><FontAwesomeIcon {...props} onClick={()=>props.loadMore()}  size='lg'  className={style.bolt} icon={faBolt}/></div>
              <Link to="/alarms"><FontAwesomeIcon size='lg' className={style.iconos} icon={faBell}/></Link>
              <Link to="/messages"><FontAwesomeIcon size='lg' className={style.iconos} icon={faEnvelope}/></Link>
        </div>
        
    )
}

export default Footer;