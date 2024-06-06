<script setup>
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
                <li v-for="project in section.projects" :key="project.id" class="project">
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
                                <a v-if="tech.url" :href="tech.url" target="_blank"
                                    ><img
                                        :src="`logos/${tech.logo}`"
                                        :alt="tech.text"
                                        :title="tech.text"
                                /></a>
                                <img
                                    v-else
                                    :src="`logos/${tech.logo}`"
                                    :alt="tech.text"
                                    :title="tech.text"
                                />
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
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    gap: 48px;
}

.project-list h2,
.project-list p:not(:last-child) {
    margin-bottom: 1em;
}

.tech-list {
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    padding: 1em 0;
}

.tech-list img {
    --size: 40px;
    width: var(--size);
    height: var(--size);
}

.project {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-template-areas: 'thumb' 'details';
    gap: 2em;
}

.thumb {
    grid-area: thumb;
}

.thumb img {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
    max-height: 400px;
    object-fit: contain;
    border-radius: 4px;
}

.details {
    grid-area: details;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
}

@media screen and (min-width: 720px) {
    .project {
        grid-template-columns: auto 1fr;
        grid-template-areas: 'thumb details';
    }
    .details {
        flex-direction: column;
    }
    .tech-list {
        padding: 1em 0 0;
        gap: 2em;
        justify-content: start;
    }
}

@media screen and (min-width: 1440px) {
    .project-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
