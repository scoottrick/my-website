<script setup>
import ProjectView from './ProjectView.vue';

const props = defineProps({
    portfolio: { type: Object, required: true }
});
const portfolio = props.portfolio;
</script>

<template>
    <main id="portfolio">
        <section v-for="section in portfolio" :key="section.id">
            <h1>{{ section.title }}</h1>
            <ul class="project-list">
                <li v-for="project in section.projects" :key="project.id" class="project-container">
                    <ProjectView :project="project" />
                </li>
            </ul>
        </section>
    </main>
</template>

<style scoped>
main#portfolio {
    margin: 0 auto;
    padding-bottom: 20vh;
}
section:not(:last-child) {
    margin-bottom: 4em;
}
section h1 {
    line-height: 4;
}
section p {
    line-height: 1.2;
}
ul {
    padding: 0;
    list-style: none;
    margin: 0 auto;
}

.project-list {
    --direction: column;
    gap: 4rem;
    display: flex;
    flex-direction: var(--direction);
    flex-wrap: wrap;
}

.project-list h2,
.project-list p:not(:last-child) {
    margin-bottom: 1em;
}

@media screen and (min-width: 1680px) {
    .project-list {
        --direction: row;
    }
    .project-container {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 45%;
    }
}
</style>
