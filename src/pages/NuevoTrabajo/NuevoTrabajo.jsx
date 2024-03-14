import React from 'react'
import Sidebar from '../../components/Sidebar'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const NuevoTrab = () => {

return (  
    <>    
        <Sidebar/>
        
       

        <div className="col-12 col-md-6 col-lg-9">
             <h1 className='text-left'>Nuevo Trabajo</h1>
            <br/>

            <br/><br/>
            
                
                <div className='col-12 col-lg-4'>
                    
                        <div>Fecha de inicio</div>
                                <Calendar/>
                                <br />
                        <div>Fecha de Fin</div>
                                <Calendar/>
                                <br />
                        <div>DNI del conducto</div>
                        <div>Patemte e vehiculo</div>
                        <div>Tipo de Trabajo</div>
                        <div>Proyecto</div>

                                
                           
                </div>
            
         

            </div>

    </>  
)
}   
export default NuevoTrab


