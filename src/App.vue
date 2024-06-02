<script setup>
import IntroSection from './components/IntroSection.vue';
import PortfolioSection from './components/PortfolioSection.vue';

import portfolioData from './portfolio-data';
</script>

<template>
    <IntroSection />
    <PortfolioSection :portfolio="portfolioData" />
</template>
