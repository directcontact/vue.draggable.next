<template>
  <div class="row">
    <div class="col-4">
      <h3>First draggable with footer</h3>

      <draggable
        id="first"
        data-source="juju"
        :list="list"
        class="list-group"
        group="a"
        item-key="name"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>

        <template #footer>
          <div class="btn-group list-group-item" role="group">
            <button class="btn btn-secondary" @click="add">Add</button>
            <button class="btn btn-secondary" @click="replace">Replace</button>
          </div>
        </template>
      </draggable>
    </div>

    <div class="col-4">
      <h3>Second draggable with header</h3>

      <draggable :list="list2" class="list-group" group="a" item-key="name">
        <template #item="{ element }">
          <div class="list-group-item item">
            {{ element.name }}
          </div>
        </template>

        <template #header>
          <div
            class="btn-group list-group-item"
            role="group"
            aria-label="Basic example"
          >
            <button class="btn btn-secondary" @click="add2">Add</button>
            <button class="btn btn-secondary" @click="replace2">Replace</button>
          </div>
        </template>
      </draggable>
    </div>

    <rawDisplayer class="col-2" :value="list" title="List" />

    <rawDisplayer class="col-2" :value="list2" title="List2" />
  </div>
</template>

<script setup lang="ts">
import { defineOptions, ref } from "vue";

defineOptions({
  name: "two-list-headerslots",
  display: "Two list header slot",
  order: 14,
});

let list = ref([
  { name: "John 1", id: 0 },
  { name: "Joao 2", id: 1 },
  { name: "Jean 3", id: 2 },
]);
let list2 = ref([
  { name: "Jonny 4", id: 3 },
  { name: "Guisepe 5", id: 4 },
]);
let id = ref(1);

function add() {
  list.value.push({ name: "Juan " + id.value, id: id.value++ });
}

function replace() {
  list.value = [{ name: "Edgard", id: id.value++ }];
}

function add2() {
  list2.value.push({ name: "Juan " + id.value, id: id.value++ });
}

function replace2() {
  list2.value = [{ name: "Edgard", id: id.value++ }];
}
</script>
<style scoped></style>
