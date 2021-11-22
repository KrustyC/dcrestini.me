<script>
  export let text = "Click Me";
  export let onClick = () => {
    return null;
  };
</script>

<button
  class="font-bold self-start border-2 border-accent rounded-lg px-8 py-4 bg-primary text-accent hover:bg-accent hover:text-primary duration-300"
  on:click={onClick}
>
  {text}
</button>
