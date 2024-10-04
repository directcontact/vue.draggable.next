<template>
  <div class="row">
    <div class="col-8">
      <h3>Nested draggable</h3>
      <nested-draggable :tasks="list" />
    </div>

    <rawDisplayer class="col-3" :value="list" title="List" />
  </div>
</template>

<script setup lang="ts">
import nestedDraggable from "./infra/nested.vue";
import { defineOptions, ref } from "vue";

defineOptions({
  name: "nested-example",
  display: "Nested",
  order: 15,
  components: {
    nestedDraggable,
  },
});

let list = ref([
  {
    name: "task 1",
    tasks: [
      {
        name: "task 2",
        tasks: [],
      },
    ],
  },
  {
    name: "task 3",
    tasks: [
      {
        name: "task 4",
        tasks: [],
      },
    ],
  },
  {
    name: "task 5",
    tasks: [],
  },
]);
</script>
<style scoped></style>
