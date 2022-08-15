<template>
    <div class="w-full bg-gray-400 h-10">

    </div>
</template>

<script setup>
    import { defineProps} from "vue";
    const props = defineProps({
        rsvpCount: [Number, String],
        isAttending: Boolean
    });
    console.log(props);
</script>