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
        filterByStatus(status){
            const results = this.characters.filter(character => character.status.includes(status))
            this.charactersFilter = results
        },
        filterByName(name){
            const formantName = name.toLowerCase()
        }
    }
    
})