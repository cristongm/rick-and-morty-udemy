<template>
  <section>
    <div class="characters">
        <div class="characters__item">
            <h2>Characters</h2>
        </div>
    </div>
  </section>
</template>

<script>
import {useCharacterStore} from '@/stores/counter'
import { onMounted } from 'vue'

export default {
    
    setup(){
        const {setCharacters} = useCharacterStore()
        const characters = computed(())
        onMounted(() => {
            setCharacters();
        })
    }
}
</script>

<style>

</style>