<template>
<div>
   <header class="shadow">     
       <div class="flex p-4 mb-5 justify-center  bg-background-secondary">   
        <nuxt-link to="/" class="text-copy-nav-item underline hover:text-blue-800 font-bold mr-5">TESTE</nuxt-link>
        <nuxt-link to="/" class="text-copy-nav-item underline hover:text-blue-800 font-bold mr-5">TESTE</nuxt-link>
      </div>
    </header>
      <main >
          <div class="max-w-7xl mx-auto py-6 md:px-6 md:px-8 p-8 grid  md:grid-flow-row grid-cols-5 gap-2">        
         <PostPreview></PostPreview>       
        <div class="m-4 md:col-end-6 md:row-start-1 md:row-end-4 md:col-span-1 bg-background-secondary col-span-6  overflow-hidden rounded-lg shadow-card ">
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