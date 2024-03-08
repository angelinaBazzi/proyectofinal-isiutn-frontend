import {React} from 'react'
import Card from './Card'
import {useGetData} from '../hooks/getData'
import Loading from './Loading'
import { useLocation } from "react-router-dom";


const Cards = () => {

    const [vehiculos, loading] = useGetData('vehiculo');
    const className = "list-group-item list-group-item-action"
    const location = useLocation();
    const {pathname} = location;
    return (
        <>
            <h1 className='text-left'>Panel general</h1>
            <br/>
            <button className="btn btn-orange">
                <a href="/NuevoTrabajo" className={pathname === "/NuevoTrabajo" ? `${className} active` : className}>Nuevo Trabajo</a>
            </button>

            <br/><br/>

            {loading && <Loading/>}

            <div className='row'>
                {vehiculos.map((vehiculo) => {
                        return (
                            <div className='col-12 col-lg-4'>
                                <Card key={vehiculo.patente} vehiculo={vehiculo}/>
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Cards