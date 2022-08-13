<template>
<div class="">
   <header class="shadow">     
       <div class="flex p-4 mb-5 justify-center bg-blue-800">   
        <nuxt-link to="/" class=" mr-5">TESTE</nuxt-link>
      </div>
    </header>
      <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 p-8 grid grid-cols-6 gap-4">        
         <PostPreview></PostPreview>
        <div class="m-4 lg:col-span-1 bg-background-secondary col-span-6 overflow-hidden rounded-lg shadow-card ">
          <h4 class="m-5">Tags</h4>
           <div class=" p-6 mx-2">   
              <nuxt-link class="flex text-copy-primary justify-between" to="/"><span>tag </span>
                <span class="rounded-full h-6 w-6 flex items-center justify-center text-copy-primary bg-blue-700 text-xl">  
                   </span> 
              </nuxt-link>           
           </div> 
        </div> 
      </div>
      </main>
</div>
</template>
<script>
import PostPreview from "../../components/blog/PostPreview.vue";
 export default {
    components: {
        PostPreview,        
      },

 }
</script>