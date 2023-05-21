<template>
    <tr :key="id">
        <td class="td">{{ id }}</td>
        <td class="td">{{ name }}</td>
        <td class="td">{{ surname }}</td>
        <td class="td">{{ username }}</td>
        <td class="td">{{ creditBalance }}</td>
        <td class="td">
            <!-- <span class="action">Editar</span>| -->
            <span @click="deleteUser" class="action">Eliminar</span>
        </td>
    </tr>
</template>

<script>
import axios from 'axios';

export default {
    name: 'User',
    props: [
        'id',
        'name',
        'surname',
        'username',
        'creditBalance',
        'paymentMethods',
    ],
    methods: {
        async deleteUser() {
            const API_PORT = 10000
            const API_HOST = `http://localhost:${API_PORT}/backend/v2/api/`
            const url = API_HOST + 'user/';
            try {
                const res = await axios.delete(url + this.id)
                console.log('Respuesta:', res.data)
            } catch (error) {
                console.error('Error:', error)
                return
            }
            console.log("User deleted")
            window.location.reload()
        }
    }
}
</script>

<style></style>