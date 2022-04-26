<template>
  <button
      @click.stop="action"
      class="relative overflow-hidden flex gap-2 items-center justify-center text-body-2 rounded bg-theme-shamrock h-8"
      :class="[fullWidth ? 'w-full' : 'px-3']"
  >
    <span class="whitespace-nowrap text-white" :class="value">{{ value }}</span>
  </button>
</template>


<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      default: "",
    },
    fullWidth: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    action() {
      this.$emit("clicked");
    }
  },
};
</script>