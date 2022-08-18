<template>
 <div class="posts md:col-span-1 col-span-5 content-center m-4">
    <div
        class="w-full ">
        <article
        class="article-card bg-background-primary overflow-hidden rounded-lg shadow-card flex-1">
        <nuxt-link
            class="featured-image-link block relative overflow-hidden"
            to="/">
            <ul class="absolute bottom-0 left-0 flex p-8 z-9">
            <li class="mr-2">
                <span
                class="inline-block bg-blue-500 px-4 py-2 text-white text-xs font-bold rounded"
                >Teste</span>
            </li>
            </ul>
            <figure>
            <img
                class="block loaded"
                alt="entry.node.image_caption"
                src="https://images.unsplash.com/photo-1622679153051-46d6d7a03fa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            />
            </figure>
        </nuxt-link>
        <div class="p-4">
            <h2 class="text-2xl mb-3">
            <nuxt-link
                class="break-words text-copy-primary hover:text-blue-500"
                to="/">Titulo</nuxt-link>
            </h2>
            <div class="text-sm text-copy-primary md:flex mb-4">
            <p class="author">Autor Nome</p>
            <p class="hidden md:block px-2">—</p>
            <time >2</time>
            </div>
        </div>
        </article>
    </div>          
    </div>
</template>