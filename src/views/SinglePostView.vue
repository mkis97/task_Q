<template>
  <div class="bg-theme-chinook h-full w-full min-h-screen flex flex-row items-center justify-center py-16">
    <post-item :post="post" :users-array="users">
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
      post: {},
      users: []
    }
  },

  async created() {
    try {
      const resPost = await this.axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.postId}`)
      this.post = resPost.data
      const resUsers = await this.axios.get('https://jsonplaceholder.typicode.com/users')
      this.users = resUsers.data
    } catch (e) {
      this.$toast.error('Something went wrong')
    }
  }
}
</script>