import React,{useState, useEffect} from 'react';
import styles from './newbolths.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faComments,faRetweet,faStar   } from '@fortawesome/free-solid-svg-icons';


import {URL} from '../../../db/config';

function useNewBolths(props) {
    const  [Bolths, setBolths] = useState({
        items:[],
        start:props.start,
        end:props.amount + props.start,
        amount:props.amount,
        startAmount:props.startAmount
    });

    let request;

    useEffect(async ()=>{
        
        const request = await axios(`${URL}/tlBolths?_start=${startAmount}&_end=${end}`);
            
            
                setBolths(request.Bolths);
            })
        
        return request()
    };
    
 //   const loadMore = () =>{
   //     let end = Bolths.end + Bolths.amount;
     //   this.request(Bolths.end, end)
      //  return loadMore
   // }

    
    // let renderBolths = (type) =>{
    //     let template = null;
    //     switch(type){
    //       case('card'):
    //       template = this.state.items.map( (item, i) =>(
    //                 <div className={styles.container}>
    //                     <div className={styles.newBolthItem}>
    //                         <Link to={`/bolths/${item.user}`}>
    //                             <div className={styles.head}>
    //                         <img src={require(`../../../../public/images/propics/${item.propic}`)} alt="fotoperfil" className={styles.propic}/>
    //                         <p className={styles.tagname}>{item.tagname}</p>
    //                         <p className={styles.user}>{item.user}</p>
                            
    //                             </div>
    //                         </Link>
    //                     <div className={styles.body}>
    //                        <p className={styles.bolthBody}>{item.body}</p>
    //                         <div className={styles.reactions}>
    //                             <FontAwesomeIcon size='md' className={styles.iconosFaComments} icon={faComments}/>
    //                             <FontAwesomeIcon size='md' className={styles.iconosFaRetweet} icon={faRetweet}/>
    //                             <FontAwesomeIcon size='md' className={styles.iconosFaStar} icon={faStar}/>    
    //                             <FontAwesomeIcon size='md' className={styles.iconosFaShare} icon={faShare}/>    
    //                         </div> 
    //                     </div>
    //                 <hr/>
    //             </div>
    //         </div>
    //       ));
    //       break;
    //       default:
    //           template = null;  
    //     }
    //     return template;
    // }



export default function NewBolths() {
    
   const Bolths = useNewBolths()

    return Bolths.items == null ? (
        <div>Cargando...</div>
    ) : (
        <div>Arroz con pollo</div>
    );
}
