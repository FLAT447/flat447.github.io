<script>
  import LangToggle from '$lib/components/LangToggle.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { t } from '$lib/i18n.svelte.js';

  const links = [
    { href: '#projects', key: 'projects' },
    { href: '#music', key: 'music' },
    { href: '#socials', key: 'socials' },
    { href: '#support', key: 'support' }
  ];
</script>

<header class="sticky top-0 z-30 border-b border-border/60 bg-bg/85 backdrop-blur-xl">
  <div class="relative mx-auto flex w-full max-w-4xl items-center gap-2 px-4 py-3 sm:gap-3 sm:px-5">
    <a
      href="#top"
      class="inline-flex shrink-0 items-center gap-2 text-xl font-bold tracking-tight text-fg transition hover:text-primary"
    >
      <span class="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]"></span>
      FLAT447
    </a>

    <nav
      class="no-scrollbar -mx-1 flex min-w-0 flex-1 items-center gap-1 overflow-x-auto px-1 md:absolute md:left-1/2 md:mx-0 md:flex-none md:-translate-x-1/2 md:overflow-visible md:px-2"
      aria-label={t('sections')}
    >
      {#each links as link}
        <a
          href={link.href}
          class="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-primary-container/40 hover:text-primary"
        >
          <span class="text-primary">#</span>{t(link.key)}
        </a>
      {/each}
    </nav>

    <div
      class="ml-auto flex shrink-0 items-center gap-1 rounded-full border border-border bg-surface-container-highest p-1 elev-1"
    >
      <LangToggle />
      <ThemeToggle />
    </div>
  </div>
</header>
