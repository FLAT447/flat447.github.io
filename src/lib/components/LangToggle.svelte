<script>
  import { getLocale, setLocale } from '$lib/i18n.svelte.js';
</script>

<button
  onclick={() => setLocale(getLocale() === 'ru' ? 'en' : 'ru')}
  class="relative inline-flex h-8 w-16 items-center rounded-full border border-border bg-surface text-xs font-medium backdrop-blur transition hover:border-green"
  role="switch"
  aria-checked={getLocale() === 'en'}
  aria-label="Language"
  title="Language"
>
  <span
    class="absolute left-0.5 top-1/2 h-6 w-7 rounded-full bg-green transition-transform duration-300"
    style="transform: translate({getLocale() === 'ru' ? '0px' : '30px'}, -50%)"
  ></span>
  <span class="z-10 flex-1 text-center {getLocale() === 'ru' ? 'text-bg' : 'text-muted'}">RU</span>
  <span class="z-10 flex-1 text-center {getLocale() === 'en' ? 'text-bg' : 'text-muted'}">EN</span>
</button>
