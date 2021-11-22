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

  export let projects = [];
  let y = 100;
  let i = 10;

  $: i = y / 20 > 12 ? y / 20 : 12;
</script>

<svelte:window bind:scrollY={y} />

<div class="max-w-screen-xl min-h-screen m-auto flex flex-col">
  <h1 class="mt-40 mb-2 font-bold" in:fly={{ y: 200, duration: 2000 }}>
    All Projects
  </h1>
  <p class="font-mono text-accent text-xl">
    Here's a list of things I have been working on, both personal and
    professional
  </p>

  <div class="min-h-40 my-10 bg-gray-800">
    <table class="min-w-max w-full table">
      <thead class="bg-primary text-secondary">
        <tr>
          <th class="p-3 text-left">Year</th>
          <th class="p-3 text-left text-bold">Title</th>
          <th class="p-3 text-left">Made At</th>
          <th class="p-3 text-left">Built With</th>
          <th class="p-3 text-left">Links</th>
        </tr>
      </thead>
      <tbody>
        {#each projects.slice(0, i) as project}
          <tr class="h-10 bg-primary hover:bg-primary-soft">
            <td class="p-3 text-accent">
              {project.year}
            </td>
            <td class="p-3 font-bold">{project.title}</td>
            <td class="p-3">{project.company}</td>
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
            <td class="p-3 "> Link to GH / Wbesite </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
