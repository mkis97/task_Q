<template>
  <div class="bg-theme-chinook h-screen w-screen flex flex-row items-center justify-center">
    <login-form @login="login"/>
  </div>
</template>


<script>


import LoginForm from "@/components/LoginForm";
export default {
  components: {LoginForm},
  methods: {
    login() {
      console.log(this.form)
      this.$router.push({name: 'Posts'})
    }
  }
}
</script>