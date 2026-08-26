<script>
  let { project } = $props();
  import { t } from '$lib/i18n.svelte.js';
</script>

<div class="flex h-full flex-col rounded-xl border border-border bg-surface/60 p-5 transition hover:border-green hover:bg-surface">
  <h3 class="text-xl font-bold text-aqua">{project.name}</h3>
  <p class="mt-2 flex-1 text-base text-muted">{t(project.descKey)}</p>
  <div class="mt-4 flex flex-wrap gap-2">
    {#each project.links as link}
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-md border border-border px-3 py-1.5 text-xs text-fg transition hover:border-blue hover:text-blue"
      >
        {t(link.labelKey)} ↗
      </a>
    {/each}
  </div>
</div>
