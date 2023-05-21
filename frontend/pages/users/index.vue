<template>
  <div>
    <h1 class="title">Usuarios<button @click="showModal" class="addButton">+</button></h1>

    <table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Name</th>
          <th class="text-left">Surname</th>
          <th class="text-left">Username</th>
          <th class="text-left">Credit Balance</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <User v-for="post of post" :key="post.id" :id="post.id" :name="post.name" :surname="post.surname"
          :username="post.username" :creditBalance="post.creditBalance" />
      </tbody>
    </table>

    <v-dialog v-model="show" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Modal</span>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="sendForm">
            <v-text-field v-model="name" label="Name"></v-text-field>
            <v-text-field v-model="surname" label="Surname"></v-text-field>
            <v-text-field v-model="username" label="Username"></v-text-field>
            <v-text-field v-model="creditBalance" label="Credit Balance"></v-text-field>

            <v-card-actions>
              <v-btn type="submit" color="primary">Send</v-btn>
              <v-btn @click="closeModal">Closes</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import axios from 'axios'
import User from '@/components/User';

export default {
  name: 'UsersPage',
  components: {
    User: User,
  },
  head() {
    return {
      title: 'App de prueba | Users',
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
      surname: '',
      username: '',
      creditBalance: '',

      post: [],
    }
  },
  async created() {
    try {

      const API_PORT = 10000
      const API_HOST = `http://localhost:${API_PORT}/backend/v2/api/`
      const url = API_HOST + 'user';

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
      const url = API_HOST + 'user/';

      const datos = {
        name: this.name,
        surname: this.surname,
        username: this.username,
        creditBalance: this.creditBalance,
      };
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
      this.surname = ''
      this.username = ''
      this.creditBalance = ''
    }
  }
}
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-contenido {
  background-color: #fff;
  padding: 20px;
}

button {
  margin-top: 10px;
}
</style>
