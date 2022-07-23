<template>
  <RsvpStatus rsvp-count="10" :is-attending="true"></RsvpStatus>
</template>

<script>
import RsvpStatus from './components/RsvpStatus.vue'

export default {
  components: {
    RsvpStatus
  }
}
</script>