<template>
  <div class="max-w-md w-full bg-white px-8 py-6 rounded border border-grey shadow-xl">
    <p class="font-black text-2xl text-theme-eucalyptus text-center">Login</p>
    <form-input v-model="form.username" label="Username" input-id="username" :error-msg="error.username"/>
    <form-input v-model="form.password" label="Password" input-id="password" type="password" class="mt-2"
                :error-msg="error.password"/>
    <button-component value="Login" full-width class="mt-4" @clicked="emitLogin"/>
  </div>
</template>


<script>
import FormInput from "@/components/ui/FormInput";
import ButtonComponent from "@/components/ui/ButtonComponent";
import useVuelidate from '@vuelidate/core'
import {required} from '@vuelidate/validators'

export default {
  components: {ButtonComponent, FormInput},

  setup() {
    return {v$: useVuelidate()}
  },

  validations() {
    return {
      form: {
        username: {required},
        password: {required}
      }
    }
  },

  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      error: {
        username: '',
        password: ''
      },
      allowedUsernames: []
    }
  },

  async created() {
    try {
      const res = await this.axios.get('https://jsonplaceholder.typicode.com/users')
      this.allowedUsernames = res.data.map(i => i.username)
    } catch (e) {
      console.log(e)
    }
  },

  methods: {
    async emitLogin() {
      const isValid = await this.v$.$validate()
      this.v$.$errors.find(err => err.$propertyPath === 'form.username') ? this.error.username = 'This field is required' : this.error.username = ''
      this.v$.$errors.find(err => err.$propertyPath === 'form.password') ? this.error.password = 'This field is required' : this.error.password = ''
      if (!isValid) return
      if (this.allowedUsernames.includes(this.form.username) && this.form.password === '12345') {
        this.$toast.open({
          message: 'Success',
          type: 'success',
          duration: 1500
        });
        this.$emit('login')
      } else {
        this.$toast.open({
          message: 'Wrong login data',
          type: 'error',
          duration: 1500
        });
      }
    }
  }
}
</script>