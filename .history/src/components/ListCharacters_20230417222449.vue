<template>
  <section>
    <div class="characters">
        <div class="characters__item">
            {{characters}}
        </div>
    </div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  </section>
</template>

<script>
import {useCharacterStore} from '@/stores/counter'
import { computed, onMounted } from 'vue'

export default {
    
    setup(){
        const {charactersFilter, getCharacters} = useCharacterStore()
        const characters = computed(() => {
            return charactersFilter.values
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