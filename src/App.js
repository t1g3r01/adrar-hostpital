import React ,{useState}from 'react';
import './App.css';
import Auth from './components/JS/Auth'
import Button from '@material-ui/core/Button';
function App() {
  const [collapsed,setCollapse]=useState(true);

    const changeCollapse = ()=>{
        setCollapse(!collapsed)
    }
  return (
    <div className="App">
     <Auth collapsed={collapsed}/>
      <Button onClick={changeCollapse}>collapse</Button>
    </div>
  );
}

export default App;
