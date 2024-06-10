<script setup>
const { project } = defineProps({
    project: { type: Object, required: true }
});
</script>
<template>
    <h2>{{ project.name }}</h2>
    <div class="project">
        <div class="thumb"><img :src="project.thumbnail" alt="" /></div>
        <div class="details">
            <div>
                <div class="description">
                    <h3>The Project</h3>
                    <p>
                        {{ project.description }}
                    </p>
                </div>
                <div class="roles">
                    <h3>My Roles</h3>
                    <p>
                        {{ project.role }}
                    </p>
                </div>
            </div>
            <ul class="techs">
                <li v-for="(tech, i) in project.techs" :key="i">
                    <a v-if="tech.url" :href="tech.url" target="_blank"
                        ><img :src="tech.logo" :alt="tech.text" :title="tech.text"
                    /></a>
                    <img v-else :src="tech.logo" :alt="tech.text" :title="tech.text" />
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
h2,
h3,
p {
    line-height: 1.2;
}
h2 {
    padding-bottom: 1em;
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
    justify-content: space-between;
    min-width: 400px;
    max-width: 1200px;
}

.techs {
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    padding: 1em 0;
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
    .techs {
        padding: 1em 0 0;
        gap: 2em;
        justify-content: start;
    }
}
</style>
