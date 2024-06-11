<script setup>
import { ref, computed } from 'vue';
const { cover } = defineProps({
    cover: { type: String, required: true },
    images: { type: Array, required: false }
});

const isOpened = ref(false);
const current = ref(0);
const tracker = ref(null);
const closePrompt = ref(null);
const coverImage = ref(null);
const galleryView = ref(null);
const containerClass = computed(() => `image-viewer ${isOpened.value ? 'opened' : 'closed'}`);
const galleryImages = [];
for (let i = 0; i < 10; i++) {
    galleryImages.push(cover);
}

function openGallery() {
    current.value = 0;
    isOpened.value = true;
    document.body.classList.add('noscroll');
}

function closeGallery() {
    isOpened.value = false;
    document.body.classList.remove('noscroll');
}

function goToPrevious(event) {
    event.stopPropagation();
    if (current.value === 0) {
        current.value = galleryImages.length - 1;
    } else {
        current.value--;
    }
}

function goToNext(event) {
    event.stopPropagation();
    if (current.value === galleryImages.length - 1) {
        current.value = 0;
    } else {
        current.value++;
    }
}

function movePrompt(prompt, x, y) {
    const offsetX = Math.floor(tracker.value.clientWidth / 2);
    const offsetY = Math.floor(tracker.value.clientHeight / 2);
    const left = `${x - offsetX}px`;
    const top = `${y - offsetY}px`;
    prompt.animate([{ left, top }], { duration: 500, fill: 'forwards' });
}

function trackMouse(event) {
    if (isOpened.value) {
        return;
    }
    movePrompt(tracker.value, event.clientX, event.clientY);
}

function moveClosePrompt(event) {
    if (!isOpened.value) {
        return;
    }
    movePrompt(closePrompt.value, event.clientX, event.clientY);
}
</script>
<template>
    <div :class="containerClass">
        <div class="cover">
            <img
                ref="coverImage"
                @click="openGallery"
                @mousemove="trackMouse"
                :src="cover"
                alt="project thumbnail"
            />
            <span class="prompt still"><i class="iconoir-enlarge"></i></span>
            <span ref="tracker" class="prompt follow light"><i class="iconoir-enlarge"></i></span>
        </div>
        <div class="gallery" @mousemove="moveClosePrompt" @click="closeGallery">
            <div class="interaction" @click.stop>
                <img :src="galleryImages[current]" alt="" />
                <div>
                    <button @click.stop="goToPrevious">
                        <i class="iconoir-arrow-left"></i>
                    </button>
                    <button @click.stop="goToNext"><i class="iconoir-arrow-right"></i></button>
                </div>
            </div>
            <!-- <ul ref="galleryView" @click="cancelClick">
                <li v-for="(image, i) in galleryImages" :key="i">
                    <img :src="image" alt="" />
                    </li>
                    </ul> -->
            <span ref="closePrompt" class="prompt light"><i class="iconoir-reduce"></i></span>
        </div>
    </div>
</template>

<style>
.image-viewer {
    position: relative;
}
.image-viewer.closed .gallery {
    display: none;
}
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
}
.image-viewer.closed .overlay {
    display: none;
}
.gallery {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 2em;
    cursor: pointer;
}
.gallery ul {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
    gap: 2em;
}
.interaction {
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
}
.gallery ul {
    cursor: auto;
}
.gallery .interaction:hover ~ .prompt {
    opacity: 0;
}
.gallery .prompt {
    position: fixed;
    opacity: 1;
}
.gallery img {
    min-width: 400px;
    min-height: 400px;
}
.cover img {
    position: relative;
    display: inline-block;
    box-shadow: none;
    transition: all 200ms ease-in-out;
}

.prompt {
    --background-color: black;
    --color: white;
    --size: 50px;
    display: inline-block;
    width: var(--size);
    height: var(--size);
    padding: calc(var(--size) / 25);
    border-radius: 100%;
    pointer-events: none;
    background-color: var(--background-color);
    color: var(--color);
    box-shadow: 4px 4px 4px -2px black;
    transition: opacity 100ms ease-in;
}

.prompt i::before {
    font-size: 2em;
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    color: inherit;
}

.prompt.light {
    --background-color: white;
    --color: black;
}
.follow {
    position: fixed;
    opacity: 0;
}

.still {
    opacity: 1;
    position: absolute;
    bottom: 20px;
    right: 20px;
}
.image-viewer.closed .cover img:hover ~ .follow {
    opacity: 1;
}
.image-viewer.closed .cover img:hover ~ .still {
    opacity: 0;
}
.cover img:hover {
    box-shadow: 2px 4px 8px -2px black;
    transform: scale(1.05);
}
</style>
