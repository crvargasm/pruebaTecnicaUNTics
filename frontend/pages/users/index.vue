<template>
  <div>
    <h1 class="title">Usuarios<button class="addButton">+</button></h1>

    <table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Name</th>
          <th class="text-left">Surname</th>
          <th class="text-left">Username</th>
          <th class="text-left">Credit Balance</th>
          <th class="text-left">Payment Methods</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <User v-for="post of post" :key="post.id" :id="post.id" :name="post.name" :surname="post.surname"
          :username="post.username" :creditBalance="post.creditBalance" :paymentMethods="post.paymentMethods" />
      </tbody>
    </table>

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
      post: [],
    }
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/backend/v2/api/user')
      this.post = res.data
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style></style>
