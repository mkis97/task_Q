<template>
  <div class="border rounded p-4 mt-1 relative cursor-default">
    <p class="text-left font-bold text-sm pr-4">{{ $filters.capitalize(comment.name) }}</p>
    <i class="bi bi-chevron-compact-down absolute top-3 right-3 cursor-pointer" :class="{ 'rotate-180': expanded }"
       @click="expanded=!expanded"/>
    <transition name="grow-out">
      <p class="text-left text-sm" v-show="expanded">{{ comment.body }}</p>
    </transition>
    <div>
      <a :href="`mailto:${comment.email}`" class="font-thin text-xs italic">By: {{ comment.email }}</a>
    </div>
  </div>
</template>


<script>
export default {
  name: 'CommentItem',

  props: {
    comment: {
      type: Object,
      required: true,
      default: () => {
      }
    }
  },

  data() {
    return {
      expanded: false
    }
  }
}
</script>


<style scoped>
.grow-out-enter-active {
  animation: growOut 200ms ease-in-out forwards;
  transform-origin: top center;
}

.grow-out-leave-active {
  animation: growIn 200ms ease-in-out forwards;
  transform-origin: top center;
}

@keyframes growOut {
  0% {
    transform: rotateX(-90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes growIn {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-90deg);
  }
}
</style>