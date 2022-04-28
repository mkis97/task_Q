<template>
  <div>
    <div id="app_bar"
         class="bg-theme-eucalyptus flex flex-row justify-between items-center h-12 fixed top-0 w-full px-4 z-50">
      <span class="text-xl font-bold text-white cursor-default">Simple app</span>
      <button-component value="Log out" @clicked="logOut"/>
    </div>
    <div id="content" class="mt-12">
      <slot/>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ui/ButtonComponent";

export default {
  components: {ButtonComponent},

  methods: {
    logOut() {
      localStorage.removeItem('q_login')
      this.$router.push({name: 'Login'})
    }
  }
}
</script>