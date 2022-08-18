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
            <div class="lg:text-justify text-left text-2xl leading-snug md:pl-12 text-copy-secondary">
              <p>
                {{ $t("about.text1") }}
                <span class="italic font-extrabold">Lucas Felix Aquino</span>,
                {{ $t("about.text2") }} {{ calculaIdade(idade) }}
                {{ $t("about.text3") }} <nuxt-link :to="$t('about.link')">{{ $t("about.textLink") }}</nuxt-link>
              </p>
              <p class="font-extrabold">
                <br />
                {{ $t("about.text4") }}
              </p>
              <p><br />{{ $t("about.text5") }}</p>
            </div>       
               
          </div>
      </main>
</div>
</template>
<script>
export default {

  data() {
    return {
      idade: new Date(1998, 6, 7, 11, 10),
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