<template>
  <section>
    <div class="characters">
        <div class="characters__item" v-for="character in characters" :key="character.id">
            <CardCharacter :character="character"/>
        </div>
    </div>
  </section>
</template>

<script setup>
import {useCharacterStore} from '@/stores/'
import { computed, onMounted } from 'vue'
import CardCharacter from './CardCharacter.vue'

const store = useCharacterStore()
const characters = computed(() => {
    return store.charactersFilter
})
onMounted(() => {
    store.getCharacters();
    
})


</script>

<style>
.characters{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 3rem 0;
}
</style>