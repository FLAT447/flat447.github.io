<script>
  import { t } from '$lib/i18n.svelte.js';
  import { showToast } from '$lib/toast.svelte.js';
  let { item } = $props();
  let copied = $state(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(item.address);
      copied = true;
      showToast(t('copied_toast'));
      setTimeout(() => (copied = false), 1500);
    } catch (e) {}
  }
</script>

<div class="flex items-center gap-3 rounded-2xl border border-border bg-surface-container-high p-3">
  <span class="min-w-32 shrink-0 text-base font-bold text-tertiary">{item.label}</span>
  <code class="flex-1 truncate text-sm text-muted sm:text-base" title={item.address}>{item.address}</code>
  <button
    onclick={copy}
    class="shrink-0 rounded-full bg-primary-container px-5 py-2 text-sm font-medium text-on-primary-container transition hover:bg-primary hover:text-on-primary"
    aria-label="Копировать {item.label} адрес"
  >
    {copied ? t('copied') : t('copy')}
  </button>
</div>
