<script setup>
import { ref } from 'vue';
import resumeUrl from '@/assets/Scott-Schapker-Resume.pdf';
import mainImageUrl from '@/assets/home-image.jpg';

const hackable = ref(null);
let animating = ref(false);

function triggerHackEffect() {
    hackText(hackable.value);
}

function randomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function hackText(target) {
    if (animating.value) {
        return;
    }
    const initialText = target.innerText;
    const textLength = initialText.length;
    const totalTime = 800;
    const intervalTime = totalTime / initialText.length;
    const debounceTime = totalTime;
    animating.value = true;

    let i = 0;
    const timer = setInterval(() => {
        const remainingLength = textLength - i;
        let randoms = '';
        for (let j = 0; j < remainingLength; j++) {
            const isSpace = initialText[j + i] === ' ';
            const newLetter = isSpace ? ' ' : randomLetter();
            randoms += newLetter;
        }
        const newText = initialText.substring(0, i) + randoms;
        target.innerText = newText;
        if (++i >= initialText.length) {
            target.innerText = initialText;
            setTimeout(() => (animating.value = false), debounceTime);
            return clearInterval(timer);
        }
    }, intervalTime);
}
</script>

<template>
    <header>
        <div class="header-grid" @mouseenter="triggerHackEffect">
            <div class="image-container">
                <img :src="mainImageUrl" alt="Me" />
            </div>
            <nav class="nav-container">
                <a href="#portfolio"><button>Projects</button></a>
                <a :href="resumeUrl" target="_blank"><button>Resume</button></a>
            </nav>
            <div class="description-container">
                <span>
                    <h1>Scott Schapker</h1>
                    <h2 ref="hackable">Software Engineer</h2>
                </span>
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

    padding-bottom: 20vh;
}

header h1,
h2 {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
}

header h1 {
    font-size: 2em;
    margin-bottom: 0.5rem;
}

header h2 {
    font-size: 1.4em;
    margin-bottom: 2rem;
}

header p {
    font-size: 1em;
    line-height: 1.4;
}

.header-grid {
    display: grid;
    max-width: 1080px;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-template-areas: 'image' 'nav' 'desc';
    row-gap: 2rem;
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
    padding: 1rem auto;
}

@media screen and (min-width: 720px) {
    .header-grid {
        grid-template-columns: auto 1fr;
        grid-template-rows: min-content min-content;
        grid-template-areas: 'image desc' 'nav .';
    }

    .description-container {
        padding: 1rem 2rem;
    }
}
</style>
