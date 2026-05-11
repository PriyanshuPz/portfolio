<script lang="ts">
  import { STATE } from "$lib/state";
</script>

<footer class="mx-auto max-w-190 my-5 mt-20 w-full px-[1.45rem]">
  <div
    class="flex items-center justify-between gap-4 text-sm sm:flex-row flex-col"
  >
    <div class="text-text-tertiary">
      <span>{STATE.layout.footer.copyrightText}</span>
    </div>
    <div class="flex items-center gap-1 max-sm:justify-center">
      {#if STATE.layout.footer.watermark}
        <span
          >Powered by <a class="internal-link" href="https://misty.p8labs.in"
            >Misty</a
          >.
        </span>
      {/if}
    </div>
  </div>
</footer>
