<template>
  <div class="flex flex-row p-3">
    <div class="w-1/2 mr-2">
      <div>
        <div class="flex items-center justify-center font-moonBold">
          <h1>Attending</h1>
        </div>
        <RsvpStatus :rsvp-count="result.attending" :is-attending="true"></RsvpStatus>
      </div>
    </div>
    <div class="w-1/2 ml-2">
      <div class="flex items-center justify-center font-moonBold">
        <h1>Not Attending</h1>
      </div>
      <RsvpStatus :rsvp-count="result.notAttending" :is-attending="false"></RsvpStatus>
    </div>
  </div>
</template>

<script setup>
import RsvpStatus from './components/RsvpStatus.vue'
import axios from 'axios'

    var result = {
      attending: 0,
      notAttending: 0
    }

    axios.get(process.env.VUE_APP_BASE_URL + 'Guests', {
      headers : {
        'X-API-Key': process.env.VUE_APP_API_KEY
      }
    })
    .then(response => {
      result.attending = Number.parseInt(response.data.filter(x=> x.isAttending).length);
      result.notAttending = Number.parseInt(response.data.filter(x=> !x.isAttending).length);
    });
</script>