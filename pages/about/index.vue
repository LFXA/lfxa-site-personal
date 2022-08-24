<template>
<div>
   <header class="shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-copy-primary">{{ $t("about.title") }}</h1>
        </div>
      </header>
      <main>
        <div class="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-6 md:px-8">
            <img class="w-48 h-48 mb-8 rounded-full mx-auto" src="../../assets/perfil_lfxa.jpg" alt=""/>
            <div class="lg:text-justify text-left text-2xl leading-snug mx-6 md:pl-12 text-copy-secondary">
              <p>
                {{ $t("about.text1") }}
                <span class="italic font-extrabold">Lucas Felix Aquino</span>,
                {{ $t("about.text2") }} {{ calculaIdade(idade) }}
                {{ $t("about.text3") }} <nuxt-link :to="$t('about.link')">{{ $t("about.textLink") }}</nuxt-link>
              </p>
              <p class="font-bold">
                <br />
                {{ $t("about.text4") }}
              </p>
              <p><br />{{ $t("about.text5") }}</p>
            </div>           
          </div>
           <div class="flex flex-col items-center md:items-start max-w-7xl font-bold  m-auto text-3xl" v-for="(element, index) in skills" :key="index">
            <p class="my-auto"> {{Object.keys(element)[0].includes(".") ? $t(Object.keys(element)[0]) : Object.keys(element)[0] }}</p>
             <ul class="grid lg:grid-cols-3 grid-cols-1 my-6 gap-6">
                <li class="text-base mr-6" v-for="(skill, idx) in element[Object.keys(element)[0]]" :key="idx">
                  {{ skill.name }}
                  <br />
                  <div class="shell inline-flex mt-3">
                    <div
                      class="bar"
                      :style="{width: skill.percent, background: skill.background}">
                      <span :class="skill.textColor">{{ skill.percent }}</span>
                    </div>
                  </div>
                  <br/>                
                  <a :href="elementLink.link" v-for="elementLink in skill.links" :key="elementLink.link"
                    class="text-gray-500 hover:text-yellow-500" :aria-label="elementLink.icon" target="_blank" 
                    :content="$t(elementLink.tooltip)" v-tippy>
                    <fa :icon="['fas', elementLink.icon]" />
                  </a>
                </li>
            </ul>
           </div>         
        </main>
</div>
</template>
<script>
export default {
   
  data() {
    return {
      idade: new Date(1998, 6, 7, 11, 10),
      "skills": [{
        "Back-end" : [{
              "name": "C#",
              "percent": "85%",
              "background": "#38225d",
              "textColor": "text-white",
              "links": [
                  {
                      "icon": "certificate",
                      "link": "https://cursos.alura.com.br/user/lucasfaquino/degree-dotnet-236/certificate",
                      "tooltip": "skills.certificateAluraDotNet"
                  }]
          },
          {
              "name": "Javascript",
              "percent": "85%",
              "background": "#f7df1e",
              "textColor": "text-black"
          },
          {
              "name": "Python",
              "percent": "55%",
              "background": "linear-gradient(to right, #ffde57, #4584b6)",
              "textColor": "text-white"
          }]},
         {"Front-end" : [{
              "name": "Vue.js",
              "percent": "85%",
              "background": "linear-gradient(to right, #35495e, #42b883)",
              "textColor": "text-white"
          },
          {
              "name": "HTML + CSS",
              "percent": "90%",
              "background": "linear-gradient(to right, #e34f26, #009CDE)",
              "textColor": "text-white"
          }]},
          {"skills.databaseSection": [{
              "name": "MongoDB",
              "percent": "85%",
              "background": "#589636",
              "textColor": "text-white"
          },
          {
              "name": "SQL",
              "percent": "75%",
              "background": "linear-gradient(to right, #00758f, #f29111)",
              "textColor": "text-white"
          }]},
          {"Mobile" : [{
              "name": "Flutter + Dart",
              "percent": "35%",
              "background": "linear-gradient(to right, #40C4FF, #1967D2)",
              "textColor": "text-white"
          }],          
     }]
    };
  },
  methods: {
    calculaIdade(dataNasc) {
      let dataAtual = new Date();
      let anoAtual = dataAtual.getFullYear();
      let diaNasc = dataNasc.getDate();
      let mesNasc = dataNasc.getMonth() + 1;
      let anoNasc = dataNasc.getFullYear();
      let idade = anoAtual - anoNasc;
      let mesAtual = dataAtual.getMonth() + 1;

      if (mesAtual < mesNasc) {
        idade--;
      } else {
        if (mesAtual == mesNasc) {
          if (new Date().getDate() < diaNasc) {
            idade--;
          }
        }
      }
      return idade;
    },
  },
};
</script>