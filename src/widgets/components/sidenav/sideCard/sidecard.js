import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styles from './sidecard.module.css';

import {URL} from '../../../../db/config';


class SideCard extends Component{
    state={
        items:[],
        start:this.props.start
    }
    UNSAFE_componentWillMount(){
        axios.get(`${URL}/UserInfo?`)
        .then( response =>{
            this.setState({
                items:[...this.state.items, ...response.data]
            })
        })
    }

    renderSidecard = (type) =>{
        let template = null;
        switch(type){
          case('card'):
          template = this.state.items.map( (item, i) =>(
            <div>
                <Link to={`/bolths/${item.user}`}>
                    <div className={styles.head}>
                        <img src={require(`../../../../../public/images/propics/${item.propic}`)} alt="fotoperfil" className={styles.propic}/>
                    </div>
                    <div className={styles.headCollumn}>
                        <p className={styles.tagname}>{item.tagname}</p>
                        <p className={styles.user}>{item.user}</p>  
                    </div>
                </Link>   
                <div className={styles.headRow}>
                    <p className={styles.followMarkUp}>{item.Following}</p> <p className={styles.FollowInfo}>Following</p> <p className={styles.followMarkUp}>{item.Followers}</p><p className={styles.FollowInfo}> Followers</p>
                </div>         
            </div>
          ));
          break;
          default:
              template = 'fuck';  
        }
        return template;
    }
    render(){
        //console.log(this.state.items)
        return(
            <div>
                {this.renderSidecard(this.props.type)}
            </div>
        )
    }

}

export default SideCard;