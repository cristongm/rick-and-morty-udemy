<template>
  <div class="character">
    <img :src="character.image" :alt="character.name">
    <div class="character__info">
        {{ character.name }}
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