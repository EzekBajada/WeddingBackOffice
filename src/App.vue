<template>
  <div class="flex flex-row p-3">
    <div class="w-1/2 mr-2">
      <div>
        <div class="flex items-center justify-center font-moonBold">
          <h1>Attending</h1>
        </div>
        <rsvp-status :rsvp-count="attending" :is-attending="true"></rsvp-status>
      </div>
    </div>
    <div class="w-1/2 ml-2">
      <div class="flex items-center justify-center font-moonBold">
        <h1>Not Attending</h1>
      </div>
      <rsvp-status :rsvp-count="notAttending" :is-attending="false"></rsvp-status>
    </div>
  </div>
</template>

<script setup>
    import  axios  from 'axios'
    import { ref } from 'vue'
    import RsvpStatus from './components/RsvpStatus.vue';
    
    const attending = ref(0);
    const notAttending = ref(0);

    axios.get(process.env.VUE_APP_BASE_URL + 'Guests', {
      headers : {
        'X-API-Key': process.env.VUE_APP_API_KEY
      }
    })
    .then(response => {
      attending.value = response.data.filter(x=> x.isAttending).length;
      notAttending.value = response.data.filter(x=> !x.isAttending).length;
    });
</script>