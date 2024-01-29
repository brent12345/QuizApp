<script setup>
import Question from "@/components/Question.vue"
import QuizHeader from "@/components/QuizHeader.vue"
import Results from "@/components/Results.vue"
import { ref, watch, computed } from "vue"
import { useRoute } from "vue-router"
import quizes from '@/data/quizes.json'

const route = useRoute()

const quizId = parseInt(route.params.id)

const quiz = quizes.find(q => q.id === quizId)

const currentQuestionIndex = ref(0)
const numbeOfCorrectAnswers = ref(0)
const showResults = ref(false)

// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)

// watch(() => currentQuestionIndex.value, () => {
//     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
// })

const questionStatus = computed(() => {
    return `${currentQuestionIndex.value}/${quiz.questions.length}`
})
const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`)

const onOptionSelected = (isCorrect) => {
     if (isCorrect) {
        numbeOfCorrectAnswers.value++
     }

     if (quiz.questions.length -1 === currentQuestionIndex.value) {
        showResults.value = true
     }

     currentQuestionIndex.value++
}

</script>
<template lang="">
<div>

        <QuizHeader :questionStatus = "questionStatus" :barPercentage="barPercentage" />
    <div>
        <Question v-if="!showResults":question="quiz.questions[currentQuestionIndex]" @selectOption="onOptionSelected" />
        <Results v-else :quizQuestionlength = "quiz.questions.length" :numbeOfCorrectAnswers ="numbeOfCorrectAnswers"/>
    </div>
    <!-- <button @click="currentQuestionIndex++">Next Question</button> -->
</div>
</template>

<style scoped>

</style>
