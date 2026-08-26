<script>
  import { onMount } from 'svelte';
  import { t } from '$lib/i18n.svelte.js';

  let theme = $state('dark');

  onMount(() => {
    theme = document.documentElement.getAttribute('data-theme') || 'dark';
  });

  function toggle() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }
</script>

<button
  onclick={toggle}
  class="relative inline-flex h-7 w-14 items-center rounded-full border border-border bg-surface-container-highest backdrop-blur transition hover:border-primary"
  role="switch"
  aria-checked={theme === 'dark'}
  aria-label={t('themeDark')}
  title={t('themeDark')}
>
  <span class="pointer-events-none absolute inset-y-0 left-2 flex items-center text-[10px] text-muted">☾</span>
  <span class="pointer-events-none absolute inset-y-0 right-2 flex items-center text-[10px] text-yellow">☀</span>
  <span
    class="absolute left-0.5 top-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-on-primary shadow transition-transform duration-300"
    style="transform: translate({theme === 'dark' ? '0px' : '26px'}, -50%)"
  >
    {#if theme === 'dark'}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    {:else}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    {/if}
  </span>
</button>
