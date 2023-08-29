<script lang="ts" setup>
const props = defineProps({
  videoID: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <iframe
    :src="`https://player.vimeo.com/video/${props.videoID}`"
    width="100%"
    height="100%"
    frameborder="0"
    title="{video_title}"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
  ></iframe>
</template>

<style scoped></style>
