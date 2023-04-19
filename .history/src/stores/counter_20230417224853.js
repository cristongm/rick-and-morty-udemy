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

export const useCharacterStore = defineStore('characters', {
    state:() => ({
        characters: [],
        charactersFilter: []
    }),
    actions:{
        async getCharacters(){
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character')
                const data = await response.json()
                this.characters = data.results;
                this.charactersFilter = data.results
            } catch (error) {
                console.error(error)
            }
            
        }
    }
    
})