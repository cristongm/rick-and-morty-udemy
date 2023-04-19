<template>
  <div class="character">
    <img :src="character.image">
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