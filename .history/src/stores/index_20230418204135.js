import { defineStore } from 'pinia'

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
                this.characters = data.results
                this.charactersFilter = data.results
            } catch (error) {
                console.error(error)
            }
            
        },
        FilterByStatus(status){
            const results = this.characters
        }
    }
    
})