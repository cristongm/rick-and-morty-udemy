<template>
  <div class="character">
    <img :src="character.image" :alt="character.name">
    <div class="character__info">
        <h3>{{ character.name }}</h3>
        <div class="status">
            <span
                :class="
                    character.status == 'Alive' ? 'alive' : 
                    character.status == 'Dead'">

            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['character'],
    
}
</script>

<style>

</style>