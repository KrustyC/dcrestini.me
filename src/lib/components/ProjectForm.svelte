<script>
  import Icon from "$lib/components/Icon.svelte";
  import Editor from "$lib/components/TextEditor/Editor.svelte";

  export let project = null;
  export let onSubmit = () => {};
</script>

<form on:submit|preventDefault={onSubmit}>
  <div class="flex flex-col">
    <div class="flex border-b-2 items-center py-4">
      <div class="flex w-1/3 justify-end pr-4">
        <p class="text-gray-600 font-bold">Title</p>
      </div>
      <div class="flex w-2/3 jusitfy-end">
        <input
          name="title"
          class="bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          bind:value={$project.title}
        />
      </div>
    </div>

    <div class="flex border-b-2 items-center py-4">
      <div class="flex w-1/3 justify-end pr-4">
        <p class="text-gray-600 font-bold">Year</p>
      </div>
      <div class="flex w-2/3 jusitfy-end">
        <input
          name="year"
          class="bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="number"
          bind:value={$project.year}
        />
      </div>
    </div>

    <div class="flex border-b-2 items-center py-4">
      <div class="flex w-1/3 justify-end pr-4">
        <p class="text-gray-600 font-bold">Description</p>
      </div>
      <div class="w-2/3 jusitfy-end">
        <div class="w-full bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
          <Editor bind:content={$project.description} />
        </div>
      </div>
    </div>

    <div class="flex border-b-2 items-center py-4">
      <div class="flex w-1/3 justify-end pr-4">
        <p class="text-gray-600 font-bold">Company</p>
      </div>
      <div class="flex w-2/3 jusitfy-end">
        <input
          name="company"
          class="bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          bind:value={$project.company}
        />
      </div>
    </div>

    <div class="flex items-start py-4">
      <div class="flex w-1/3 justify-end pr-4">
        <p class="text-gray-600 font-bold">Links</p>
      </div>
      <div class="flex flex-col w-2/3">
        <div class="flex w-full items-center">
          <div class="mr-4">
            <Icon name="github" class="fill-current text-gray-700" />
          </div>
          <input
            name="github"
            class="bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="url"
            bind:value={$project.links.github}
          />
        </div>

        <div class="flex items-center w-full mt-4">
          <div class="mr-4">
            <Icon name="website" class="fill-current text-gray-700" />
          </div>
          <input
            name="website"
            class="appearance-none border-2 text-primary w-full py-2 px-4 text-gray-700 leading-tight"
            type="url"
            bind:value={$project.links.website}
          />
        </div>
      </div>
    </div>
  </div>

  <div class="flex w-full justify-end mt-4">
    <button
      class="font-bold self-end border-2 border-accent rounded-lg px-8 py-4 text-accent hover:bg-accent hover:text-white duration-300"
      type="submit"
    >
      Add Project
    </button>
  </div>
</form>
