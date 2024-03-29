<template>
  <div class="flex flex-row p-3">
    <div class="w-1/2 mr-2">
      <div>
        <div
          class="flex items-center justify-center font-moonBold tablet:text-sm laptop:text-xl"
        >
          <h1>Attending</h1>
        </div>
        <rsvp-status :rsvp-count="attending" :is-attending="true"></rsvp-status>
      </div>
    </div>
    <div class="w-1/2 ml-2">
      <div
        class="flex items-center justify-center font-moonBold tablet:text-sm laptop:text-xl"
      >
        <h1>Not Attending</h1>
      </div>
      <rsvp-status
        :rsvp-count="notAttending"
        :is-attending="false"
      ></rsvp-status>
    </div>
  </div>

  <div class="flex flex-row p-3">
    <div class="w-[20%] mr-2">
      <div>
        <div
          class="flex items-center justify-center font-moonBold tablet:text-sm laptop:text-xl"
        >
          <h1>Vegetarian</h1>
        </div>
        <rsvp-status
          :rsvp-count="totalVegetarians"
          :is-attending="true"
          :is-number-of-guests="true"
        ></rsvp-status>
      </div>
    </div>
    <div class="w-[20%] mr-2">
      <div>
        <div
          class="flex items-center justify-center font-moonBold tablet:text-sm laptop:text-xl"
        >
          <h1>Vegans</h1>
        </div>
        <rsvp-status
          :rsvp-count="totalVegans"
          :is-attending="true"
          :is-number-of-guests="true"
        ></rsvp-status>
      </div>
    </div>
    <div class="w-[20%] mr-2">
      <div>
        <div
          class="flex items-center justify-center font-moonBold tablet:text-sm laptop:text-xl"
        >
          <h1>Gluten</h1>
        </div>
        <rsvp-status
          :rsvp-count="totalGluten"
          :is-attending="true"
          :is-number-of-guests="true"
        ></rsvp-status>
      </div>
    </div>
    <div class="w-[20%] mr-2">
      <div>
        <div
          class="flex items-center justify-center font-moonBold tablet:text-sm laptop:text-xl"
        >
          <h1>Lactose</h1>
        </div>
        <rsvp-status
          :rsvp-count="totalLactose"
          :is-attending="true"
          :is-number-of-guests="true"
        ></rsvp-status>
      </div>
    </div>
    <div class="w-[20%] mr-2">
      <div>
        <div
          class="flex items-center justify-center font-moonBold tablet:text-sm laptop:text-xl"
        >
          <h1>Peanut Allergy</h1>
        </div>
        <rsvp-status
          :rsvp-count="totalPeanut"
          :is-attending="true"
          :is-number-of-guests="true"
        ></rsvp-status>
      </div>
    </div>
  </div>

  <div class="flex flex-col p-3 items-center justify-center">
    <h1
      class="flex items-center justify-center font-moonBold tablet:text-sm laptop:text-xl"
    >
      Total Guests
    </h1>
    <rsvp-status
      class="w-[20%]"
      :rsvp-count="numberOfGuests"
      :is-attending="true"
      :is-number-of-guests="true"
    >
    </rsvp-status>
  </div>
  <div
    class="flex flex-row p-3 items-center justify-center font-moonBold tablet:text-sm laptop:text-xl"
  >
    <button
      class="p-2 rounded-lg mr-3"
      @click="triggerFilter(true)"
      :class="{
        'bg-green-400': isAttendingFilterProp != null && isAttendingFilterProp,
      }"
    >
      Attending
    </button>
    <button
      class="p-2 rounded-lg mr-3"
      @click="triggerFilter(false)"
      :class="{
        'bg-red-400': isAttendingFilterProp != null && !isAttendingFilterProp,
      }"
    >
      Not attending
    </button>
    <button class="p-2 rounded-lg mr-3" @click="triggerFilter(true, true)">
      Clear Filters
    </button>
  </div>
  <div
    class="flex flex-col items-center justify-center py-3 laptop:px-10 tablet:px-2"
  >
    <rsvp-entry
      class="my-3"
      v-for="guest in guests"
      :key="guest"
      v-bind="guest"
      @guest-deleted="getGuests()"
    ></rsvp-entry>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import RsvpStatus from "./components/RsvpStatus.vue";
import RsvpEntry from "./components/RsvpEntry.vue";

const originalResponse = ref();
const isAttendingFilterProp = ref(null);
const attending = ref(0);
const notAttending = ref(0);
const numberOfGuests = ref(0);
const totalVegetarians = ref(0);
const totalVegans = ref(0);
const totalGluten = ref(0);
const totalLactose = ref(0);
const totalPeanut = ref(0);
const guests = ref();

function getGuests() {
  axios.get(process.env.VUE_APP_BASE_URL + "guests").then((response) => {
    originalResponse.value = response;
    guests.value = response.data;
    console.log(guests.value);

    attending.value = response.data.filter((x) => x.isAttending).length;
    notAttending.value = response.data.filter((x) => !x.isAttending).length;
    numberOfGuests.value = response.data.reduce((a, b) => {
      return a + b.numberOfGuests;
    }, 0);
    console.log(response.data.filter((x) => x.foodToleranceDto.vegeterian));
    totalVegetarians.value = response.data.filter(
      (x) => x.foodToleranceDto.vegetarian
    ).length;
    totalVegans.value = response.data.filter(
      (x) => x.foodToleranceDto.vegan
    ).length;
    totalGluten.value = response.data.filter(
      (x) => x.foodToleranceDto.gluten
    ).length;
    totalLactose.value = response.data.filter(
      (x) => x.foodToleranceDto.lactose
    ).length;
    totalPeanut.value = response.data.filter(
      (x) => x.foodToleranceDto.peanutAllergy
    ).length;
  });
}

function triggerFilter(isAttendingFilter, clearAll) {
  isAttendingFilterProp.value = isAttendingFilter;
  if (isAttendingFilter && !clearAll) {
    guests.value = originalResponse.value.data.filter((x) => x.isAttending);
  } else if (!isAttendingFilter) {
    guests.value = originalResponse.value.data.filter((x) => !x.isAttending);
  } else if (clearAll) {
    isAttendingFilterProp.value = null;
    guests.value = originalResponse.value.data;
  }
}

// On created
getGuests();
</script>
