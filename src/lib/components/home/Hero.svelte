<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import Typewriter from "svelte-typewriter";
  import Button from "$lib/components/Button.svelte";

  const BASE_TIMEOUT = 2800;
  let isMainTitleVisible = false;
  let isSubtitleVisible = false;
  let isParagrpahVisible = false;
  let isButtonVisible = false;
  let isCappuccinoVisible = false;

  onMount(async () => {
    setTimeout(() => {
      isMainTitleVisible = true;
    }, BASE_TIMEOUT);

    setTimeout(() => {
      isSubtitleVisible = true;
    }, BASE_TIMEOUT + 500);

    setTimeout(() => {
      isParagrpahVisible = true;
      isCappuccinoVisible = true;
    }, BASE_TIMEOUT + 1000);

    setTimeout(() => {
      isButtonVisible = true;
    }, BASE_TIMEOUT + 1500);
  });
</script>

<section class="h-screen flex items-center justify-center">
  <div class="flex flex-grow-1 w-full align-start h-2/5">
    <div class="flex flex-col min-w-2/3 w-2/3 h-full justify-start">
      <div class="h-4">
        <Typewriter interval={60}>
          <h4 class="text-xl text-accent font-mono">
            Hello there! Nice to e-meet you, my name is
          </h4>
        </Typewriter>
      </div>

      {#if isMainTitleVisible}
        <h1 in:fly={{ y: 200, duration: 2000 }} class="mt-4 mb-2 font-bold">
          Davide Crestini
        </h1>
      {/if}

      {#if isSubtitleVisible}
        <h2
          in:fly={{ y: 300, duration: 2000 }}
          class="mb-4 text-secondary font-bold"
        >
          I build web stuff, and I love Cappucinos
        </h2>
      {/if}

      {#if isParagrpahVisible}
        <p in:fly={{ y: 400, duration: 2000 }} class="mb-8 w-2/3">
          I am software engineer architecthing and building “things” for the
          web. Currently, I work as a Senior Frontend Engineer and Tech Lead @ <a
            href="https://theculturetrip.com"
            target="_blank"
            rel="noopnener noreferrer">Culture Trip.</a
          >
        </p>
      {/if}

      {#if isButtonVisible}
        <div in:fly={{ y: 500, duration: 2000 }}>
          <Button text="VIEW MY WORK" />
        </div>
      {/if}
    </div>

    <div class="w-1/3 flex justify-center bg-primary self-end h-100">
      {#if isCappuccinoVisible}
        <img
          in:fly={{ y: 400, duration: 2000 }}
          class="h-100"
          src="/img/cappuccino-4.jpeg"
          alt="illustration of myself"
          loading="lazy"
        />
      {/if}
    </div>
  </div>
</section>

<!-- https://brittanychiang.com/?ref=hackernoon.com -->
