<template>
    <div class="w-full bg-gray-400 h-10">

    </div>
</template>

<script setup lang="ts">
    import { defineProps} from "vue";
    import { Guest } from '../models/Guest'

    const props = defineProps<{
         guest: Guest
    }>()
</script>