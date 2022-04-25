<template>
  <div class="border border-grey p-6 rounded">
    <span>
      {{ postIndex + 1 }}
    </span>
    <div>
      <span class="font-bold">{{ post.title }}</span>
    </div>
    <div>
      <span>{{ post.body }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',

  props: {
    post: {
      type: Object,
      required: true,
      default: () => {
      }
    },
    postIndex: {
      type: Number,
      required: true,
      default: 0
    }
  }
}
</script>
