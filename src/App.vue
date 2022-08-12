<template>
  <div class="flex flex-row p-3">
    <div class="w-1/2 mr-2">
      <div>
        <div class="flex items-center justify-center font-moonBold">
          <h1>Attending</h1>
        </div>
        <RsvpStatus rsvp-count="10" :is-attending="true"></RsvpStatus>
      </div>
    </div>
    <div class="w-1/2 ml-2">
      <div class="flex items-center justify-center font-moonBold">
        <h1>Not Attending</h1>
      </div>
      <RsvpStatus  rsvp-count="20" :is-attending="false"></RsvpStatus>
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
  created(){
    var guests;

    axios.get(process.env.VUE_APP_BASE_URL + 'Guests', {
      headers : {
        'X-API-Key': process.env.VUE_APP_API_KEY
      }
    })
    .then(response => {
      guests = response;
      console.log(response)
      console.log(guests)
    });
  }
}
</script>