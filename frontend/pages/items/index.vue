<template>
    <div>
        <h1 class="title">Items<button @click="showModal" class="addButton">+</button></h1>

        <table>
            <thead>
                <tr>
                    <th class="text-left">ID</th>
                    <th class="text-left">Item Name</th>
                    <th class="text-left">Price</th>
                    <th class="text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                <Item v-for="post of post" :key="post.id" :id="post.id" :name="post.name" :price="post.price" />
            </tbody>
        </table>

        <v-dialog v-model="show" persistent max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Modal</span>
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="sendForm">
                        <v-text-field v-model="name" label="Item"></v-text-field>
                        <v-text-field v-model="price" label="Price"></v-text-field>

                        <v-card-actions>
                            <v-btn type="submit" color="primary">Send</v-btn>
                            <v-btn @click="closeModal">Close</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
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
            show: false,

            name: '',
            price: '',

            post: [],
        }
    },
    async created() {
        try {
            const API_PORT = 10000
            const API_HOST = `http://localhost:${API_PORT}/backend/v2/api/`
            const url = API_HOST + 'item';

            const res = await axios.get(url)
            this.post = res.data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        showModal() {
            this.show = true;
        },
        closeModal() {
            this.show = false;
            this.resetForm();
        },
        async sendForm() {
            const API_PORT = 3000
            const API_HOST = `http://localhost:${API_PORT}/backend/v2/api/`
            const url = API_HOST + 'item/';

            const datos = {
                name: this.name,
                price: this.price,
            }

            try {
                const res = await axios.post(url, datos)
                console.log('Respuesta:', res.data)
            } catch (error) {
                console.error('Error:', error)
                return
            }
            console.log('Form send')
            this.closeModal()
            window.location.reload()
        },
        resetForm() {
            this.name = ''
            this.price = ''
        }
    },
}
</script>