<script>
  import { slide, fly } from "svelte/transition";

  let showItems = true;
  let y = 100;
  let i = 10;
  const baseItems = [
    {
      title: "TRIPS by Culture Trip",
      year: 2020,
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      technologies: ["React", "Svelte", "Sapper"],
      company: "Culture Trip",
      links: {
        github: "",
        website: "",
      },
    },
    {
      title: "Ladders At Home",
      year: 2020,
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      technologies: ["React", "AWS Cognito"],
      company: "Learning Ladders",
      links: {
        github: "",
        website: "",
      },
    },
    {
      title: "Ladders At Home",
      year: 2020,
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      technologies: [
        "React",
        "CircleCI",
        "AWS Lambda",
        "Mongo DB",
        "Terraform",
      ],
      company: "Learning Ladders",
      links: {
        github: "",
        website: "",
      },
    },
    {
      title: "Insights",
      year: 2020,
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      technologies: ["React", "Svelte", "Sapper"],
      company: "Learning Ladders",
      links: {
        github: "",
        website: "",
      },
    },
    {
      title: "School's Dashboard",
      year: 2020,
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      technologies: ["React", "AWS Cognito", "AWS DynamoDB"],
      company: "Learning Ladders",
      links: {
        github: "",
        website: "",
      },
    },
  ];

  const items = [...baseItems, ...baseItems, ...baseItems, ...baseItems];

  $: i = y / 20 > 12 ? y / 20 : 12;
  $: {
    console.log(y, i);
  }
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
        {#each items.slice(0, i) as item}
          <tr class="h-10 bg-primary hover:bg-primary-soft">
            <td class="p-3 text-accent">
              {item.year}
            </td>
            <td class="p-3 font-bold">{item.title}</td>
            <td class="p-3">{item.company}</td>
            <td class="p-3">
              <div class="flex flex-wrap">
                {#each item.technologies as technology, i}
                  <span class="text-xs text-accent mr-2">
                    {technology}
                    {#if i < item.technologies.length - 1}
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

<style>
  /* .table {
    border-spacing: 0 15px; */
  /* } */
</style>
