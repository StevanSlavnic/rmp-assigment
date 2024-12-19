<script>
export default {
  name: 'EntityContent',
  props: {
    name: {
      type: String, // The title should be a string
      required: true, // Make it mandatory
    },
    sprites: {
      type: Object, // The description should also be a string
      required: false, // Optional prop
    },

  },
}
</script>

<template>
  <div class="content">
    <h1>{{ name }}</h1>
    <!-- <img :src="sprites.front_default" :alt="name"> -->
  </div>
</template>
