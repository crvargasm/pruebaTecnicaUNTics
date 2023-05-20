<template>
  <div class="Container_Home">
    <VideoHome />
    <h1 class="H1_Home">Welcome to the dealings app</h1>
    <p class="P_Home">
      Welcome to our Online Banking Commerce! <br /><br />

      At our Banking Commerce, we offer a modern and secure banking experience, designed to meet all your financial needs
      from the comfort of your home. We take pride in providing you with exceptional service, along with the tools and
      features that will enable you to manage your finances efficiently and conveniently.<br />

      On our welcome page, you will find an intuitive and user-friendly interface, designed to allow you to navigate
      seamlessly and quickly access all the functionalities we offer.<br />

      <span class="P_Home_quo">
        -Carlitos Peñita, CEO
        <img class="ImgCEO_Home"
          src="https://img.freepik.com/foto-gratis/retrato-hombre-negocios-mediana-edad-traje_186202-880.jpg?w=740&t=st=1684534546~exp=1684535146~hmac=4203568771f8beeaff8d40c88dd6564ab9b25f8c2c1e22b9b3ec8e9f207fcf70"
          alt="" />
      </span>
    </p>
  </div>
</template>

<script>
import VideoHome from '~/components/VideoHome.vue';

export default {
  components: {
    VideoHome: VideoHome,
  },
  head() {
    return {
      title: 'App de prueba | Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Website de prueba'
        }
      ],
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

.Container_Home {
  position: fixed;
  font-family: 'Abel';

  z-index: 1;
  width: 75rem;
}

.H1_Home {
  font-size: 70px;
  margin-top: 3rem;
  color: rgb(255, 255, 0);
  text-shadow: black -6px 6px;
}

.P_Home {
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 30px;
  border-radius: 1rem;
  color: white;
  margin-top: 4rem;
  padding: 1rem 3rem;
  box-shadow: rgba(255, 0, 0, 0.7) -12px 12px;
}

.ImgCEO_Home {
  margin-left: 1rem;
  height: 40px;
  width: auto;
  border-radius: 50%;
}

.P_Home_quo {
  display: flex;
  font-size: 25px;
  justify-content: flex-end;
}
</style>
