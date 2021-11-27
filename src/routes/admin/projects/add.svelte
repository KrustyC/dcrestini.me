<script>
  import { writable } from "svelte/store";
  import { variables } from "$lib/variables";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import Icon from "$lib/components/Icon.svelte";
  // import Editor from "$lib/components/TextEditor/Editor.svelte";
  import Button from "$lib/components/Button.svelte";
  import ProjectForm from "$lib/components/ProjectForm.svelte";
  import Editor from "$lib/components/TextEditor/Editor.svelte";
  // import { project } from "./store.js";

  const BREADCRUMBS = [
    {
      label: "Admin",
      link: "/admin",
    },
    {
      label: "Projects",
      link: "/admin/projects",
    },
    {
      label: "Add",
      link: "/admin/projects/add",
    },
  ];

  let success = false;
  let projectData = null;
  const project = writable({
    title: "",
    year: 2020,
    description: "",
    technologies: ["React", "AWS Cognito"],
    company: "",
    links: {
      github: "",
      website: "https://www.learningladders.info/",
    },
  });

  project.subscribe((data) => {
    projectData = data;
  });

  async function onSubmit(event) {
    const url = `${variables.basePath}/.netlify/functions/projects`;

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        project: projectData,
      }),
    });

    const json = await res.json();
    success = true;

    setTimeout(() => {
      success = false;
    }, 4000);
  }
</script>

<!-- This is an example component -->
<div class="flex flex-col justify-start align-start">
  <Breadcrumb items={BREADCRUMBS} />

  {#if success}
    <div class="min-h-34 rounded bg-accent px-4 py-4 mb-4 text-gray-700">
      Item Succesfully added
    </div>
  {/if}

  <ProjectForm {project} {onSubmit} />
</div>
