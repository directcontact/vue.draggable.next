<template>
  <div class="row">
    <div class="col-1">
      <button class="btn btn-secondary button" @click="add">Add</button>
    </div>

    <div class="col-7">
      <h3>Draggable {{ draggingInfo }}</h3>

      <draggable
        tag="ul"
        :list="list"
        class="list-group"
        handle=".handle"
        item-key="name"
      >
        <template #item="{ element, index }">
          <li class="list-group-item">
            <i class="fa fa-align-justify handle"></i>

            <span class="text">{{ element.name }} </span>

            <input type="text" class="form-control" v-model="element.text" />

            <i class="fa fa-times close" @click="removeAt(index)"></i>
          </li>
        </template>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list" title="List" />
  </div>
</template>

<script setup lang="ts">
import { defineOptions, ref, computed } from "vue";

defineOptions({
  name: "handle",
  display: "Handle",
  instruction: "Drag using the handle icon",
  order: 5,
});

let list = ref([
  { name: "John", text: "", id: 0 },
  { name: "Joao", text: "", id: 1 },
  { name: "Jean", text: "", id: 2 },
]);
let dragging = ref(false);
let id = ref(3);

let draggingInfo = computed(() => (dragging.value ? "under drag" : ""));

function removeAt(idx: number) {
  list.value.splice(idx, 1);
}

function add() {
  id.value++;
  list.value.push({ name: "Juan " + id.value, id: id.value, text: "" });
}
</script>
<style scoped>
.button {
  margin-top: 35px;
}
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
}

.close {
  float: right;
  padding-top: 8px;
  padding-bottom: 8px;
}

input {
  display: inline-block;
  width: 50%;
}

.text {
  margin: 20px;
}
</style>
