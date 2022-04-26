<template>
  <div class="bg-theme-chinook h-full w-full min-h-screen flex flex-row items-center justify-center py-16">
    <post-item :post="post" hide-post-numeration>
      <template #append>
        <comments-list/>
      </template>
    </post-item>
  </div>
</template>


<script>
import PostItem from "@/components/PostItem";
import CommentsList from "@/components/CommentsList";

export default {
  components: {CommentsList, PostItem},
  data() {
    return {
      post: {}
    }
  },

  async created() {
    try {
      const res = await this.axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.postId}`)
      this.post = res.data
    } catch (e) {
      console.log(e)
    }
  }
}
</script>