<template>
  <section>
    <div class="characters">
        <div class="characters__item" v-for="character in characters" :key="character.id">
            <CardCharacter :character="character"/>
        </div>
    </div>
  </section>
</template>

<script>
import {useCharacterStore} from '@/stores/counter'
import { computed, onMounted } from 'vue'
import CardCharacter from './CardCharacter.vue'
export default {
    components:{
        CardCharacter
    },
    setup(){
        const {charactersFilter, getCharacters} = useCharacterStore()
        const characters = computed(() => {
            return charactersFilter.value
        })
        onMounted(() => {
            getCharacters();
            console.log(characters)
        })
        return {characters}
    }
}
</script>

<style>

</style>