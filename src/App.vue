<script setup>
import { onMounted } from 'vue';
import IntroSection from './components/IntroSection.vue';
import PortfolioSection from './components/PortfolioSection.vue';

import portfolioData from './data/portfolio-data';

function setBackground({ dark, light }) {
    const style = document.documentElement.style;
    const darkValue = `rgb(${dark}, ${dark}, ${dark})`;
    const lightValue = `rgb(${light}, ${light}, ${light})`;
    style.setProperty('--dt-background', darkValue);
    style.setProperty('--lt-background', lightValue);
}

function selectFromRange(percent, start, end) {
    const breadth = Math.abs(start - end);
    const offset = breadth * percent;
    if (start < end) {
        return start + offset;
    }
    if (start >= end) {
        return start - offset;
    }
}

function getColorValue(scrollPercent) {
    const darkRange = [30, 20];
    const lightRange = [205, 225];
    const distanceFromHalf = Math.abs(0.5 - scrollPercent);
    const adjustedPercent = distanceFromHalf / 0.5;
    const dark = Math.floor(selectFromRange(adjustedPercent, darkRange[0], darkRange[1]));
    const light = Math.floor(selectFromRange(adjustedPercent, lightRange[0], lightRange[1]));
    return { dark, light };
}

function getScrollPercent() {
    return window.scrollY / (document.body.clientHeight - window.innerHeight);
}

onMounted(() => {
    const initialColors = getColorValue(getScrollPercent());
    setBackground(initialColors);

    window.addEventListener('scroll', () => {
        if (document.body.clientHeight > window.innerHeight) {
            const colors = getColorValue(getScrollPercent());
            setBackground(colors);
        }
    });
});
</script>

<template>
    <header>
        <IntroSection />
    </header>
    <PortfolioSection :portfolio="portfolioData" />
</template>

<style></style>
