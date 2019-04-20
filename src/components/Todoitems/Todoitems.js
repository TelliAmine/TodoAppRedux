import React from 'react'
import {connect} from 'react-redux'
import './Todoitems.css'
const Todoitems =()=>{
   const length= this.props.list.length
    const ListItems= length?( this.props.list.map(item=>{
        return(
            <div key ={item.id}>
         <span> {item.name} </span>
         <span> {item.age} </span>
         <span onClick={()=>console.log("test read store")}> &times; </span>
            </div>
         ) 
        }
        )
    ):(
        <p> there is no item to show</p>
    )
    
return(
     <div className='ListItems'>
       <div><span>Name</span>
       <span>age</span>
       <span>Action</span>
       </div>

{ListItems}
     </div>   
)

}

const mapStateToProps = state => {
    return{
     list:state.changeitem
    };
};

export default connect(mapStateToProps, null)(Todoitems);