<template>
  <transition name="fade">
    <div v-if="showModal" class="w-sm">
      <div class="w-screen h-screen bg-black opacity-75 z-50 fixed top-0 bottom-0 left-0 right-0"/>
      <div class="w-sm z-50 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
        <dialog open class="relative max-w-sm rounded-md'">
          <div class="bg-white">
            <slot name="body"/>
            <div class="flex justify-end pt-4">
              <button-component value="Close" @clicked="closeModal"/>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  </transition>
</template>

<script>
import ButtonComponent from "@/components/ui/ButtonComponent";

export default {
  components: {ButtonComponent},
  props: {
    showModal: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    closeModal() {
      if (!this.showModal) return;
      this.$emit("closeModal");
    }
  },
};
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s
}
</style>
