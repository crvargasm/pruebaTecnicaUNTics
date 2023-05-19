<template>
    <div>
        <h1>Items</h1>
        <Post v-for="post of post" :key="post.id" :id="post.id" :item="post.name" :price="post.price" />
    </div>
</template>

<script>
import axios from 'axios'
import Post from '../../components/Post';

export default {
    components: {
        Post: Post,
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