<script setup>
import { defineProps } from 'vue'
import {RouterLink} from 'vue-router'

const { numbeOfCorrectAnswers, quizQuestionlength } = defineProps(["numbeOfCorrectAnswers", "quizQuestionlength"])

const numberOfCorrectAnswersNew = numbeOfCorrectAnswers
const quizQuestionLengthNew = quizQuestionlength
// console.log(numberOfCorrectAnswersNew)
// console.log(quizQuestionLengthNew)
</script>

<template>
   <div class="results">
    <p>Your Results...</p>
    <h1>{{numberOfCorrectAnswersNew}}/{{ quizQuestionLengthNew }}</h1>
    <RouterLink to="/">Go To Main Page</RouterLink>
   </div>
</template>



<style>
 .results {
    text-align: center;
    padding: 100px;
 }

 p {
    font-size: 25px;
 }

 h1 {
    font-size: 80px;
 }
</style>