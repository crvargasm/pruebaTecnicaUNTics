<template>
    <div class="post">
        <p>{{ id + " " + item + " " +
            price.toLocaleString('es-ES', {
                style: 'currency',
                currency: 'COP'
            }) }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: [
        'id',
        'item',
        'price'
    ]
}
</script>

<style></style>