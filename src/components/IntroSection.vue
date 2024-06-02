<script setup>
import resumeUrl from '@/assets/Scott-Schapker-Resume.pdf';
import mainImageUrl from '@/assets/home-image.jpg';
</script>

<template>
    <header>
        <div class="header-grid">
            <div class="image-container">
                <img :src="mainImageUrl" alt="Me" />
            </div>
            <nav class="nav-container">
                <a href="#portfolio"><button>Projects</button></a>
                <a :href="resumeUrl" target="_blank"><button>Resume</button></a>
            </nav>
            <div class="description-container">
                <h1>Scott Schapker</h1>
                <h2>Software Engineer/Web Developer</h2>
                <p>
                    I'm primarily a web developer with a decade of experience creating applications
                    with JavaScript. I'm most familiar working with Angular but have also spent time
                    developing React, Android and iOS apps for professional and personal projects.
                    Feel free to grab a copy of my résumé or look at some projects I've worked on
                    below.
                </p>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: 120px;
}

.header-grid {
    display: grid;
    max-width: 1280px;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-template-areas: 'image' 'nav' 'desc';
    gap: 24px;
}

.image-container {
    grid-area: image;
    text-align: center;
}

.image-container img {
    --size: 350px;
    width: var(--size);
    height: var(--size);
    border-radius: 4px;
}

nav {
    grid-area: nav;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /*     
    flex-direction: row;
    justify-content: space-between; */
    gap: 24px;

    font-size: 0.9em;
}

nav a {
    flex-grow: 1;
}

nav a button {
    width: 100%;
    padding: 0.8em 0;
}

.description-container {
    grid-area: desc;
}

@media screen and (min-width: 720px) {
    .header-grid {
        grid-template-columns: auto 1fr;
        grid-template-rows: min-content min-content;
        grid-template-areas: 'image desc' 'nav .';
        column-gap: 40px;
    }
}
</style>
