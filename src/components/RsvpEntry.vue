<template>
  <div
    class="flex flex-row tablet:w-full laptop:w-1/2 items-center justify-center bg-gray-800 tablet:text-xxs laptop:text-lg font-moonBold p-3 rounded-lg"
    :class="classes"
  >
    <div>{{ props.firstName }} {{ props.familyName }}</div>
    <div
      class="rounded-lg tablet:ml-2 laptop:ml-10 p-1 bg-stone-600 text-white"
    >
      {{ props.numberOfGuests }}
    </div>

    <div
      class="rounded-lg tablet:ml-2 laptop:ml-10 p-1 text-white"
      :class="{ 'text-green-500': foodToleranceDto.vegetarian }"
    >
      <font-awesome-icon icon="leaf" />
    </div>
    <div
      class="rounded-lg tablet:ml-2 laptop:ml-10 p-1 text-white"
      :class="{ 'text-green-500': foodToleranceDto.vegan }"
    >
      <font-awesome-icon icon="egg" />
    </div>
    <div
      class="rounded-lg tablet:ml-2 laptop:ml-10 p-1 text-white"
      :class="{ 'text-green-500': foodToleranceDto.gluten }"
    >
      <font-awesome-icon icon="bread-slice" />
    </div>
    <div
      class="rounded-lg tablet:ml-2 laptop:ml-10 p-1 text-white"
      :class="{ 'text-green-500': foodToleranceDto.lactose }"
    >
      <font-awesome-icon icon="cow" />
    </div>
    <div
      class="rounded-lg tablet:ml-2 laptop:ml-10 p-1 text-white"
      :class="{ 'text-green-500': foodToleranceDto.peanutAllergy }"
    >
      <font-awesome-icon icon="lemon" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";

onMounted(() => {
  console.log(props);
});
const props = defineProps({
  firstName: String,
  familyName: Number,
  isAttending: Number,
  numberOfGuests: Number,
  lastUpdated: Date,
  foodToleranceDto: Object,
});
const classes = ref({
  "text-green-500": props.isAttending,
  "text-red-500": !props.isAttending,
});
</script>
