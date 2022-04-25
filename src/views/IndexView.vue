<template>
  <span @click="testRouter">index page</span>
</template>


<script>
export default {
  methods:{
    testRouter(){
      this.$router.push({name: 'Posts'})
    }
  }
}
</script>