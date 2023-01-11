<script lang="ts" setup>
interface CardNameInterface {
    card: string
}
const props = defineProps<CardNameInterface>()
</script>

<template>
    <div  class="card">
        <p>{{ card }}</p>
    </div>
</template>

<style scoped lang="scss">

.card {
      background: rgb(27, 60, 138);
      color: #fff;
      border-radius: 1rem;
      padding: 0.8rem 2rem;
      margin-bottom: 1rem;
      p {
        margin: 0;
      }
}

</style>