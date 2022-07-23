<template>
  <div class=" p-10 rounded-lg text-lg text-white"
       :class="props.isAttending ? 'bg-green-500' : 'bg-red-500'" >
    {{ props.rsvpCount }}
  </div>
</template>

<script setup>
  import { defineProps} from "vue";

  const props = defineProps({
    rsvpCount: Number,
    isAttending: Boolean
  });  

</script>