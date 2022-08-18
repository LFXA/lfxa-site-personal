<template>
<div>
   <header class="shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-copy-primary">Home</h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
         
          <div class="px-4 py-6 sm:px-0 flex justify-center">
               <VueSlickCarousel class="h-1/5 w-3/4 " v-bind="settings">
                <div>
                  <img
                      class="block loaded"
                      alt="entry.node.image_caption"
                      src="https://images.unsplash.com/photo-1622679153051-46d6d7a03fa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"/>
                </div>
                <div>2</div>
              </VueSlickCarousel> 
            </div>
          <!-- /End replace -->
        </div>
      </main>
</div>
</template>
<script>

 import VueSlickCarousel from 'vue-slick-carousel'
export default {
    components: {
      VueSlickCarousel
    },
  data() {
    return {
      settings: {
        "accessibility": true,
        "dots": true,
        "dotsClass": "custom-dot-class",
        "fade": true,
        "infinite": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "lazyLoad" : "ondemand"
      }
    };
  }
 }
</script>
