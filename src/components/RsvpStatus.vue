<template>
  <div class="flex items-center justify-center p-10 rounded-lg text-lg text-white font-moonBold"
      :class="classes">
    {{ props.rsvpCount }}
  </div>
</template>

<script setup>
  import { defineProps} from "vue";
  const classes = {
    'bg-purple-500': props.isNumberOfGuests,
    'bg-green-500': props.isAttending && !props.isNumberOfGuests, 
    'bg-red-500': !props.isAttending
  }
  
  const props = defineProps({
    rsvpCount: [Number, String],
    isAttending: Boolean,
    isNumberOfGuests: Boolean
  });

</script>