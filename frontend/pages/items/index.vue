<template>
    <div>
        <h1 class="title">Items<button class="addButton">+</button></h1>

        <table>
            <thead>
                <tr>
                    <th class="text-left">ID</th>
                    <th class="text-left">Item Name</th>
                    <th class="text-left">Actions</th>
                    <th class="text-left">Price</th>
                </tr>
            </thead>
            <tbody>
                <Item v-for="post of post" :key="post.id" :id="post.id" :item="post.name" :price="post.price" />
            </tbody>
        </table>

    </div>
</template>

<script>
import axios from 'axios'
import Item from '@/components/Item';

export default {
    name: 'ItemsPage',
    components: {
        Item: Item,
    },
    head() {
        return {
            title: 'App de prueba | Items',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Website de prueba'
                }
            ],
        }
    },
    data() {
        return {
            post: [],
        }
    },
    async created() {
        try {
            const res = await axios.get('http://localhost:3000/backend/v2/api/item')
            this.post = res.data
        } catch (error) {
            console.log(error)
        }
    },
}
</script>