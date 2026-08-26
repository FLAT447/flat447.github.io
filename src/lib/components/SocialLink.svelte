<script lang="ts">
  import { t } from '$lib/i18n.svelte.js';
  let { social } = $props();

  const icons: Record<string, string> = {
    telegram:
      'M21.8 4.2 18.3 19c-.2.9-.8 1.2-1.6.8l-4.4-3.3-2.1 2c-.2.2-.4.4-.8.4l.3-4.7 8.5-7.7c.4-.3-.1-.5-.6-.2L6.6 13.2 1.9 11.7c-.9-.3-.9-.9.2-1.3L20.6 3c.8-.3 1.5.2 1.2 1.2z',
    tiktok:
      'M16.5 3c.3 2.1 1.4 3.5 3.5 3.7v2.6c-1.2.1-2.4-.2-3.5-.7v5.9c0 3.3-2.4 5.6-5.4 5.6-2.9 0-5-2.1-5-4.8 0-2.9 2.3-4.9 5.2-4.9.4 0 .8 0 1.2.1v2.8c-.4-.1-.8-.2-1.2-.2-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.2 2.3 2.2 1.4 0 2.4-1 2.4-2.7V3h2.9z',
    vk: 'M13.2 17.5c-4.7 0-7.4-3.4-7.6-8h2.4c.1 3.4 1.6 4.9 2.8 5.2V9.5h2.3v2.8c1.2-.1 2.4-1.5 2.8-2.8h2.2c-.3 1.7-1.4 3-2.4 3.6 1 .6 2.4 1.9 3 4.4h-2.6c-.5-1.6-1.7-2.9-3-3.4-.5.4-1.1.6-1.8.6-.7 0-1.3-.2-1.8-.6-.2 0-.4-.1-.6-.2v3.4c0 .3.1.4.4.4h2.6z'
  };

  const path = $derived(icons[social.icon]);
</script>

<a
  href={social.href}
  target="_blank"
  rel="noopener noreferrer"
  class="flex items-center gap-3 rounded-xl border border-border bg-surface/60 px-4 py-3 text-fg transition hover:border-purple hover:text-purple"
>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={path} />
  </svg>
  <span class="text-base font-medium">{t(social.labelKey)}</span>
</a>
