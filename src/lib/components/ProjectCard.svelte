<script>
  let { project } = $props();
  import { t } from '$lib/i18n.svelte.js';
</script>

<div class="flex h-full flex-col rounded-3xl border border-border bg-surface-container-high p-6 elev-1 transition hover:border-primary hover:bg-primary-container/30">
  <h3 class="text-2xl font-bold text-tertiary">{project.name}</h3>
  <p class="mt-2 flex-1 text-base text-muted">{t(project.descKey)}</p>
  <div class="mt-4 flex flex-wrap gap-2">
    {#each project.links as link}
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-full border border-border px-4 py-2 text-sm text-fg transition hover:border-primary hover:bg-primary-container hover:text-on-primary-container"
      >
        {t(link.labelKey)} ↗
      </a>
    {/each}
  </div>
</div>
