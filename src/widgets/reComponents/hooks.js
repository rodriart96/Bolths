import React,{useState, useEffect} from 'react';
//import styles from './newbolths.module.css';
//import { Link } from 'react-router-dom';
import axios from 'axios';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faShare, faComments,faRetweet,faStar   } from '@fortawesome/free-solid-svg-icons';




function Hooks(props) {
    const  [Bolths, setBolths] = useState({
        items:[]
    });

    useEffect( () => {
        axios.get(`http://localhost:3004/tlBolths`)
            .then( res=>{
                console.log(res)
                })
            .catch(err =>{
                console.log(err)
                })
            })
            return(
                <div>
                    funciona
                </div>
            )
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



export default Hooks;
