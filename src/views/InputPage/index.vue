<template>
  <div>

    <div>
      <Input v-model="test1" placeholder="基础文本框，请输入" />
      <span>{{ test1 }}</span>
    </div>

    <br>
    <br>

    <div>
      <Input v-model="test2" clearable placeholder="输入字符以后可以点击清空" />
    </div>

    <br>
    <br>

    <div>
      <Input v-model="test3" placeholder="prepend append">
      <template #prepend>Https://</template>
      <template #append>.com</template>
      </Input>

      <Input v-model="test3" placeholder="prefix suffix">
      <template #prefix>
        <Icon icon="fa-user" />
      </template>
      <template #suffix>
        <Icon icon="fa-user" />
      </template>
      </Input>
    </div>

    <br>
    <br>

    <div>
      <Input v-model="test4" disabled />
    </div>

    <br>
    <br>

    <div>
      <Input v-model="test5" placeholder="密码文本框，可以切换" showPassword />
    </div>

    <br>
    <br>

    <div class="size-holder">
      <Input v-model="test6" placeholder="大的 Input" size="large">
      </Input>
      <Input v-model="test6" placeholder="普通的 Input">
      </Input>
      <Input v-model="test6" placeholder="小的 Input" size="small">
      </Input>
    </div>
  </div>

  <br>
  <br>
  <div>
    <Input v-model="test7" placeholder="可以是一个 Textarea" type="textarea" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'
const test1 = ref('')
const test2 = ref('')
const test3 = ref('')
const test4 = ref('')
const test5 = ref('')
const test6 = ref('')
const test7 = ref('')

</script>

<style scoped>
.size-holder {
  display: flex;
  align-items: center;
}
</style>