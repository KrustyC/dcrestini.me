<script>
  import { fly } from "svelte/transition";
  import Icon from "$lib/components/Icon.svelte";
  import { clickOutside } from "$lib/utils/click-outside";

  export let project = null;
  export let unsetProject = () => {};
</script>

{#if project !== null}
  <nav
    class="h-full w-1/3 bg-accent z-50 flex flex-col p-8 text-primary-on-accent"
    use:clickOutside
    on:click_outside={unsetProject}
    transition:fly={{ x: 250, opacity: 1 }}
  >
    <h2 class="font-mono text-primary-on-accent">{project.title}</h2>
    <div class="flex">
      <span class="text-background-primary">
        {project.year}
      </span>

      {#if project.links.github}
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" />
        </a>
      {/if}

      {#if project.links.website}
        <a
          class="text-accent"
          href={project.links.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon class="fill-current text-accent" name="website" />
        </a>
      {/if}
    </div>

    <p class="text-primary-on-accent text-xl mt-8">{project.description}</p>

    <div class="flex flex-col mt-8">
      <h4 class="font-bold text-primary-on-accent">Built With</h4>
      <div class="flex">
        {#each project.technologies as technology}
          <span class="text-background-primary mr-2">{technology}</span>
        {/each}
      </div>
    </div>
  </nav>
{/if}

<style>
  nav {
    position: fixed;
    top: 0;
    right: 0;
    overflow-y: auto;
  }
</style>
