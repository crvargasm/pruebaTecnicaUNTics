<template>
    <tr :key="id">
        <td class="td">{{ id }}</td>
        <td class="td">{{ name }}</td>
        <td class="td">
            {{ price.toLocaleString('es-ES', {
                style: 'currency',
                currency: 'COP'
            }) }}
        </td>
        <td class="td">
            <!-- <span class="action">Editar</span> -->
            <!-- | -->
            <span @click="deleteItem" class="action">Eliminar</span>
        </td>
    </tr>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Item',
    props: [
        'id',
        'name',
        'price'
    ],
    methods: {
        async deleteItem() {
            const API_PORT = 10000
            const API_HOST = `http://localhost:${API_PORT}/backend/v2/api/`
            const url = API_HOST + 'item/';
            try {
                const res = await axios.delete(url + this.id)
                console.log('Respuesta:', res.data)
            } catch (error) {
                console.error('Error:', error)
                return
            }
            console.log("Item deleted")
            window.location.reload()
        }
    }
}
</script>

<style></style>