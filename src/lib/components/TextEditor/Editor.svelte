<script>
  import { onMount, onDestroy } from "svelte";
  import { Editor } from "@tiptap/core";
  import StarterKit from "@tiptap/starter-kit";

  export let content = "";

  let element;
  let editor;

  onMount(() => {
    editor = new Editor({
      element,
      extensions: [StarterKit],
      content,
      onTransaction: () => {
        editor = editor;
      },
    });

    editor.on("update", ({ editor }) => {
      content = editor.getJSON();
    });
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });
</script>

{#if editor}
  <button
    on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
    class:active={editor.isActive("heading", { level: 1 })}
  >
    H1
  </button>
  <button
    on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
    class:active={editor.isActive("heading", { level: 2 })}
  >
    H2
  </button>
  <button
    on:click={() => editor.chain().focus().setParagraph().run()}
    class:active={editor.isActive("paragraph")}
  >
    P
  </button>
{/if}

<div class="text-gray-700 bg-gray-200">
  <div bind:this={element} />
</div>
