<template>
  <div class="character">
    <img :src="character.image" :alt="character.name">
    <div class="character__info">
        <h3>{{ character.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
    props:['character'],
    created()
}
</script>

<style>

</style>