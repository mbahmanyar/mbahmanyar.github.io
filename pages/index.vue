<script setup lang="ts">

const {isFirstVisit} = useVisitor()


const welcomeIsDone = ref(false);

const content = [
  '<span class="host">mohammd@website:~$</span> whoami',
  'Hey there, I am Mohammad.',
  '',
  'I’m a full-stack developer with 5+ years of experience turning creative ideas into reality in the cyber world. I\'m an expert in PHP/Laravel and Vue/Nuxt, and I have a slight passion for production side to help develop things people actually want to use because, let\'s face it, the world favors the useful ones.\n' +
  '\n' +
  'I kicked things off by co-founding a wedding-planning startup (yep, I helped people get married—cue the irony). Since then, I’ve tried with everything from cryptocurrency platforms to multilingual apps, and now I’m developing an IELTS-prep startup called "Encrafty." Basically, I\'m on board if it\'s online and addresses actual issues.\n' +
  '\n' +
  'What fascinated me? Solving complex problems, creating cool stuffs with even cooler people, and gaining new knowledge constantly.\n' +
  '\n' +
  'If you’re working on something awesome, I’m already interested. Let’s build something legendary—or at least functional and bug-free.'
];


</script>


<template>

  <Wellcome v-if="isFirstVisit" @ready="() => welcomeIsDone = true"/>

  <template v-if="welcomeIsDone || !isFirstVisit">
    <Navigation/>
    <Content :text="content"/>
  </template>

</template>

<style>
.banner {
  font-size: 0.5em;
}

@media (min-width: 900px) {
  .banner {
    font-size: 0.8em;
  }
}

</style>
