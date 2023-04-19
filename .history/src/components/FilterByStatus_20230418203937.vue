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
export default {

}
</script>

<style lang="scss">
.filter{
    width: 400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    
}
</style>