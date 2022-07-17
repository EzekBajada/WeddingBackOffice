<template>
<div class="flex flex-row h-screen">
    <div class="rounded-lg bg-green-500 h-1/2 w-1/2">
      {{count}}
    </div>

    <div class="rounded-lg bg-red-500 h-1/2 w-1/2">
      {{count}}
    </div>
</div>
</template>

<script>


export default {
  data() {
    return {
      rsvp: {
        count: 1,
        isAttending: 'My Journey with Vue'
      }
    }
  },
  created () {
    if(!this.count || this.count == 0) {
      this.count = 2;
      this.isAttending = false;
      console.log('We have a problem')
    }
  }
}
</script>