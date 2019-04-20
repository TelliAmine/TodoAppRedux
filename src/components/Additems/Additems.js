
import React, { Component } from 'react';

class App extends Component {

    state={
    name:'',
    age:''
  }
  handelchange=(e)=>{
    this.setState(
      {
        [e.target.id]:(e.target.value)
      }
    )
 
  }
  handelsubmit=(e)=>{
   e.preventDefault();
    this.props.additem(this.state)
  

  }

 
  render() {
    return (
      <div>
          <form onSubmit={this.handelsubmit}>
             <input type='text' placeholder='Enter name' id='name'
             onChange={this.handelchange} />
             <input type='number' placeholder='Enter age' id='age'
             onChange={this.handelchange} />
             <input type='submit' value='Add' />
          </form>
      </div>
    );
  }
}

export default App;