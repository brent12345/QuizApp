<script setup>
    import { defineProps } from 'vue';

    const {questionStatus, barPercentage} = defineProps(["questionStatus", "barPercentage"])

</script>
<template lang="">

    <header>
        <h3>{{questionStatus}}</h3>
            <div class="bar">
                <div class="completion" :style="{width: barPercentage}"></div>
            </div>
        </header>
    
</template>

<style scoped>
header {
    margin: 20px 0 0 0;
}

header h4 {
    font-size: 30px;
}

.bar {
    width: 300px;
    height: 50px;
    border: 3px solid bisque;
}

.completion {
    height: 100%;
    width: 0%;
    background-color: bisque;
}

</style>