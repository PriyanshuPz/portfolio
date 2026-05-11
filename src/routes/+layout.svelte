<script lang="ts">
  import "./layout.css";
  import ThemeToggle from "$lib/components/themeToggle.svelte";
  import Footer from "$lib/components/footer.svelte";
  import { STATE } from "$lib/state";

  let { children } = $props();
</script>

<svelte:head>
  <meta name="title" content={STATE.meta.title} />
  <meta name="description" content={STATE.meta.description} />
  <meta name="keywords" content={STATE.meta.keywords} />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="author" content={STATE.meta.author} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="canonical" href={STATE.meta.baseURL} />

  <meta property="og:type" content="website" />
  <meta property="og:url" content={STATE.meta.baseURL} />
  <meta property="og:title" content={STATE.meta.title} />
  <meta property="og:description" content={STATE.meta.description} />
  <meta property="og:image" content={STATE.meta.ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content={STATE.meta.title} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={STATE.meta.title} />
  <meta name="twitter:description" content={STATE.meta.description} />
  <meta name="twitter:image" content={STATE.meta.ogImage} />
  <meta name="twitter:creator" content={STATE.meta.twitter.creator} />
  <meta name="twitter:site" content={STATE.meta.twitter.creator} />

  <link rel="icon" href={STATE.meta.icon} />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Emoji:wght@300..700&family=Outfit:wght@100..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="flex flex-col min-h-screen justify-center items-center w-full mx-auto max-w-190"
>
  <article
    class="flex-1 py-6 px-[1.45rem] text-[1.1rem] leading-8.5 tracking-[0.9px] w-full h-full"
  >
    <header
      class="pt-4 pb-10 w-full flex items-center justify-center dark:text-muted text-foreground"
    >
      {#each STATE.layout.navbar.left as h_left}
        <div>
          <a
            class="hidden min-[400px]:block no-underline font-bold text-lg"
            href={h_left.href}>{h_left.label}</a
          ><a
            class="min-[400px]:hidden block no-underline font-bold text-lg"
            href={h_left.href}>{h_left.mobileLabel}</a
          >
        </div>
      {/each}

      <nav
        class="flex-1 max-w-136 flex items-center justify-end text-lg space-x-5"
      >
        {#each STATE.layout.navbar.right as h_right}
          <a href={h_right.href}>{h_right.label}</a>
        {/each}
        {#if STATE.layout.navbar.showThemeToggle}
          <ThemeToggle />
        {/if}
      </nav>
    </header>

    {@render children()}
  </article>

  <Footer />
</div>
