<template>
  <section>
    <div class="characters">
        <div v-if="characters.length > 0">No hay datos</div>
        <div v-else>
            
        </div>
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
            return charactersFilter
        })
        onMounted(() => {
            getCharacters();
            
        })
        return {characters}
    }
}
</script>

<style>

</style>