<script setup>
import ListCharacters from './components/ListCharacters.vue'
</script>

<template>
  <h1>Rick and Morty</h1>
  <ListCharacters />
</template>

<style lang="scss">
.character{
    background-color: var(--background-card);
    border-radius:20px;
}
</style>
