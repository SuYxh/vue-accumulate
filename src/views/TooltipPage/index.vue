<!-- :trigger="trigger" 
      :menu-options="options"
      @visible-change="e => inlineConsole('visible change', e)"
      @select="e => inlineConsole('select', e)"
      manual -->
<template>
  <div>
    <Tooltip 
      placement="bottom" 
      ref="tooltipRef"
      content="hello yang"
    >
      <img alt="Vue logo" class="logo" src="../../assets/vue.svg" width="125" height="125"/>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Tooltip, { TooltipInstance } from '@/components/Tooltip';

const tooltipRef = ref<TooltipInstance | null>(null)


onMounted(() => {
  setTimeout(() => {
    console.log('ok');
  }, 2000)
})

</script>