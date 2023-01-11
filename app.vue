<script setup lang="ts">
import { names, Gender, Popularity, Length, OptionsInterface, OptionCategories } from "./data";
const options = reactive<OptionsInterface>({
  gender: Gender.BOY,
  popularity: Popularity.TRENDY,
  length: Length.ALL,
});

const selectedNames = ref<string[]>([]);

const computeSelectedNames = () => {
  const filterdNames = names
    .filter((name) => name.gender === options.gender)
    .filter((name) => name.popularity === options.popularity)
    .filter((name) => {
      if (options.length === Length.ALL) return true;
      else return name.length === options.length;
    });
  console.log(filterdNames);
  selectedNames.value = filterdNames.map((name) => name.name);
};

const optionsArray = [
  {
    title: "1) Choose a gender",
    category: OptionCategories.GENDER,
    buttons: [Gender.GIRL, Gender.UNISEX, Gender.BOY],
  },
  {
    title: "2) Choose the name's popularity",
    category: OptionCategories.POPULARITY,
    buttons: [Popularity.TRENDY, Popularity.UNIQUE],
  },
  {
    title: "3) Choose the name's length",
    category: OptionCategories.LENGTH,
    buttons: [Length.ALL, Length.SHORT, Length.LONG],
  },
];
</script>

<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose Your options and click to "Find Names" below</p>
    <div class="options-container">
      <Option
        v-for="option in optionsArray"
        :key="option.title"
        :option="option"
        :options="options"
      />
      <button @click="computeSelectedNames()" class="primary">
        Find Names
      </button>
      <div class="card-containers">
        <CardName v-for="(name, index) in selectedNames" :key="index" :card="name"/>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: 3rem;
  }

  .options-container {
    background-color: rgb(255, 238, 236);
    border-radius: 2rem;
    padding: 1rem;
    width: 95%;
    margin: 0 auto;
    margin-top: 4rem;
    position: relative;
  }
  

  .primary {
    background: rgb(249, 87, 89);
    color: #fff;
    border-radius: 6.5rem;
    border: none;
    padding: 0.75rem 4rem;
    font-size: 1rem;
    margin-top: 1rem;
    cursor: pointer;
  }
  .card-containers {
    display: flex;
    margin-top: 2rem;
    justify-content: center;
    gap: 10px;
  }
}
</style>