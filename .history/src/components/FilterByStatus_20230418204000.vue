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
    border-radius: 10px;
    overflow: hidden;
    .item{
        padding: 1rem 0.5rem;
        background-color: var(--background-card)
    }
}
</style>