<template>
  <div :class="theme +' flex flex-col h-max md:h-screen justify-between bg-background-primary text-copy-primary'"> 
      <HeaderPartial>
        <button class="ml-2 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                  aria-label="Theme" v-on:click="changeTheme()">            
              <Fa
                  v-if="theme == 'theme-light'"
                  :icon="['fas', 'moon']"
                  class="inline-flex hover:text-blue-500"/>
              <Fa
                  v-else
                  :icon="['fas', 'sun']"
                  class="inline-flex hover:text-blue-500"/>
          </button>
      </HeaderPartial>      
         <Nuxt />
      <FooterPartial />
  </div>
</template>

<script>
import HeaderPartial from "../components/NavBar.vue";
import FooterPartial from "../components/Footer.vue";

export default {
 
  data() {
    return {
      theme: "theme-light"
    };
  },
  created() {
     if(process.client) {
         this.theme = localStorage.getItem("theme") || "theme-light";
     }
  },
  components: {
    HeaderPartial,
    FooterPartial,
  },
  methods: {
    changeTheme() {
      this.theme = (this.theme == "theme-light") ? "theme-dark" : "theme-light";
     
      localStorage.setItem("theme", this.theme);
    }  
  }
};
</script>