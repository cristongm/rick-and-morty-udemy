import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('characters', {
    state:() => ({
        info: {},
        characters: [],
        charactersFilter: [],
        currentPage: 1
    }),
    actions:{
        async getCharacters(url = null){

            try {
                let response;
                if(url != null){
                    response = await fetch(url)
                    const urlData = new URL(url);
                    this.currentPage = Number(urlData.search.split("=")[1]);
                }else{
                    response = await fetch('https://rickandmortyapi.com/api/character')
                    this.currentPage = 1
                }
                const data = await response.json()
                this.info = data.info
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
            const formatName = name.toLowerCase()
            const results = this.characters.filter(character => {
                const characterName = character.name.toLowerCase()
                if(characterName.includes(formatName)){
                    return character
                }
            })
            this.charactersFilter = results
        }
    }
    
})