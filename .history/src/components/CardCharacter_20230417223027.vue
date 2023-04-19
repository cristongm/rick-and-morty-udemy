<template>
  <div class="character">
    <img :src="character.image" :alt="character.name">
    <div class="character__info">
        <h3></h3>{{ character.name }}
    </div>
  </div>
</template>

<script>
export default {
    prop:['character']
}
</script>

<style>

</style>