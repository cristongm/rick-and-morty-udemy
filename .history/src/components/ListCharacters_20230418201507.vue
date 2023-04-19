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
import {useCharacterStore} from '@/stores/characters'
import { computed, onMounted } from 'vue'
import CardCharacter from './CardCharacter.vue'
export default {
    components:{
        CardCharacter
    },
    setup(){
        const store = useCharacterStore()
        const characters = computed(() => {
            return store.charactersFilter
        })
        onMounted(() => {
            store.getCharacters();
            
        })
        return {characters}
    }
}
</script>

<style>

</style>