<script>
  import '../app.css';
  import Background from '$lib/components/Background.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import LangToggle from '$lib/components/LangToggle.svelte';
  import Toast from '$lib/components/Toast.svelte';
  import { getLocale } from '$lib/i18n.svelte.js';

  let { children } = $props();

  $effect(() => {
    document.documentElement.lang = getLocale();
  });
</script>

<Background />

<Toast />

<div class="min-h-screen">
  <header class="fixed right-4 top-4 z-20 sm:right-6 sm:top-6">
    <div class="flex items-center gap-1 rounded-full border border-border bg-surface-container-highest p-1 elev-1">
      <LangToggle />
      <ThemeToggle />
    </div>
  </header>

  <main class="mx-auto w-full max-w-4xl px-5 pt-12 pb-24 sm:pt-20 sm:pb-32">
    {@render children()}
  </main>
</div>
