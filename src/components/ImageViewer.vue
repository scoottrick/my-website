<script setup>
import { ref, computed } from 'vue';
const { cover } = defineProps({
    cover: { type: String, required: true },
    images: { type: Array, required: false }
});

const isOpened = ref(false);
const tracker = ref(null);
const containerClass = computed(() => `image-viewer ${isOpened.value ? 'opened' : 'closed'}`);

function trackMouse(event) {
    const offsetX = Math.floor(tracker.value.clientWidth / 2);
    const offsetY = Math.floor(tracker.value.clientHeight / 2);
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    tracker.value.animate([{ left: `${x}px`, top: `${y}px` }], { duration: 50, fill: 'forwards' });
}
</script>
<template>
    <div :class="containerClass">
        <img
            class="cover"
            @click="() => (isOpened = !isOpened)"
            @mousemove="trackMouse"
            :src="cover"
            alt="project thumbnail"
        />
        <span class="prompt still"><i class="iconoir-enlarge"></i></span>
        <span ref="tracker" class="prompt follow"><i class="iconoir-enlarge"></i></span>
    </div>
</template>

<style>
.image-viewer {
    position: relative;
}
img.cover {
    position: relative;
    display: inline-block;
    box-shadow: none;
    transition: all 200ms ease-in-out;
}
.image-viewer.opened .prompt {
    display: none;
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
.follow {
    --background-color: white;
    --color: black;
    position: fixed;
    opacity: 0;
}

.still {
    opacity: 1;
    position: absolute;
    bottom: 20px;
    right: 20px;
}
.image-viewer.closed img.cover:hover ~ .follow {
    opacity: 1;
}
.image-viewer.closed img.cover:hover ~ .still {
    opacity: 0;
}
img.cover:hover {
    box-shadow: 2px 4px 8px -2px black;
    transform: scale(1.05);
}
</style>
