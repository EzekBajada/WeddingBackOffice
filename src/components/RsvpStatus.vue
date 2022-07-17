<template>
    <h1 class="pl-5 text-3xl font-bold underline">{{ msg }}</h1>
</template>

<script>
export default {
  props: {
    msg: String,
    count: Number
  }
}
</script>