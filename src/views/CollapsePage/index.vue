<template>
  <div>
    <Collapse v-model="openedValue">
      <CollapseItem name="a" title="Title A">
        <h1>headline title</h1>
        <div> this is content a aaa </div>
      </CollapseItem>
      <CollapseItem name="b" title="Title B">
        <div> this is bbbbb test </div>
      </CollapseItem>
      <CollapseItem name="c" title="Disabled Title" disabled>
        <div> this is cccc test </div>
      </CollapseItem>
    </Collapse>
    {{openedValue}}
  </div>
</template>

<script setup lang="ts">
import Collapse from '@/components/Collapse/Collapse.vue';
import CollapseItem from '@/components/Collapse/CollapseItem.vue';
import { ref, onMounted } from 'vue';

const openedValue = ref(['a'])

onMounted(() => {
  setTimeout(() => {
    openedValue.value = ['a', 'b']
  }, 2000)
})

</script>