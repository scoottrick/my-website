<script setup>
import { ref } from 'vue';

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
    <div class="header" @mouseenter="triggerHackEffect">
        <div class="description-container">
            <span>
                <h1>Scott Schapker</h1>
                <h2 ref="hackable">Software Engineer</h2>
            </span>
            <p>
                I'm primarily a web developer with a decade of experience creating applications with
                JavaScript. I'm most familiar working with Angular but have also spent time
                developing React, Android and iOS apps for professional and personal projects. Feel
                free to grab a copy of my résumé or look at some projects I've worked on below.
            </p>
        </div>
        <img src="/headshot.jpg" alt="Me" />
    </div>
</template>

<style scoped>
h1,
h2 {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
}

h1 {
    font-size: 2em;
    margin-bottom: 0.5rem;
}

h2 {
    font-size: 1.4em;
    margin-bottom: 2rem;
}

.header p {
    font-size: 1em;
    line-height: 1.4;
}

.header {
    display: flex;
    column-gap: 4rem;
    padding-top: 10vh;
    padding-bottom: 20vh;
}

.header img {
    --size: 350px;
    width: var(--size);
    height: var(--size);
    border-radius: 4px;
}

.description-container {
    display: flex;
    flex-direction: column;
    justify-content: end;
}

@media screen and (max-width: 1080px) {
    .header img {
        --size: 200px;
    }
}

@media screen and (max-width: 720px) {
    .header img {
        display: none;
    }
}
</style>
