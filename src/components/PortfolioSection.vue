<script setup>
import { defineProps } from 'vue';

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
                <li
                    v-for="(project, i) in section.projects"
                    :key="project.id"
                    :class="i % 2 !== 0 ? 'project reversed' : 'project'"
                >
                    <div class="thumb"><img :src="project.thumbnail" alt="" /></div>
                    <div class="details">
                        <div class="desc-container">
                            <h2>{{ project.name }}</h2>
                            <p>
                                {{ project.description }}
                            </p>
                            <p>
                                {{ project.myRole }}
                            </p>
                        </div>
                        <ul class="tech-list">
                            <li v-for="(tech, i) in project.techs" :key="i">
                                {{ tech }}
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>
    </main>
</template>

<style scoped>
main#portfolio {
    max-width: 1440px;
    margin: 0 auto;
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
    display: grid;

    /* max-width: 700px; */
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    gap: 48px;
}

.project-list h2,
.project-list p:not(:last-child) {
    margin-bottom: 1em;
}

.tech-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    gap: 1em;
    padding: 1em;
}

.tech-list li {
    flex: 1 1 auto;
    text-align: center;
    padding: 0.4em 0.8em;
    min-width: 80px;
    border-radius: 40px;
    border: 1px solid var(--lt-background);
}

.project {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-template-areas: 'thumb' 'details';
    gap: 24px;
}

.thumb {
    grid-area: thumb;
}

.thumb img {
    display: block;
    margin: 0 auto;
    width: 100%;
    /* height: 100%; */
    max-width: 400px;
    max-height: 400px;
    object-fit: contain;
}

.details {
    grid-area: details;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

@media screen and (min-width: 720px) {
    .project {
        grid-template-columns: auto 1fr;
        grid-template-areas: 'thumb details';
    }
    .project.reversed {
        grid-template-columns: 1fr auto;
        grid-template-areas: 'details thumb';
    }
}

@media screen and (min-width: 1280px) {
    .project-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
