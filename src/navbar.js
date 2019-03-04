import React from 'react';

let navlist = [{title:"home",link:"#" , active : false , dropdown :false}, {title:"Service",link:"#" , active : true, dropdown :true} , {title:"Contact",link:"#" , active : false ,dropdown :false }]

let dropdownlist = [{title:"Link 1",link:"#" }, {title:"Link 2",link:"#" } , {title:"Link 3",link:"#"}]

const Nava = (props) =>  <a href= {`${props.a.link}`}> {props.a.title} </a> 

const Navli = (props) => <li> <a href={`${props.li.link}`} className={props.li.active ? "active" : "notactive"}> {props.li.title} </a> 
 {props.li.dropdown? <div className = "dropdown-content">  
     {dropdownlist.map ((el)=> <Nava  a={el}/>)} </div>: false
    }
</li> 


function Navbar () {
return (
<nav className ="navbar">
  <ul className ="nav-menu"> 
  {navlist.map ((el)=> <Navli  li={el}/>)}
    </ul>
  </nav>

);

}

export default Navbar