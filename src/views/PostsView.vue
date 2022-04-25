<template>
  <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-2">
    <template v-for="(post, index) in posts" :key="post.id">
      <post-item :post="post" :post-index="index"/>
    </template>
  </div>
</template>


<script>
import PostItem from "@/components/PostItem";

export default{
  components:{PostItem},

  data(){
    return{
      posts: []
    }
  },

  async mounted(){
    try{
      const res = await this.axios.get('https://jsonplaceholder.typicode.com/posts')
      this.posts=res.data
    }catch (e) {
      console.log(e)
    }
  }
}
</script>