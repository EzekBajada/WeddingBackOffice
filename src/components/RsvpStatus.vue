<template>
<div class="flex flex-row h-screen">
    <div class="rounded-lg bg-green-500 h-1/2 w-1/2">
      {{testVar}}
    </div>

    <div class="rounded-lg bg-red-500 h-1/2 w-1/2">
      {{testVar}}
    </div>
</div>
</template>

<script setup>
  import { defineProps } from "vue";

  const testVar = 2
  defineProps({a: String})
</script>