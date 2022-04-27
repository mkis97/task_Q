<template>
  <div
      class="flex items-center justify-center rounded-full h-8 w-8 bg-theme-eucalyptus border border-grey text-white text-xs font-bold"
  >
    <span>{{ acronym }}</span>
  </div>
</template>


<script>
export default {
  props: {
    acronym: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>