<template>
  <div class="w-full flex items-center justify-center mt-4 text-body-2 gap-6 pb-6">
    <template v-for="page in pages" :key="`page-${page}`">
      <button
          class="py-2 px-4 rounded-full text-white"
          :class="page===modelValue ? 'bg-theme-shamrock' : 'bg-theme-eucalyptus'"
          @click="$emit('update:modelValue', page)"
      >
        {{ page }}
      </button>
    </template>
  </div>
</template>


<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 1,
    },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      pages: [1, 2, 3, 4, 5]
    }
  }
};
</script>