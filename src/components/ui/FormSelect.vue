<template>
  <div class="relative flex flex-col">
    <div v-if="label" class="flex mb-1">
      <label :for="inputId" class="text-sm">
        {{ label }}
      </label>
    </div>
    <div class="relative flex-shrink-0">
      <select :value="modelValue"
              :ref="inputId"
              :id="inputId"
              class="h-8 py-2 px-2 border rounded focus:outline-theme-eucalyptus text-xs"
              @input="$emit('update:modelValue', getSelectedValue($event))">
        <option :value="null" v-if="!requiredValue">-</option>
        <option v-for="option in options" :key="option.key" :value="option.id">{{ option.name }}</option>
      </select>
      <p class="text-xs text-red-900">{{ errorMsg }}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    modelValue: {
      type: [String, Number]
    },
    options: {
      type: Array,
      required: true,
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
    },
    requiredValue:{
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['update:modelValue'],

  methods: {
    getSelectedValue(event) {
      if (event.target.value === '-') {
        return null
      } else {
        return event.target.value
      }
    }
  }
};
</script>