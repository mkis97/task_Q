<template>
  <div>
    <div class="relative flex flex-col">
      <div v-if="label" class="flex mb-1">
        <label :for="inputId" class="text-sm">
          {{ label }}
        </label>
      </div>
      <div class="relative flex-shrink-0">
        <input
            :value="modelValue"
            :ref="inputId"
            :id="inputId"
            :type="type"
            class="w-full h-8 py-2 px-2 border rounded focus:outline-none"
            @input="$emit('update:modelValue', $event.target.value)"
        />
      </div>
      <p class="text-xs text-red-900">{{errorMsg}}</p>
    </div>
  </div>
</template>


<script>

export default {
  props: {
    modelValue: {
      type: [String, Number]
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    inputId: {
      type: String,
      required: true,
      default: "",
    },
    label: {
      type: String,
      required: true,
      default: "",
    },
    errorMsg: {
      type: String,
      required: false,
      default: "",
    }
  },
  emits: ['update:modelValue'],
};
</script>
