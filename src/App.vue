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
  <div class="flex flex-col p-3">
      <h1 class="flex items-center justify-center font-moonBold">
        Total Guests
      </h1>
      <rsvp-status :rsvp-count="numberOfGuests" :is-attending="true" :is-number-of-guests="true">
      </rsvp-status>
  </div>
  <div class="flex flex-row p-3 items-center justify-center font-moonBold">
    <button class="p-2 rounded-lg mr-3" @click="triggerFilter(true)" :class="{'bg-green-400' : isAttendingFilterProp != null && isAttendingFilterProp}">Attending</button>
    <button class="p-2 rounded-lg mr-3" @click="triggerFilter(false)" :class="{'bg-red-400' : isAttendingFilterProp != null && !isAttendingFilterProp}">Not attending</button>
    <button class="p-2 rounded-lg mr-3" @click="triggerFilter(true, true)">Clear Filters</button>
  </div>
  <div class="flex flex-col items-center justify-center py-3 px-10">
    <rsvp-entry class="my-3" v-for="guest in guests" :key="guest" v-bind="guest"></rsvp-entry>
  </div>
</template>

<script setup>
    import axios from 'axios'
    import { ref } from 'vue'
    import RsvpStatus from './components/RsvpStatus.vue';
    import RsvpEntry from './components/RsvpEntry.vue';
    
    const originalResponse = ref();
    const isAttendingFilterProp = ref(null);
    const attending = ref(0);
    const notAttending = ref(0);
    const numberOfGuests = ref(0);
    const guests = ref();

    axios.get(process.env.VUE_APP_BASE_URL + 'Guests', {
      headers : {
        'X-API-Key': process.env.VUE_APP_API_KEY
      }
    }).then(response => {
      originalResponse.value = response;
      guests.value = response.data;
      attending.value = response.data.filter(x=> x.isAttending).length;
      notAttending.value = response.data.filter(x=> !x.isAttending).length;
      numberOfGuests.value = response.data.reduce((a,b) => {
        return a + b.numberOfGuests
      }, 0);
    });

    function triggerFilter(isAttendingFilter, clearAll){
      isAttendingFilterProp.value = isAttendingFilter;
      if(isAttendingFilter && !clearAll) {
        guests.value = originalResponse.value.data.filter(x=> x.isAttending)
      } else if (!isAttendingFilter){
        guests.value = originalResponse.value.data.filter(x=> !x.isAttending)
      } else if (clearAll) {
        isAttendingFilterProp.value = null
        guests.value = originalResponse.value.data
      }
    }
</script>