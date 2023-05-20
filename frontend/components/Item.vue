<template>
    <tr :key="id">
        <td class="td">{{ id }}</td>
        <td class="td">{{ item }}</td>
        <td class="td">
            {{ price.toLocaleString('es-ES', {
                style: 'currency',
                currency: 'COP'
            }) }}
        </td>
        <td class="td">
            <span @click="alerta" class="action">Editar</span>
            |
            <span class="action">Eliminar</span>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'Item',
    props: [
        'id',
        'item',
        'price'
    ],
    methods: {
        alerta() {
            alert("Heyyy")
        }
    }
}
</script>

<style></style>