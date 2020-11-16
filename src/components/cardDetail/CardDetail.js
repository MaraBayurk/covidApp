import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getDetail } from "../../redux/actions/actions"
import Loading from "../loading/Loading"
import {useParams} from "react-router-dom"

 export default function CardDetail(){

let detalle = useSelector((store)=> store.cardDetail) //reemplaza el mapStateToProps

let dispatch= useDispatch()

let {country}=useParams()//{country:peru}


    useEffect(()=>{ 
        dispatch(getDetail(country))
        //props.obtenerDetalle(props.match.params.country)
    },[])

return detalle===null || detalle.length===0?
<Loading/>
:
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Fecha</th>
      <th scope="col">Confirmados</th>
      <th scope="col">Activos</th>
      <th scope="col">Recuperados</th>
      <th scope="col">Muertos</th>
    </tr>
  </thead>
  <tbody>
  {detalle.map((e,i)=>( 
    <tr key={i}>
        <th scope="row">{e.Date.slice(5,10)}</th>
        <td>{e.Confirmed}</td>
        <td>{e.Active}</td>
        <td>{e.Recovered}</td>
        <td>{e.Deaths}</td>
     </tr>))}
    
  </tbody>
</table>
}
/* 
function mapStateToProps(state){
  return{
      detalle: state?.cardDetail
  }
}
function mapDispatchToProps(dispatch){
    return{
    obtenerDetalle: function(arg){
        dispatch(getDetail(arg))
    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardDetail) */