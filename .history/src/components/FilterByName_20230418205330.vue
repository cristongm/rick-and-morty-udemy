<template>
    <div class="search">
        <input 
            type="text" 
            placeholder="Search by name"
            @keyup=""
        />
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.search{
    width: 400px;
    margin: 3rem auto 0;
    input{
        height: 53px;
        width:400px;
        border: none;
        border-radius: 10px;
        padding: 0 0.5rem;
    }
}
</style>