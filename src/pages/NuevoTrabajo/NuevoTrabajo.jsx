import { insertData } from '../../hooks/insertData';
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useGetData } from '../../hooks/getData';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import './NuevoTrabajo.css'
const NuevoTrab = () => {
    const conductores = useGetData('conductor');
    const clientes = useGetData('cliente');
    const vehiculos = useGetData('vehiculo');
    const proyectos = useGetData('proyecto');
    const trabajos = useGetData('trabajo');
    const maxId = trabajos[0].reduce((max, trabajo) => (trabajo.id_trabajo > max ? trabajo.id_trabajo : max), 0);

    const [selectedConductor, setSelectedConductor] = useState(null);
    const [selectedCliente, setSelectedCliente] = useState(null);
    const [selectedVehiculo, setSelectedVehiculo] = useState(null);
    const [selectedProyecto, setSelectedProyecto] = useState(null);
    const [fechaInicio, setFechaInicio] = useState(new Date());
    const [fechaFin, setFechaFin] = useState(new Date());

    const handleSelectConductor = (eventKey) => {
        setSelectedConductor(eventKey);
    };
    const handleSelectCliente = (eventKey) => {
        setSelectedCliente(eventKey);
    };
    const handleSelectVehiculo = (eventKey) => {
        setSelectedVehiculo(eventKey);
    };

    const handleSelectProyecto = (eventKey) => {
        setSelectedProyecto(eventKey);
    };

    const handleFechaInicioChange = (date) => {
        setFechaInicio(date);
    };

    const handleFechaFinChange = (date) => {
        setFechaFin(date);
    };

    const guardarCambios = async () => {
        const props = {
            fecha_desde: fechaInicio.toISOString().split('T')[0],
            fecha_hasta: fechaFin.toISOString().split('T')[0],
            kilometraje: 33,
            patente: selectedVehiculo.toString() ,
            id_proyecto: parseInt(selectedProyecto),
            dni_conductor:selectedConductor.toString() ,
            cuit_cliente: selectedCliente.toString()
        };
        const props2 = {
                fecha_desde: '2025-03-11',
                fecha_hasta: '2025-03-12',
                kilometraje:20,
                patente: 'A083XOA',
                id_proyecto: 10,
                dni_conductor: '41216713',
                cuit_cliente: '30226300158'
        };

        try {
            await insertData('trabajo', props);
            console.log('props',props);
            console.log('props2',props2);
            window.alert('Nuevo trabajo agregado con éxito');
        } catch (error) {
            console.error('Error al intentar agregar un nuevo trabajo:', error);
        }
    };

    return (
        <>
        <Sidebar />
        <div className="col-12 col-md-6 col-lg-9">
                <h1 className='text-left'>Nuevo Trabajo</h1>
                <div class = 'row subtitle'>
                        Trabajo número #{maxId + 1}
                </div>
                <div className='row nuevotrabajobody'>
                        <div className="row">   
                                <div className="col">   
                                        <div >
                                        <div>Fecha de inicio</div> {fechaInicio.toISOString().split('T')[0]}
                                        <Calendar onChange={handleFechaInicioChange} value={fechaInicio} />                                
                                        </div>
                                </div>
                                <div className="col">   
                                        <div >
                                        <div>Fecha de Fin</div>{fechaFin.toISOString().split('T')[0]}
                                        <Calendar onChange={handleFechaFinChange} value={fechaFin} />
                                </div>                                 
                        </div>
                            
                </div>
                <div className="row">
                        <div className="row">   
                                <div className="col">   

                                        <div style={{ display : 'flex', alignItems:'center'}}>                               
                                                <DropdownButton
                                                id="dropdown-conductor"
                                                title="Seleccionar conductor"
                                                onSelect={handleSelectConductor}
                                                variant = ''                                    
                                                >
                                                {conductores[0].map((c) => (
                                                        <Dropdown.Item key={c.dni} eventKey={c.dni}>
                                                                {c.nombre} {c.apellido} - {c.licencias} 
                                                        </Dropdown.Item>
                                                ))}
                                                </DropdownButton>
                                                <div> - {selectedConductor}</div>
                                        </div>
                                        <div style={{  display : 'flex', alignItems:'center'}}>
                                                <DropdownButton
                                                id="dropdown-vehiculo"
                                                title="Seleccionar vehículo"
                                                onSelect={handleSelectVehiculo}
                                                variant = ''
                                                >
                                                {vehiculos[0].map((v) => (
                                                        <Dropdown.Item key={v.patente} eventKey={v.patente}>{v.patente} - {v.estado}</Dropdown.Item>
                                                ))}
                                                </DropdownButton>
                                                <div>{selectedVehiculo}</div>
                                        </div>
                                </div>
                                <div className='col'>
                                        <div style={{ display : 'flex', alignItems:'center'}}>
                                                <DropdownButton
                                                id="dropdown-proyecto"
                                                title="Seleccionar proyecto"
                                                onSelect={handleSelectProyecto}
                                                variant = '' 
                                                >
                                                {proyectos[0].map((p) => (
                                                        <Dropdown.Item key={p.id} eventKey={p.id}>{p.id} - {p.nombre}</Dropdown.Item>
                                                ))}
                                                </DropdownButton>
                                                <div>{selectedProyecto}</div>
                                        </div>
                                        <div style={{ display : 'flex', alignItems:'center'}}>
                                                <DropdownButton
                                                id="dropdown-cliente"
                                                title="Seleccionar cliente"
                                                onSelect={handleSelectCliente}
                                                variant = ''
                                                >
                                                {clientes[0].map((c) => (
                                                        <Dropdown.Item key={c.cuit} eventKey={c.cuit}>{c.razon_social}</Dropdown.Item>
                                                ))}
                                                </DropdownButton>
                                                <div>{selectedCliente}</div>
                                        </div>
                                </div>                  
                        </div>                  
                </div>                  
                </div>                  
                <br/>
                <div className=''>
                        <button className="btn btn-orange" onClick={guardarCambios}>
                                Guardar Cambios
                        </button>
                </div>
              
        </div>
        </>
    )
}

export default NuevoTrab;
