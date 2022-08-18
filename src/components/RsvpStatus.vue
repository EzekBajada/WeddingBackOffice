<template>
  <div class="flex items-center justify-center tablet:p-5 laptop:p-10 tablet:text-sm laptop:text-xl rounded-lg text-white font-moonBold"
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