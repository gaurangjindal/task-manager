import React,{Component} from 'react';
import Input from './component/Input';
import Main from './component/Main';

class App extends Component{
  state ={}
  render(){
    return(
      <div className="container">
         <h3 className="center blue-text">Task Manager</h3>
        <Input />
        <Main />
      </div>
    )
  }
  
}

export default App;