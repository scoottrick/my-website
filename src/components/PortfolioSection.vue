<script setup>
import ProjectView from './ProjectView.vue';
import projects from '../data/portfolio-data';
</script>

<template>
    <ul class="project-list">
        <li v-for="project in projects" :key="project.id" class="project-container">
            <ProjectView :project="project" />
        </li>
    </ul>
</template>

<style scoped>
.project-list {
    display: flex;
    flex-direction: column;
    gap: 8rem;
}
</style>
