<template>
  <draggable
    class="dragArea"
    tag="ul"
    :list="tasks"
    :group="{ name: 'g1' }"
    item-key="name"
  >
    <template #item="{ element }">
      <li>
        <p>{{ element.name }}</p>
        <nested-draggable :tasks="element.tasks" />
      </li>
    </template>
  </draggable>
</template>
<script setup lang="ts">
import { defineProps, defineOptions } from "vue";

const props = defineProps({
  tasks: {
    required: true,
    type: Array,
  },
});

defineOptions({
  name: "nested-draggable",
});
</script>

<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>
