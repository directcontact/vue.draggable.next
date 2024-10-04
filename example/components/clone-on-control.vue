<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable
        class="dragArea list-group"
        :list="list1"
        :clone="clone"
        :group="{ name: 'people', pull: pullFunction }"
        @start="start"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable
        class="dragArea list-group"
        :list="list2"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" />
  </div>
</template>

<script lang="ts" setup>
import { defineOptions, ref } from "vue";

defineOptions({
  name: "clone-on-control",
  display: "Clone on Control",
  instruction: "Press Ctrl to clone element from list 1",
  order: 4,
});

let list1 = ref([
  { name: "Jesus", id: 1 },
  { name: "Paul", id: 2 },
  { name: "Peter", id: 3 },
]);
let list2 = ref([
  { name: "Luc", id: 5 },
  { name: "Thomas", id: 6 },
  { name: "John", id: 7 },
]);
let controlOnStart = ref(true);
let idGlobal = ref(8);

function clone(obj) {
  const { name } = obj;

  return { name, id: idGlobal.value++ };
}

function pullFunction() {
  return controlOnStart.value ? "clone" : true;
}

function start(event) {
  const { originalEvent } = event;

  controlOnStart.value = originalEvent.ctrlKey;
}
</script>
<style scoped></style>
