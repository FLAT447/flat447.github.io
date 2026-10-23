<script lang="ts">
  let { artist } = $props();
</script>

<a
  href={artist.href}
  target="_blank"
  rel="noopener noreferrer"
  class="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface-container-high px-5 py-4 text-fg transition hover:border-tertiary hover:bg-tertiary/10 hover:text-tertiary"
>
  <span class="flex items-center gap-3">
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
    <span class="text-base font-medium">{artist.name}</span>
  </span>
  <span class="text-muted transition group-hover:text-tertiary" aria-hidden="true">↗</span>
</a>
