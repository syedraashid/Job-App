<script setup>
import { ref,defineProps, onMounted} from 'vue';
import JobData from './jobs.json';
import JobListing from "@/components/JobListing.vue";
import { RouterLink } from "vue-router";
import  axios  from "axios";

const jobslist = ref(JobData.jobs);

defineProps({
    limit:Number,

    ShowAllButton:{
        default:false,
    }
})

// onMounted(async () => {
//   const response = await 
// }),
</script>
 
<template>
     <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobListing v-for="job in jobslist.splice(0, limit || jobslist.length)" :key="job.id" :job="job" />
         </div>
        </div>
     </section>
     <section v-if="ShowAllButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/Jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
</template>