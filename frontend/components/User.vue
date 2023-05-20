<template>
    <tr :key="id">
        <td class="td">{{ id }}</td>
        <td class="td">{{ name }}</td>
        <td class="td">{{ surname }}</td>
        <td class="td">{{ username }}</td>
        <td class="td">{{ creditBalance }}</td>
        <td class="td">{{ paymentMethods }}</td>
        <td class="td">
            <span @click="alerta" class="action">Editar</span>
            |
            <span class="action">Eliminar</span>
        </td>
    </tr>
</template>

<script>
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
        alerta() {
            alert("Heyyy")
        }
    }
}
</script>

<style></style>