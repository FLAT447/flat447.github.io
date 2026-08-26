<script>
  let { title, children } = $props();
</script>

<section class="mb-12">
  <h2 class="mb-6 flex items-center gap-3 text-2xl font-bold text-fg sm:text-3xl">
    <span class="text-green">#</span>
    <span>{title}</span>
    <span class="h-px flex-1 bg-border"></span>
  </h2>
  {@render children()}
</section>
