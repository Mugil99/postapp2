import {FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE, FETCH_DATA_REQUEST} from "./actionTypes";
import axios from 'axios';
export function fetchDataRequest(){
    return{
        type:FETCH_DATA_REQUEST
    }
}
export function fetchDataSuccess(data){
    return{
        type : FETCH_DATA_SUCCESS,
        payload:data
    }
}

export function fetchDataFailure(error){
    return{
        type:FETCH_DATA_FAILURE,
        payload:error
    }
}

export const fetchPost=()=>{
    return (dispatch)=>{
        dispatch(fetchDataRequest());
        axios.get('https://gauravgitacc.github.io/postAppData/posts.json')
        .then(res=>dispatch(fetchDataSuccess(res.data)))
        .catch(err=>dispatch(fetchDataFailure(err.message)))
    }
}