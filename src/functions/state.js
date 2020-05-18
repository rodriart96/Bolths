
import axios from 'axios';
import {URL} from '../db/config';

const state={
    items:[],
    start:this.props.start,
    end:this.props.start + this.props.amount,
    amount:this.props.amount
}

    const request=(start,end)=>{
        axios.get(`${URL}/tlBolths?_start=${start}&_end=${end}`)
        .then( response =>{
            state.setState({
                items:[...this.state.items, ...response.data]
            })
        })
    }

export {request};