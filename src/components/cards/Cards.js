import Card from "../card/Card";
import {connect} from 'react-redux';

function Cards (props) {
    return props.cards === undefined || props.cards.length === 0? 
    <h1>Si no buscas, no vas a ver</h1>
    :
    <div className= 'container'>
        <div className="row justify-content-around align-items-center">
            {props.cards.map((e)=> <Card data= {e}/> )}
            
        </div>
    </div>
}
 function mapStateToProps(state){
    return{ cards: state?.cards }
 }
 export default connect(mapStateToProps,null)(Cards)