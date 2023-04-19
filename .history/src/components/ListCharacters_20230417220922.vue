<template>
  <section>
    <div class="characters">
        <div class="characters__item">
            <h2>Characters</h2>
        </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import {use} 
export default {
    setup(){
        onMounted(() => {
            this.$store
        })
    }
}
</script>

<style>

</style>