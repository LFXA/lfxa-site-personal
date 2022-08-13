<template>
  
    <select  @change="changeLocale()"
      v-model="idiom"
      class="font-bold text-copy-primary bg-background-primary hover:text-blue-400 px-3 m-2"
    >  <option v-for="locale in availableLocales"
        :key="locale.code"
        :value="locale.code"
        :selected="verifySelected(locale)"
        :to="switchLocalePath(locale.code)">    
      {{ $t(locale.name) }}
    </option>
    </select>

</template>

<script>
export default {
  name: "idiom-select",
  data() {
    return {
      idiom: null,
    };
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales
    },
  },
  methods: {
     changeLocale() {
      document.documentElement.lang = this.idiom;
      let link = this.findPath(this.$i18n.messages[this.$i18n.locale].link);
      this.$i18n.locale = this.idiom;
      if(link)
        this.$router.push(this.$t("link." + link));
      else
        this.$router.push(this.$t("link.home"));
    },
    verifySelected(element) {
     if (this.$i18n.locale == element.code) {
        this.idiom = element.code;
      }
    },
    findPath(linkObservable) {
      let jsonLinkString = JSON.stringify(linkObservable);
      let jsonLink = JSON.parse(jsonLinkString);
      let routerSplit = this.$router.history.current.path.split("/");
      let currentPath = routerSplit[routerSplit.length - 1];
      let regex = new RegExp("/" + currentPath + "(?![^ ])");

      return Object.keys(jsonLink).find((key) => jsonLink[key].match(regex));
    },
  }
};
</script>