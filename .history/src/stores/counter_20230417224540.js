import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useCharacterStore = defineStore('characters', () =>{
    const characters = []
    const charactersFilter = []
    async function getCharacters(){
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            characters = data.results;
            charactersFilter.value = data.results
        } catch (error) {
            console.error(error)
        }
        
    }
    return {characters, charactersFilter, getCharacters}    
})