<script>
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";

  const BREADCRUMBS = [
    {
      label: "Admin",
      link: "/admin",
    },
  ];

  const pages = [
    {
      title: "Projects",
      description: "Lorem Ipsum",
      link: "/admin/projects",
    },
    {
      title: "Blog Posts",
      description: "Lorem Ipsum",
      link: "/admin/posts",
    },
  ];
</script>

<div class="m-auto flex flex-col">
  <Breadcrumb items={BREADCRUMBS} />

  <div class="flex flex-wrap my-8">
    <ul>
      {#each pages as page}
        <li>
          <a href={page.link}>
            <h2 class="text-gray-700">
              - {page.title}
            </h2>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
