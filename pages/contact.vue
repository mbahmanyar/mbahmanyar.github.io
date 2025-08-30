<script setup lang="ts">
const githubUrl = 'https://github.com/mbahmanyar';
const linkedinUrl = 'https://www.linkedin.com/in/mohammad-ebrahim-bahmanyar/';
const cvUrl = 'https://drive.google.com/file/d/17fIvGJ3uYoZ37xC6CqoVBGnEfT0n9Wc1'; // put your CV in /public/cv/
const email = 'mbahmanyar72@gmail.com'
</script>

<template>
  <Navigation/>

  <Host command="bash contact.sh"/>


  <pre>
<span class="cmd">Contact Me</span>
 Whether you want to collaborate, discuss a project, or simply say hello — I’m always happy to connect.

 💻 GitHub     : <a :href="githubUrl" target="_blank">{{ githubUrl }}</a>
 🔗 LinkedIn   : <a :href="linkedinUrl" target="_blank">{{ linkedinUrl }}</a>
 📄 Download CV: <a :href="cvUrl" target="_blank" download>My CV</a>
 📧 Email      : <a :href="`mailto:${email}`">{{ email }}</a>
      </pre>

</template>

<style scoped>


.contact-links {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.contact-links a {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-links a:hover {
  color: #007acc;
}

.icon {
  width: 1.2rem;
  height: 1.2rem;
}
</style>
