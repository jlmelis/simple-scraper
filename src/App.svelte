<script>
  let url;
  let title;
  let loading;
  
  async function getURLTitle() {
    const encodedUrl = encodeURI(url);
    const response = await fetch(`/.netlify/functions/scraper?url=${encodedUrl}`);
    const result = await response.json();
    
    title = result.title;
    loading = false;
  }

  function handleClick() {
    loading = true;
    getURLTitle();
  }
</script>


<input bind:value={url} placeholder="enter url">
<button on:click={handleClick}>Get Title</button>
View <a href="https://github.com/jlmelis/simple-scraper">Github</a> repository.
<div>
  <h3>URL: </h3>
  {url || ''}
</div>
<div>
  <h3>Title: </h3>
  {#if loading}
    <span>Loading.......</span>
  {:else}
    {title || ''}
  {/if}
</div>

