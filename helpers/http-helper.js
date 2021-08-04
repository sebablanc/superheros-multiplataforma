export default {
    findCharactersByHouse: async function (house){
        try {

            const response = await fetch(`http://localhost:8000/api/superheroes/getByCasa?casa=${house=="home" ? null : house}`, {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            if(data.exito){
               return data.personajes;
            } else {
                return data.mensaje;
            }
        } catch (err) {
            console.log(err);
        }
    }
}