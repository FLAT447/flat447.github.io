<script>
  import '../app.css';
  import Background from '$lib/components/Background.svelte';
  import Header from '$lib/components/Header.svelte';
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
  <Header />

  <main class="mx-auto w-full max-w-4xl px-5 pt-8 pb-24 sm:pt-10 sm:pb-32">
    {@render children()}
  </main>
</div>
