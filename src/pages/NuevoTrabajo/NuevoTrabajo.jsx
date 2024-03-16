import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useGetData } from '../../hooks/getData';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const NuevoTrab = () => {
    const conductores = useGetData('conductor');
    const vehiculos = useGetData('vehiculo');
    const proyectos = useGetData('proyecto');
    const trabajos = useGetData('trabajo');
    const maxId = trabajos.reduce((max, trabajo) => (trabajo.id > max ? trabajo.id : max), 0);

    const [selectedConductor, setSelectedConductor] = useState(null);
    const [selectedVehiculo, setSelectedVehiculo] = useState(null);
    const [selectedProyecto, setSelectedProyecto] = useState(null);
    const [fechaInicio, setFechaInicio] = useState(new Date());
    const [fechaFin, setFechaFin] = useState(new Date());

    const handleSelectConductor = (eventKey) => {
        setSelectedConductor(eventKey);
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

    return (
        <>
            <Sidebar />
            <div className="col-12 col-md-6 col-lg-9">
                <h1 className='text-left'>Nuevo Trabajo</h1>
                <br />
                <p> Trabajo número #{maxId + 1}</p>
                <div className='test' style={{ background: 'wheat' }}>
                    <div className='col-12'>
                        <div className='row'>
                            <div style={{ maxWidth: '50%' }}>
                                <div>Fecha de inicio</div>
                                <Calendar onChange={handleFechaInicioChange} value={fechaInicio} />
                                <div>Fecha de inicio: {fechaInicio.toString()}</div>
                            </div>
                            <div style={{ maxWidth: '50%' }}>
                                <div>Fecha de Fin</div>
                                <Calendar onChange={handleFechaFinChange} value={fechaFin} />
                                <div>Fecha de fin: {fechaFin.toString()}</div>
                                <br />
                            </div>
                            <div style={{ maxWidth: '50%' }}>
                                <div>DNI del conductor:</div>
                                <DropdownButton
                                    id="dropdown-conductor"
                                    title="Seleccionar conductor"
                                    onSelect={handleSelectConductor}
                                >
                                    {conductores[0].map((c) => (
                                        <Dropdown.Item key={c.dni} eventKey={c.dni}>{c.dni}</Dropdown.Item>
                                    ))}
                                </DropdownButton>
                                <p>Valor seleccionado: {selectedConductor}</p>
                            </div>
                            <div style={{ maxWidth: '50%' }}>
                                <div>Patente del vehículo</div>
                                <DropdownButton
                                    id="dropdown-vehiculo"
                                    title="Seleccionar vehículo"
                                    onSelect={handleSelectVehiculo}
                                >
                                    {vehiculos[0].map((v) => (
                                        <Dropdown.Item key={v.patente} eventKey={v.patente}>{v.patente}</Dropdown.Item>
                                    ))}
                                </DropdownButton>
                                <p>Valor seleccionado: {selectedVehiculo}</p>
                            </div>
                            <div style={{ maxWidth: '50%' }}>
                                <div>Proyecto</div>
                                <DropdownButton
                                    id="dropdown-proyecto"
                                    title="Seleccionar proyecto"
                                    onSelect={handleSelectProyecto}
                                >
                                    {proyectos[0].map((p) => (
                                        <Dropdown.Item key={p.nombre} eventKey={p.nombre}>{p.nombre}</Dropdown.Item>
                                    ))}
                                </DropdownButton>
                                <p>Valor seleccionado: {selectedProyecto}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <button className="btn btn-orange" type="submit" value="Login">Guardar</button>
            </div>
        </>
    )
}

export default NuevoTrab;
