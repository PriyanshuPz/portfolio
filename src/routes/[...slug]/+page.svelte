<script lang="ts">
  import { STATE } from "$lib/state.js";
  import { formatDate } from "$lib/utils";

  let { data } = $props();
</script>

<svelte:head>
  <title>
    {data.meta?.title || data.title} | {STATE.meta.title}
  </title>
</svelte:head>

{#if data.type === "index"}
  <ol class="list-disc list-outside">
    {#each data.posts as post}
      <a href={post.slug} class="cursor-pointer">
        <li class="ml-6">
          <div class="mt-5">
            <span class="emoji">{post.title}</span>

            <p class="text-muted text-[14px] -mt-2">
              {formatDate(post.date)}
              • {post.read}
              • {post.tag}
            </p>
          </div>
        </li>
      </a>
    {/each}
  </ol>
{:else}
  <article class="prose prose-sm md:prose-base dark:prose-invert">
    <data.content />
  </article>
{/if}
