<template>
  <div>
    <Dropdown 
      placement="bottom" 
      :trigger="trigger" 
      :menu-options="options"
      @visible-change="e => inlineConsole('visible change', e)"
      @select="e => inlineConsole('select', e)"
      ref="tooltipRef"
    >
      <img alt="Vue logo" class="logo" src="../../assets/vue.svg" width="125" height="125"/>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import Dropdown, { MenuOption } from '@/components/Dropdown';
import { ref, h } from 'vue';

const trigger = ref<any>('click')
const options: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]

const inlineConsole = (...args: any) => {
  console.log(...args)
}
</script>