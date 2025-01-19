<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
</script>

<template>
 <Hero title="Hello" subtitle="I am Syed"/>
 <HomeCards/>
 <JobListings :limit="3" :ShowAllButton="true"/>
</template>