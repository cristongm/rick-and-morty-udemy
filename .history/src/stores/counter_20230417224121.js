import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCharacterStore = defineStore('characters', () =>{
    const characters = []
    const charactersFilter = []
    async function getCharacters(){
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            characters.values = data.results;
            charactersFilter.values = data.results
        } catch (error) {
            console.error(error)
        }
        
    }
        return {characters, charactersFilter, getCharacters}    
})