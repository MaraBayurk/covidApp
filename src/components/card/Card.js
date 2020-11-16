import {Link} from 'react-router-dom';

export default function Card({data}) {
    return <div className="col-sm-4 my-5"> 
    <div className="card">
    <img src={`https://flagcdn.com/256x192/${data.CountryCode.toLowerCase()}.png`} className="card-img-top" alt={`bandera de ${data.Country}`}/>
    <div className="card-body">
    <h5 className="card-title">{data.Country}</h5>
    <p className="card-text">Confirmados: {data.Confirmed}</p>
    <p className="card-text">Activos: {data.Active}</p>
    <p className="card-text">Muertes: {data.Deaths}</p>
    <p className="card-text">Recuperados: {data.Recovered}</p>
      <Link to={'/country/'+data.Country.toLowerCase()} className="btn btn-primary">Ver Detalles</Link>
    </div>
  </div>
  </div>
}