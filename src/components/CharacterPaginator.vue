<template>
    <div>
        <div>
            <span>Total: {{ info.count }}</span>
        </div>
        <ul class="pagination">
            <li><a href="#" v-if="currentPage > 1" @click="changePage(info.prev)">«</a></li> 
            <li v-for="n in currentPage" :key="n">
                <a v-if="n < currentPage" href="#" @click.prevent="changePage(`https://rickandmortyapi.com/api/character?page=${n}`)">{{ n }}</a>
            </li>
            <li>
                <a class="active" href="#">{{currentPage}}</a>
            </li>
            <li v-for="j in info.pages" :key="j">
                <a v-if="j > currentPage && j <= info.pages" href="#" @click.prevent="changePage(`https://rickandmortyapi.com/api/character?page=${j}`)">{{ j }}</a>
            </li>         
            <li><a href="#" v-if="currentPage < info.pages" @click.prevent="changePage(info.next)">»</a></li>
        </ul>
    </div>
</template>

<script>
import {useCharacterStore} from '@/stores/'
import {computed} from 'vue'
export default {
    setup(){
        const store = useCharacterStore();
        const info = computed(() => store.info)
        const currentPage = computed(() => store.currentPage)
        const changePage = (url) => {
            store.getCharacters(url)
        }
        return {info, currentPage, changePage};
    }
}
</script>

<style>
ul.pagination {
    display: inline-block;
    padding: 0;
    margin: 0;
}

ul.pagination li {display: inline;}

ul.pagination li a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
    background-color:#ddd;
}

ul.pagination li a.active {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
}

ul.pagination li a:hover:not(.active) {background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;}
</style>