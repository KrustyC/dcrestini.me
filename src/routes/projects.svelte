<script context="module">
  import { variables } from "$lib/variables";

  export async function load({ fetch }) {
    const url = `${variables.basePath}/.netlify/functions/projects`;

    const res = await fetch(url);
    const { projects } = await res.json();

    if (res.ok) {
      return { props: { projects } };
    }

    return {
      status: res.status,
      error: new Error(),
    };
  }
</script>

<script>
  import { slide, fly } from "svelte/transition";
  import { browser } from "$app/env";
  import { onMount } from "svelte";

  import Sidebar from "$lib/components/Sidebar.svelte";
  import Icon from "$lib/components/Icon.svelte";

  export let projects = [];
  let selectedProjectIndex = -1;

  let y = 100;

  $: visibleItems = y / 20 > 12 ? y / 20 : 12;
  $: console.log(visibleItems);
  $: selectedProject =
    selectedProjectIndex > -1 ? projects[selectedProjectIndex] : null;

  const handleClearProject = (event) => {
    selectedProjectIndex = -1;
  };

  const onSelectProject = (index) => {
    if (index === selectedProjectIndex) {
      selectedProjectIndex = -1;
      return;
    }

    selectedProjectIndex = index;
  };
</script>

<svelte:window bind:scrollY={y} />

<Sidebar bind:project={selectedProject} unsetProject={handleClearProject} />

<div class="w-9/12 min-h-screen m-auto flex flex-col">
  <h1 class="mt-40 mb-2 font-bold" in:fly={{ y: 200, duration: 2000 }}>
    All Projects
  </h1>
  <p class="font-mono text-accent text-xl">
    Here's a list of things I have been working on, both personal and
    professional
  </p>

  <div class="min-h-40 my-10">
    <table class="min-w-max w-full table">
      <thead
        class="text-accent bg-primary border-b-4 border-accent sticky top-0 "
      >
        <tr>
          <th class="p-3 text-left">Year</th>
          <th class="p-3 text-left text-bold">Title</th>
          <th class="p-3 text-left">Made At</th>
          <th class="p-3 text-left">Built With</th>
          <th class="p-3 text-left">Links</th>
        </tr>
      </thead>
      <tbody>
        {#each projects.slice(0, visibleItems) as project, index}
          <tr
            class="h-24 mx-8 border-b-2 border-accent hover:bg-primary-soft"
            transition:fly={{ y: -100, duration: 200 }}
            on:click={() => onSelectProject(index)}
          >
            <td class="p-3 text-accent">
              {project.year}
            </td>
            <td class="p-3 text-primary font-bold">{project.title}</td>
            <td class="p-3 text-primary">{project.company}</td>
            <td class="p-3">
              <div class="flex flex-wrap">
                {#each project.technologies as technology, i}
                  <span class="text-xs text-accent mr-2">
                    {technology}
                    {#if i < project.technologies.length - 1}
                      ·
                    {/if}
                  </span>
                {/each}
              </div>
            </td>
            <td class="p-3 ">
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
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  table {
    border-collapse: collapse; 
  }
</style>
