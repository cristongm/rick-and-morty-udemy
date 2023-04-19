<template>
    <div class="filter">
        <div class="item">
            All
        </div>
        <div class="item">
            Alive
        </div>
        <div class="item">
            Dead
        </div>
        <div class="item">
            Unknown
        </div>
    </div>
</template>

<script>
import {useSto}
export default {
    setup(){
        const store = useStore()
    }
}
</script>

<style lang="scss">
.filter{
    width: 400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-radius: 10px;
    overflow: hidden;
    .item{
        padding: 1rem 0.5rem;
        background-color: var(--background-card);
        text-align: center;
        cursor: pointer;
        &:hover{
            color: var(--text-orange);
        }
    }
}
</style>