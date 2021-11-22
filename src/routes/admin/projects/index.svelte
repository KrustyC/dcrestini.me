<script>
  import { onMount } from "svelte";
  import { variables } from "$lib/variables";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";

  const BREADCRUMBS = [
    {
      label: "Admin",
      link: "/admin",
    },
    {
      label: "Projects",
      link: "/admin/projects",
    },
  ];
  let projects = [];
  let pending = true;

  const url = `${variables.basePath}/.netlify/functions/projects`;
  onMount(async () => {
    const res = await fetch(url);
    const json = await res.json();
    projects = json.projects;
    pending = false;
  });
</script>

<div class="flex flex-col">
  <Breadcrumb items={BREADCRUMBS} />

  <p class="text-gray-700 text-xl my-4">
    These are all the projects created. <br />
    To add a new project, <a href="/admin/projects/add">click here</a>.
  </p>

  {#if pending}
    <h2 class="text-gray-700">Loading...</h2>
  {:else}
    <ul>
      {#each projects as project}
        <li>
          <a href="/admin/projects/edit">
            <h4 class="text-gray-700">- {project.title}</h4>
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</div>
