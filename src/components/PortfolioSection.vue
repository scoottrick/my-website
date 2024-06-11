<script setup>
import ProjectView from './ProjectView.vue';

const props = defineProps({
    portfolio: { type: Object, required: true }
});
const portfolio = props.portfolio;
</script>

<template>
    <div class="portfolio">
        <section v-for="section in portfolio" :key="section.id">
            <ul class="project-list">
                <li v-for="project in section.projects" :key="project.id" class="project-container">
                    <ProjectView :project="project" />
                </li>
            </ul>
        </section>
    </div>
</template>

<style scoped>
.portfolio {
    margin: 0 auto;
    padding-bottom: 20vh;
}
section:not(:last-child) {
    margin-bottom: 8rem;
}
.project-list {
    display: flex;
    flex-direction: column;
    gap: 8rem;
}
</style>
