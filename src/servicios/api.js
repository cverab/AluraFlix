import { v4 as uuidv4 } from 'uuid'

export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export async function guardarData(datos) {
    try {
        const response = await fetch('/categorias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        });

        if (response.ok) {
            return 'Datos guardados con éxito';
        } else {
            throw new Error('Error al guardar datos');
        }
    } catch (error) {
        throw error;
    }
}

// ... Importar fetchData y guardarData

export async function agregarCategoria(data, nombre, descripcion, color) {
    const nuevaCategoria = {
        idCategoria: uuidv4(), // Genera un nuevo UUID o utiliza una lógica para crear uno único
        nombre: nombre,
        descripcion: descripcion,
        color: color,
        items: [],
    };

    const newData = {
        ...data,
        categorias: [...data.categorias, nuevaCategoria],
    };

    try {
        await guardarData(newData); // Guarda los datos actualizados
        return newData;
    } catch (error) {
        throw error;
    }
}