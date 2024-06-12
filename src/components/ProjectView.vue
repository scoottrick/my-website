<script setup>
import ImageViewer from './ImageViewer.vue';
const { project } = defineProps({
    project: { type: Object, required: true }
});
</script>
<template>
    <div class="heading">
        <h1 class="mono">{{ project.name }}</h1>
        <h2 class="mono" v-if="project.group">{{ project.group }}</h2>
    </div>
    <div class="project">
        <div class="thumb"><ImageViewer :cover="project.thumbnail" :images="project.images" /></div>
        <div class="details">
            <p>
                {{ project.description }}
                <span v-if="project.link">
                    You can check it out <a :href="project.link" target="_blank">here</a>.</span
                >
            </p>
            <div class="roles">
                <h3>My Roles</h3>
                <ul v-if="project.roles.length">
                    <li v-for="(role, i) in project.roles" :key="i">
                        {{ role }}
                    </li>
                </ul>
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
div.heading {
    padding-bottom: 2rem;
}
div.heading :not(:last-child) {
    margin-bottom: 1rem;
}
h2 {
    font-size: 1.4em;
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
    gap: 2rem;
}

.thumb {
    grid-area: thumb;
}

.roles ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style-type: disc;
    list-style-position: inside;
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
    flex-direction: column;
    justify-content: start;
    gap: 2rem;
}

.roles {
    flex-grow: 1;
}

.techs ul {
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
    .techs ul {
        gap: 2rem;
    }
}
</style>
