<template>
  <div class="row">
    <div class="col-8">
      <h3>Draggable with header</h3>

      <draggable
        :list="list"
        class="list-group"
        @start="dragging = true"
        @end="dragging = false"
        @change="log"
        item-key="name"
      >
        <template #header>
          <div class="btn-group list-group-item" role="group">
            <button class="btn btn-secondary" @click="add">Add</button>
          </div>
        </template>

        <template #footer>
          <div class="btn-group list-group-item" role="group">
            <button class="btn btn-secondary" @click="replace">Replace</button>
          </div>
        </template>

        <template #item="{ element }">
          <div class="list-group-item item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list" title="List" />
  </div>
</template>

<script setup lang="ts">
import { defineOptions, ref } from "vue";

defineOptions({
  name: "headerslot",
  display: "Header slot",
  order: 13,
  components: {
    draggable,
  },
});

let list = ref([
  { name: "John 1", id: 0 },
  { name: "Joao 2", id: 1 },
  { name: "Jean 3", id: 2 },
]);
let dragging = ref(false);
let id = ref(1);

function add() {
  list.value.push({ name: "Juan " + id.value, id: id.value++ });
}

function replace() {
  list.value = [{ name: "Edgard", id: id.value++ }];
}

function log(evt) {
  window.console.log(evt);
}
</script>
<style scoped></style>
