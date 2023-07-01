import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPost } from './redux/actions/PostActions';

function App() {
  const dispatch=useDispatch();
  const loading=useSelector(state=>state.loading)
  const data=useSelector(state=>state.data)
  const error=useSelector(state=>state.error)
  useEffect(()=>{
     dispatch(fetchPost());
     
  },[])
  
  return (
    <div>
      <div className='head'>
      <h1>A Short Naration of Lorem Ispum</h1>
      <h3>Below contains a title body got from a random API,Please take your time to review</h3>
    </div>
    <div className='content'>
        {
          data.map((item)=>(
            <div className='card'>
              <p><strong>Title : </strong>{item.title}</p>
              <p><strong>Body : </strong>{item.body}</p>
            </div>
          ))
        }
    </div>
    </div>
  );
}

export default App;
