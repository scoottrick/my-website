<script setup>
import { ref, onMounted } from 'vue';

const hackable = ref(null);
const animating = ref(false);

onMounted(() => {
    setTimeout(triggerHackEffect, 200);
});

function triggerHackEffect() {
    hackText(hackable.value);
}

function randomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function hackText(target) {
    if (!target || animating.value) {
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
    <div class="header" @mouseenter="triggerHackEffect">
        <div class="text">
            <span>
                <h1 class="mono">Scott Schapker</h1>
                <h2 ref="hackable" class="mono">Software Engineer</h2>
            </span>
            <p>
                I'm primarily a web developer with a decade of experience creating applications with
                JavaScript. I'm most familiar working with Angular but have also spent time
                developing React, Android and iOS apps for professional and personal projects. Feel
                free to grab a copy of my résumé or look at some projects I've worked on below.
            </p>
        </div>
        <div class="image">
            <img src="/headshot.jpg" alt="Me" />
        </div>
        <nav>
            <span>
                <a href="#portfolio">
                    <button>Portfolio</button>
                </a>
                <a href="/Scott-Schapker-Resume.pdf" target="_blank">
                    <button>Resume</button>
                </a>
            </span>
        </nav>
    </div>
</template>

<style scoped>
h1 {
    margin-bottom: 0.5rem;
}

h2 {
    font-size: 1.4em;
    margin-bottom: 2rem;
}
.header {
    --image-size: 350px;
    display: grid;
    grid-template-columns: 1fr var(-image-size);
    grid-template-rows: auto;
    grid-template-areas: 'text image' 'nav .';
    row-gap: 2rem;
    column-gap: 4rem;
    padding-top: 10vh;
    padding-bottom: 20vh;
}
.header .text {
    grid-area: text;
    align-self: end;
}
.header .image {
    grid-area: image;
}
.header nav {
    grid-area: nav;
    text-align: left;
}
.header nav span {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
}

.header img {
    display: block;
    width: var(--image-size);
    height: var(--image-size);
    border-radius: 4px;
}

@media screen and (max-width: 1080px) {
    .header {
        --image-size: 250px;
        column-gap: 2rem;
    }
}
@media screen and (max-width: 720px) {
    .header {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: 'text' 'nav';
    }
    .header .image {
        display: none;
    }
    .header nav {
        text-align: center;
    }
}
</style>
