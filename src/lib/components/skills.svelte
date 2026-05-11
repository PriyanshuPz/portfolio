<script>
  import { STATE } from "$lib/state";
  let expanded = $state(false);

  const MOBILE_COUNT = 6;
  const DESKTOP_COUNT = 12;

  let isMobile = $state(false);

  $effect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => {
      isMobile = media.matches;
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  });

  const INITIAL_COUNT = $derived(isMobile ? MOBILE_COUNT : DESKTOP_COUNT);

  const visibleSkills = $derived(
    expanded
      ? STATE.landing.skills.items
      : STATE.landing.skills.items.slice(0, INITIAL_COUNT),
  );
</script>

{#if STATE.landing.skills.enable}
  <section class="mb-16">
    <span class="tracking-widest font-medium uppercase">
      {STATE.landing.skills.label}
    </span>

    <div class="relative mt-7">
      <div class="flex flex-wrap gap-3 transition-all duration-500">
        {#each visibleSkills as skill}
          <div
            class="group flex items-center justify-center rounded-full border border-white/6 bg-white/3 px-4 py-2 transition-all duration-200 hover:scale-[1.03] hover:border-white/15 hover:bg-white/6"
          >
            <span class="text-sm tracking-wide text-white/85 whitespace-nowrap">
              {skill}
            </span>
          </div>
        {/each}
      </div>

      {#if !expanded && STATE.landing.skills.items.length > INITIAL_COUNT}
        <div
          class="absolute inset-x-0 bottom-0 flex h-20 items-end justify-center bg-linear-to-t from-background via-background/90 to-transparent pb-1"
        >
          <button
            onclick={() => (expanded = true)}
            class="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white/15"
          >
            Show all
          </button>
        </div>
      {/if}
    </div>
  </section>
{/if}
