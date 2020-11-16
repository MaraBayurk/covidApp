import { addCard } from "../../redux/actions/actions";
import {connect} from 'react-redux';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function NavBar(props){

    let [name, setName]= useState('')

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" exact to="/">Covid App</Link>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
      </ul>
      <form onSubmit={(e)=> {
          e.preventDefault();
          props.addCard(name)
      }} className="form-inline my-2 my-lg-0">
        <input onChange={(e)=>setName(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
    
}

function mapDispatchToProps(dispatch){
return {
    addCard: (name)=> dispatch(addCard(name))
}
}
export default connect(null,mapDispatchToProps)(NavBar)