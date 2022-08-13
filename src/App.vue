<template>
  <div class="flex flex-row p-3">
    <div class="w-1/2 mr-2">
      <div>
        <div class="flex items-center justify-center font-moonBold">
          <h1>Attending</h1>
        </div>
        <RsvpStatus :rsvp-count="attending.length" :is-attending="true"></RsvpStatus>
      </div>
    </div>
    <div class="w-1/2 ml-2">
      <div class="flex items-center justify-center font-moonBold">
        <h1>Not Attending</h1>
      </div>
      <RsvpStatus  :rsvp-count="notAttending.length" :is-attending="false"></RsvpStatus>
    </div>
  </div>
</template>

<script>
import RsvpStatus from './components/RsvpStatus.vue'
import axios from 'axios'

export default {
  components: {
    RsvpStatus
  },
  mounted(){
    var attending;
    var notAttending;
    axios.get(process.env.VUE_APP_BASE_URL + 'Guests', {
      headers : {
        'X-API-Key': process.env.VUE_APP_API_KEY
      }
    })
    .then(response => {
      attending = response.data.filter(x=> x.isAttending)
      notAttending = response.data.filter(x=> !x.isAttending)
      console.log(attending)
      console.log(notAttending)
    });
  }
}
</script>