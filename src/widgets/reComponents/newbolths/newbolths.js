import React,{useState, useEffect} from 'react';
import styles from './newbolths.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faComments,faRetweet,faStar   } from '@fortawesome/free-solid-svg-icons';

import {URL} from '../../../db/config';

function useNewBolths() {
    const  [Bolths, setBolths] = useState([]);
    
    //?_start=${}_end${}
    useEffect( (start,amount) => {
        axios.get(`${URL}/tlBolths?_start=${start}_end=${amount}`)
            .then( res=>{
                
                console.log(res.data)
                setBolths(res.data)
                })

            .catch(err =>{
                console.log(err)
                })
            },[])
            
            return(
                
                <div>
                    {Bolths.map(Bolths=>(
                        <div className={styles.container}>
                            <div className={styles.newBolthItem}>
                                <Link to={`/bolths/${Bolths.user}`}>
                                    <div className={styles.head}>
                                        <img src={require(`../../../../public/images/propics/${Bolths.propic}`)} alt="fotoperfil" className={styles.propic}/>
                                        <p className={styles.tagname}>{Bolths.tagname}</p>
                                        <p className={styles.user}>{Bolths.user}</p>
                                     </div>
                                </Link>
                             <div className={styles.body}>
                                <p className={styles.bolthBody}>{Bolths.body}</p>
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
                        ))}
                </div>
            )
    };
    
 //   const loadMore = () =>{
   //     let end = Bolths.end + Bolths.amount;
     //   this.request(Bolths.end, end)
      //  return loadMore
   // }

    
    



export default useNewBolths

