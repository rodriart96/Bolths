import React from 'react';
import style from '../imgperfil/imgperfil.module.css'

const FotoPerfil = (props) =>{
    return(
        <div>
            <img src={require('../../../img/testprofile.jpg')} alt="fotoperfil" className={style.foto}/>
            
        </div>
    )
}

export default FotoPerfil;