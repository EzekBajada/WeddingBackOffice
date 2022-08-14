<template>
  <div class="flex items-center justify-center p-10 rounded-lg text-lg text-white font-moonBold"
      :class="{'bg-green-500': props.isAttending, 'bg-red-500': !props.isAttending}">
    {{ props.rsvpCount }}
  </div>
</template>

<script setup>
  import { defineProps} from "vue";
  const props = defineProps({
    rsvpCount: [Number, String],
    isAttending: Boolean
  });

</script>