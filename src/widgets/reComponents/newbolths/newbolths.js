import React,{Component} from 'react';
import styles from './newbolths.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faComments,faRetweet,faStar   } from '@fortawesome/free-solid-svg-icons';


import {URL} from '../../../db/config';

class NewBolths extends Component{
    
    state={
        items:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount,
        startAmount:this.props.startAmount
    }

    UNSAFE_componentWillMount(){
        this.request(this.state.start, this.state.end)
        
    }
    request=(startAmount,end)=>{
        axios.get(`${URL}/tlBolths?_start=${startAmount}&_end=${end}`)
        .then( response =>{
            this.setState({
                items:[...this.state.items, ...response.data]
            })
        })
    }

    loadMore = () =>{
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end)
    }

    

    renderBolths = (type) =>{
        let template = null;
        switch(type){
          case('card'):
          template = this.state.items.map( (item, i) =>(
                    <div className={styles.container}>
                        <div className={styles.newBolthItem}>
                            <Link to={`/bolths/${item.user}`}>
                                <div className={styles.head}>
                            <img src={require(`../../../../public/images/propics/${item.propic}`)} alt="fotoperfil" className={styles.propic}/>
                            <p className={styles.tagname}>{item.tagname}</p>
                            <p className={styles.user}>{item.user}</p>
                            
                                </div>
                            </Link>
                        <div className={styles.body}>
                           <p className={styles.bolthBody}>{item.body}</p>
                            <div className={styles.reactions}>
                                <FontAwesomeIcon size='md' className={styles.iconosFaComments} icon={faComments}/>
                                <FontAwesomeIcon size='md' className={styles.iconosFaRetweet} icon={faRetweet}/>
                                <FontAwesomeIcon size='md' className={styles.iconosFaStar} icon={faStar}/>    
                                <FontAwesomeIcon size='md' className={styles.iconosFaShare} icon={faShare}/>    
                            </div> 
                        </div>
                    
                    <hr/>
                    
                </div>
            </div>
          ));
          break;
          default:
              template = null;  
        }
        return template;
    }

    render(){
        //console.log(this.state.items)
        return(
            <div>
                {this.renderBolths(this.props.type)}
                <div onClick={()=>this.loadMore()} >
                loadmore
                </div>
            </div>
        )
    }

}

export default NewBolths
;
