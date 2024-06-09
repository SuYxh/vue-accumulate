<template>
  <div>
    <ul>
      <li v-for="(item, i) in routeList" :key="i">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { routes } from '../../router/index';

const routeList = computed(() => routes)

</script>