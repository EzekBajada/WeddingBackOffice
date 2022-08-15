<template>
    <div class="w-full bg-gray-400 h-10 font-moonBold p-3 rounded-lg text-white">
        {{props.name}} {{props.surname}}
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        name: String,
        surname: Number,
        isAttending: Number,
        lastUpdated: Number
    })
</script>