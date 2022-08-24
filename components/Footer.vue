<template>
  
    <footer
      id="footer"
      class="mt-auto  content-wrapper bg-background-secondary"
      role="contentinfo"
    >
      <div
        class="container m-auto md:flex justify-between items-center align-middle px-6 py-6"
      >
        <p class="text-white pb-8 md:pb-0">
          {{ $t("footerMsg1") }}
          <span class="italic font-semibold">LFXA,</span>
          {{ $t("footerMsg2") }}
          <a href="https://nuxtjs.org/" class="text-copy-nav-item" target="_blank">Nuxt </a>
          {{ $t("footerMsg3") }}
          <a href="https://tailwindcss.com/"  class="text-copy-nav-item" target="_blank">TailwindCSS. </a>
        </p>

        <ul class="flex justify-center">
          <li
            class="mr-4"
            v-for="element in social"
            :key="element.link">
            <a
              :href="element.link"
              class="block text-white hover:text-blue-700"
              :aria-label="element.icon"
              target="_blank">
              <fa :icon="['fab', element.icon]" size="lg" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          icon: "linkedin-in",
          link: "https://www.linkedin.com/in/lucasfaquino/"
        },
        {
          icon: "github",
          link: "https://github.com/LucasFelixAquino"
        },
        {
          icon: "stack-overflow",
          link: "https://stackoverflow.com/users/11226027/lucasfelixaquino"
        }
      ]
    }
  },
  computed: {
    socials () {
      return this.social
    },
  },
  methods: {},
};
</script>

