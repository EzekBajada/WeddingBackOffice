<template>
    <div class="flex flex-row w-1/3 items-center justify-center bg-gray-800 h-10 font-moonBold p-3 rounded-lg text-white">
        <div>
            {{props.name}} {{props.surname}}
        </div>
        <div class="rounded-lg ml-10 p-1" :class="classes">
            {{props.isAttending ? 'Attending' : 'Not Attending'}}
        </div>
        <div class="rounded-lg ml-10 p-1 bg-stone-600">
            {{props.numberOfGuests}}
        </div>
</div>
</template>

<script setup>
    import { defineProps } from 'vue';
    const classes = {
        'bg-green-500': props.isAttending, 
        'bg-red-500': !props.isAttending
    }

    const props = defineProps({
        name: String,
        surname: Number,
        isAttending: Number,
        numberOfGuests: Number,
        lastUpdated: Number
    })
</script>