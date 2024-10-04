<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'people', pull: 'clone', put: false }"
        :clone="cloneDog"
        @change="log"
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
        @change="log"
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

<script setup lang="ts">
import { defineOptions, ref } from "vue";

defineOptions({
  name: "custom-clone",
  display: "Custom Clone",
  order: 3,
  components: {
    draggable,
  },
});

let list1 = ref([
  { name: "dog 1", id: 1 },
  { name: "dog 2", id: 2 },
  { name: "dog 3", id: 3 },
  { name: "dog 4", id: 4 },
]);
let list2 = ref([
  { name: "cat 5", id: 5 },
  { name: "cat 6", id: 6 },
  { name: "cat 7", id: 7 },
]);
let idGlobal = ref(8);

function log(evt) {
  window.console.log(evt);
}

function cloneDog(clonable) {
  const { id } = clonable;

  return {
    id: idGlobal.value++,
    name: `cat ${id}`,
  };
}
</script>
<style scoped></style>
