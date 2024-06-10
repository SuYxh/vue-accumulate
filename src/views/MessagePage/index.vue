<template>
  <div>
    message 测试
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { createMessage } from '@/components/Message';

onMounted(() => {
  createMessage({ message: 'hello world', duration: 0, showClose: true })
  createMessage({ message: 'hello world again', duration: 0, type: 'success', showClose: true })
  createMessage({ message: 'hello world three', duration: 0, type: 'danger', showClose: true })
})

</script>