<script>
  export let items = [];
</script>

<nav class="bg-grey-light rounded font-sans w-full my-4">
  <ol class="list-reset flex text-grey-dark">
    {#each items as item, i}
      <li>
        <a href={item.link} class="font-bold text-gray-700 cursor-pointer"
          >{item.label}</a
        >
      </li>
      {#if i < items.length - 1}
        <li><span class="mx-2 text-accent">/</span></li>
      {/if}
    {/each}
  </ol>
</nav>
