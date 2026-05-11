<script lang="ts">
  import Skills from "$lib/components/skills.svelte";
  import SocialIcons from "$lib/components/socialIcons.svelte";
  import { STATE } from "$lib/state.js";
  import { formatDate } from "$lib/utils";

  const { data } = $props();
</script>

<svelte:head>
  <title>{STATE.meta.author}</title>
</svelte:head>

<div
  class="flex md:items-start items-center justify-center mt-16 sm:flex-row flex-col"
>
  <img
    src={STATE.landing.avatar.url}
    alt={STATE.landing.avatar.alt}
    width={STATE.landing.avatar.width}
    height={STATE.landing.avatar.height}
  />
  <div class="sm:ml-9 mt-1">
    <p class="font-bold text-[28px] leading-[2.7rem] max-sm:text-center">
      <span
        ><a href={STATE.landing.hero.boldurl}>{STATE.landing.hero.boldText}</a
        ></span
      >
      <br class="md:hidden" />
      <span
        class="dark:text-muted text-foreground/70 font-semibold max-sm:text-[22px] max-sm:leading-0"
      >
        {STATE.landing.hero.describe.firstPart}
        <span class="text-[#85BFF7]"
          >{STATE.landing.hero.describe.secondPart}</span
        >
        <br class="md:hidden" />{STATE.landing.hero.describe.thirdPart}</span
      >
    </p>
  </div>
</div>

<SocialIcons />

{#if STATE.landing.building.enable}
  <div class="mb-10">
    <span class="tracking-widest font-medium uppercase"
      >{STATE.landing.building.label}</span
    >
    <a
      href={STATE.landing.building.project.url}
      class="flex items-start"
      target="_blank"
    >
      <div class="mt-5">
        <div class="flex">
          <img
            src={STATE.landing.building.project.logo}
            loading="lazy"
            alt={STATE.landing.building.project.name}
            width="30"
            height="25"
          />
          <span class="emoji">{STATE.landing.building.project.name}</span>
        </div>
        <p class="text-muted">
          {STATE.landing.building.project.description}
        </p>
      </div>
    </a>
    <a href={STATE.landing.building.more.url}>
      <div class="mt-5">
        <span>{STATE.landing.building.more.label}</span>
      </div>
    </a>
  </div>
{/if}

<Skills />

{#if STATE.landing.experience.enable}
  <section class="mb-10">
    <span class="tracking-widest font-medium uppercase">
      {STATE.landing.experience.label}
    </span>

    <div class="mt-5 space-y-7">
      {#each STATE.landing.experience.items as item}
        <div>
          <div class="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p class="font-medium">
                {item.role}
              </p>

              <p class="text-muted text-sm">
                {item.company}
              </p>
            </div>

            <span class="text-sm text-muted">
              {item.period}
            </span>
          </div>

          <p class="text-muted mt-2 text-[15px]">
            {item.description}
          </p>
        </div>
      {/each}
    </div>
  </section>
{/if}

{#if STATE.landing.recentPosts.enable}
  <div>
    <span class="tracking-widest font-medium uppercase">RECENT POSTS</span>
    {#each data.posts as post}
      <div class="mt-5">
        <a href={post.slug} class="cursor-pointer">
          <span class="emoji">{post.title}</span>
        </a>
        <p class="text-muted text-[16px]">
          {formatDate(post.date)} • {post.read} • {post.tag}
        </p>
        <p class="text-muted text-[16px]">
          {post.description?.substring(0, 150)}...
        </p>
      </div>
    {/each}

    <a href={STATE.landing.recentPosts.more.url}
      ><div class="mt-5">
        <span>{STATE.landing.recentPosts.more.label}</span>
      </div>
    </a>
  </div>
{/if}
