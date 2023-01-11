
<script setup lang="ts">
import { Gender, Length, Popularity, OptionCategories } from "@/data";



interface OptionProps {
    option: {
        title: string,
        category: OptionCategories, 
        buttons: Gender[] | Length[] | Popularity[]
    },
    options: {
        gender: Gender,
        popularity: Popularity;
        length: Length
    }
}

const props = defineProps<OptionProps>();

const selectButton = (value: Gender | Length | Popularity) => {
        if(props.option.category === 'popularity')
            props.options.popularity = <Popularity>value;
        else if (props.option.category === 'length')
            props.options.length = <Length>value;
        else if (props.option.category === 'gender')
            props.options.gender = <Gender>value;
}

const computeOptionClasses = (value: Gender | Length | Popularity, index: number): string => {
    const classNames: string[] = [];
    if(props.options[props.option.category] === value) {
        classNames.push('option-active');
    }

    if(index === 0) classNames.push('option-left');
    if(index === props.option.buttons.length - 1) classNames.push('option-right');
    return classNames.join(" ");
}

</script>
<template>
     <div class="option-container">
        <h4> {{  option.title  }} </h4>
        <div class="option-buttons">
          <button
            v-for="(value,index) in option.buttons"
            :key="index"
            class="option"
            @click="selectButton(value)"
            :class="computeOptionClasses(value, index)"
          >
            {{ value }}
          </button>
        </div>
      </div>
</template>

<style lang="scss" scoped>
.option-container {
    margin-bottom: 2rem;
  }

  .option {
    background-color: white;
    outline: 0.15rem solid rgb(249, 87, 89);
    border: none;
    padding: 0.75rem;
    width: 12rem;
    font-size: 1rem;
    color: rgb(27, 60, 138);
    cursor: pointer;
    font-weight: 200;

    &.option-left {
      border-radius: 1rem 0 0 1rem;
    }

    &.option-right {
      border-radius: 0 1rem 1rem 0;
    }

    &.option-active {
      background: rgb(249, 87, 89);
      color: #fff;
    }
  }
</style>