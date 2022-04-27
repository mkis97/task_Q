<template>
  <div class="border border-grey px-6 pt-4 pb-6 rounded bg-white cursor-pointer shadow-md max-w-lg"
       @click="openSinglePost">
    <div class="flex flex-row items-center flex flex-wrap">
      <user-acronym :acronym="$mixins.acronym($mixins.getUser(usersArray, post.userId))"/>
      <span class="text-xs font-thin pl-2">{{ $mixins.getUser(usersArray, post.userId) }}</span>
    </div>
    <p class="text-xs text-right font-thin italic" v-if="!hidePostNumeration">
      Post no.{{ postIndex + 1 }}
    </p>
    <p class="font-bold text-theme-eucalyptus mt-5 leading-snug">{{ $filters.capitalize(post.title) }}</p>
    <p class="text-xs mt-3 leading-tight">{{ post.body }}</p>
    <slot name="append"></slot>
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
    postIndex: {
      type: Number,
      required: false,
      default: 0
    },
    hidePostNumeration: {
      type: Boolean,
      required: false,
      default: false
    },
    usersArray: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  methods: {
    openSinglePost() {
      this.$router.push({name: 'Single post', params: {postId: this.post.id}})
    }
  }
}
</script>
