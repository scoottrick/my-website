<script setup>
import ImageViewer from './ImageViewer.vue';
const { project } = defineProps({
    project: { type: Object, required: true }
});
</script>
<template>
    <h2 class="mono">{{ project.name }}</h2>
    <div class="project">
        <div class="thumb"><ImageViewer :cover="project.thumbnail" :images="project.images" /></div>
        <div class="details">
            <p>
                {{ project.description }}
            </p>
            <div class="roles">
                <h3>My Roles</h3>
                <p>
                    {{ project.role }}
                </p>
            </div>
            <div class="techs">
                <h3>Built With</h3>
                <ul>
                    <li v-for="(tech, i) in project.techs" :key="i">
                        <a v-if="tech.url" :href="tech.url" target="_blank"
                            ><img :src="tech.logo" :alt="tech.text" :title="tech.text"
                        /></a>
                        <img v-else :src="tech.logo" :alt="tech.text" :title="tech.text" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
h2 {
    padding-bottom: 1em;
}
h3 {
    color: var(--color-text-faded);
    padding-bottom: 0.5rem;
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
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    object-fit: cover;
    border-radius: 4px;
}

.details {
    grid-area: details;
    display: flex;
    flex-direction: column-reverse;
    justify-content: start;
    gap: 2rem;
}

.roles {
    flex-grow: 1;
}

.techs ul {
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    gap: 1em;
    list-style: none;
}

.techs img {
    --size: 40px;
    width: var(--size);
    height: var(--size);
}

@media screen and (min-width: 720px) {
    .project {
        grid-template-columns: auto 1fr;
        grid-template-areas: 'thumb details';
    }
    .details {
        flex-direction: column;
    }
    .techs ul {
        gap: 2rem;
    }
}
</style>
