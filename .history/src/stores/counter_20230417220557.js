import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useCharacterStore = defineStore('characters', () =>{
    const characters = []
    const charactersFilter = []
    async function setCharacters(){
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            console.log(response)
            characters.values = response.json();
        } catch (error) {
            console.error(error)
        }
        
    }
    function setCharactersFilter(payload){
        charactersFilter.values = payload
    }
    return {characters, charactersFilter, setCharacters, setCharactersFilter}    
})