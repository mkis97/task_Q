<template>
  <div class="relative border border-grey px-6 pt-4 pb-6 rounded bg-white shadow-md max-w-lg"
       :class="clickable ? 'cursor-pointer' : 'cursor-default'"
       @click="openSinglePost">
    <div class="flex flex-row items-center flex flex-wrap">
      <user-acronym :acronym="$mixins.acronym($mixins.getUser(usersArray, post.userId))"/>
      <span class="text-xs font-thin pl-2">{{ $mixins.getUser(usersArray, post.userId) }}</span>
    </div>
    <p class="font-bold text-theme-eucalyptus mt-5 leading-snug">{{ $filters.capitalize(post.title) }}</p>
    <p class="text-xs mt-3 leading-tight">{{ post.body }}</p>
    <slot name="append"></slot>
    <i v-if="showMoreIcon" class="bi bi-chat-dots-fill absolute bottom-3 right-3 cursor-pointer"
       @click.stop="openComments"/>
  </div>
</template>

<script>
import UserAcronym from "@/components/ui/UserAcronym";

export default {
  name: 'PostItem',

  components: {UserAcronym},

  props: {
    post: {
      type: Object,
      required: true,
      default: () => {
      }
    },
    usersArray: {
      type: Array,
      required: true,
      default: () => []
    },
    showMoreIcon: {
      type: Boolean,
      required: false,
      default: false
    },
    clickable: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods: {
    openSinglePost() {
      this.$router.push({name: 'Single post', params: {postId: this.post.id}})
    },

    openComments() {
      this.$emit('comments', this.post.id)
    }
  }
}
</script>
