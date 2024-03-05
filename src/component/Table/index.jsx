import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchData/*, guardarData, agregarCategoria*/ } from '../../servicios/api.js';

const TablaCSS = styled.table`
    border: 3px solid var(--color-primary-medium);
    width: 100%;
    margin-bottom: 3rem;
    text-align: left;
    color: var(--color-gray-light);
    font-family: var(--roboto);
    font-style: normal;
       line-height: normal;
    thead {
        font-size: 2.1875rem;
        font-weight: 400;
    }
    tbody {
        font-size: 1.6875rem;
        font-weight: 300;
    }
`
const Table = ({ cargarInformacion }) => {
    useEffect(() => {
        fetchData('http://localhost:5000/categorias')
            .then((data) => setData(data))
            .catch((error) => console.error('Error al cargar datos:', error));
    }, []);

    const [data, setData] = useState([]);

    /*
        const handleAgregarNuevaCategoria = () => {
            agregarCategoria(data, nombre, descripcion, color)
                .then((newData) => setData(newData))
                .catch((error) => console.error('Error al agregar categoría:', error));
        };
    
        const handleGuardarDatos = () => {
            // Envía los datos modificados al servidor
            fetch('/guardar-datos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    if (response.ok) {
                        console.log('Datos guardados con éxito');
                    } else {
                        console.error('Error al guardar datos');
                    }
                })
                .catch((error) => {
                    console.error('Error al guardar datos:', error);
                });
        };
    */
    return (
        <TablaCSS>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Editar</th>
                    <th>Remover</th>
                </tr>
            </thead>
            <tbody>
                {data.map((categoria) => (
                    <tr key={categoria.id}>
                        <td>{categoria.nombre}</td>
                        <td>{categoria.descripcion}</td>
                        <td><a href='#' onClick={() => cargarInformacion(categoria)}>Editar</a></td>
                        <td><a href='#'>Remover</a></td>
                    </tr>
                ))}
            </tbody>
        </TablaCSS>
    );
};

export default Table;
