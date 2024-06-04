<script setup>
import { onMounted } from 'vue';
import IntroSection from './components/IntroSection.vue';
import PortfolioSection from './components/PortfolioSection.vue';

import portfolioData from './portfolio-data';

function createColor(value) {
    return `rgb(${value}, ${value}, ${value})`;
}

function setBackground(element, color) {
    // element.animate([{ background: color }], { duration: 1000, fill: 'forwards' });
    element.style.background = color;
}

function selectFromRange(percent, start, end) {
    // debugger;
    const breadth = Math.abs(start - end);
    const offset = breadth * percent;
    if (start < end) {
        return start + offset;
    }
    if (start >= end) {
        return start - offset;
    }
}

function getColorValue(scrollElement, scrollPercent) {
    const maxColor = 30;
    const minColor = 10;
    const distanceFromHalf = Math.abs(0.5 - scrollPercent);
    const adjustedPercent = distanceFromHalf / 0.5;
    return Math.floor(selectFromRange(adjustedPercent, maxColor, minColor));
}

onMounted(() => {
    const scrollView = document.getElementById('app');
    setBackground(scrollView, createColor(10));

    window.addEventListener('scroll', () => {
        if (document.body.clientHeight > window.innerHeight) {
            const position = window.scrollY / (document.body.clientHeight - window.innerHeight);
            const color = createColor(getColorValue(scrollView, position));
            console.log(color);
            setBackground(scrollView, color);
        }
    });
});
</script>

<template>
    <IntroSection />
    <PortfolioSection :portfolio="portfolioData" />
</template>
