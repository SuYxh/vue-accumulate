<template>
  <div>
    <div>
      <Switch v-model="test1" />
    </div>

    <br>
    <br>

    <div>
      <Switch v-model="test2" activeValue="right" inactiveValue="wrong" />
      <h4>model-value: {{ test2 }}</h4>
    </div>


    <br>
    <br>

    <div>
      正常：
      <Switch v-model="test3" /> <br />
      禁用：
      <Switch v-model="test4" disabled />
    </div>

    <br>
    <br>

    <div class="switch-size-container">
      <Switch v-model="test5" size="large" />
      <Switch v-model="test5" />
      <Switch v-model="test5" size="small" />
    </div>

    <br>
    <br>


    <div>
      <Switch v-model="test6" activeText="ON" inactiveText="OFF" />

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/components/Switch';

const test1 = ref(false)
const test2 = ref('right')
const test3 = ref(false)
const test4 = ref(false)
const test5 = ref(false)
const test6 = ref(false)


</script>

<style scoped>
.switch-size-container {
  display: flex;
  align-items: center;

  .vk-switch {
    margin-right: 10px;
  }
}
</style>