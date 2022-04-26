<template>
  <div class="bg-theme-chinook h-screen w-screen flex flex-row items-center justify-center">
    <div class="max-w-md w-full bg-white px-8 py-6 rounded border border-grey shadow-xl">
      <p class="font-black text-2xl text-theme-eucalyptus text-center">Login</p>
      <form-input v-model="form.email" label="User name" input-id="email"/>
      <form-input v-model="form.password" label="Password" input-id="password" type="password" class="mt-2"/>
      <button-component value="Login" full-width class="mt-4" @clicked="login"/>
    </div>
  </div>
</template>


<script>
import FormInput from "@/components/ui/FormInput";
import ButtonComponent from "@/components/ui/ButtonComponent";

export default {
  components: {ButtonComponent, FormInput},

  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    login() {
      console.log(this.form)
      this.$router.push({name: 'Posts'})
    }
  }
}
</script>