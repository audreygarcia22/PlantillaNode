async function getFormulario() {
    try {
        const response = await fetch("http://localhost:3003/formulario", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching formulario');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching formulario:', error);
        throw error;
    }
}

export { getFormulario };

//////////LLAMADO POST//////////

async function posFormulario(name,date,consulta) {
    try {
     
        const formularioData = { 
            name,
            date,
            consulta
        };



        const response = await fetch("http://localhost:3003/formulario", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formularioData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting formulario:', error);
        throw error;
    }
}

export{posFormulario}

//////////////LLAMADO UPDATE/////////////


async function updateFormulario(name,date,hour,consulta,id)
{
    try {
     
        const formularioData = { 
            name,
            date,
            hour,
            consulta
        
        };


        


        const response = await fetch("http://localhost:3003/formulario/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formularioData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update formulario:', error);
        throw error;
    }
}

export{updateFormulario}



//////////////LLAMADO DELETE/////////////


async function deleteFormulario(id) {
    try {
        const response = await fetch(`http://localhost:3003/formulario/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting formulario with id ${id}`);
        }

        return { message: `formulario with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting formulario:', error);
        throw error;
    }
}

export { deleteFormulario };