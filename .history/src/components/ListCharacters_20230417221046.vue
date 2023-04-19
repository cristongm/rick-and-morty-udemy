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

export default {
    setup(){
        const {} = useCharacterStore()
        onMounted(() => {
            this.$store.dispatch('')
        })
    }
}
</script>

<style>

</style>