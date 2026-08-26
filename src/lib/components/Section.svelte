<script>
  let { title, children } = $props();
</script>

<section class="mb-12">
  <h2 class="mb-6 flex items-center gap-3 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
    <span class="text-primary">#</span>
    <span>{title}</span>
    <span class="h-1 flex-1 rounded-full bg-surface-container-high"></span>
  </h2>
  {@render children()}
</section>
