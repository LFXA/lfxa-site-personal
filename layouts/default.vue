<template>
  <div :class="theme +' flex flex-col min-h-screen bg-background-primary text-copy-primary'"> 
      <HeaderPartial>
           <button class="ml-2 border-2 border-transparent text-gray-200 rounded-full hover:text-white focus:outline-none focus:text-white"
                  aria-label="Theme" v-on:click="changeTheme()">            
              <Fa
                  v-if="theme == 'theme-light'"
                  :icon="['fas', 'moon']"
                  class="inline-flex hover:text-white"/>
              <Fa
                  v-else
                  :icon="['fas', 'sun']"
                  class="inline-flex hover:text-white"/>
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