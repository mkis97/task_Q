<template>
  <p class="text-left mt-4 mb-2 font-bold cursor-default">Comments:</p>
  <template v-for="comment in comments" :key="comment.id">
    <comment-item :comment="comment"/>
  </template>
</template>


<script>
import CommentItem from "@/components/CommentItem";

export default {
  name: 'CommentsList',

  components: {CommentItem},

  props: {
    postId: {
      type: Number,
      required: false,
      default: null
    }
  },

  data() {
    return {
      comments: []
    }
  },

  async created() {
    try {
      const res = await this.axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.postId || this.postId}/comments`)
      this.comments = res.data
    } catch (e) {
      this.$toast.error('Something went wrong')
    }
  }
}
</script>