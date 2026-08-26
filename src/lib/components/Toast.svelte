<script>
  import { toast } from '$lib/toast.svelte.js';

  let phase = $state('hidden');
  let text = $state('');
  let showTimer = 0;
  let hideTimer = 0;

  $effect(() => {
    const id = toast.id;
    if (id === 0) return;
    text = toast.text;
    phase = 'show';
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    showTimer = setTimeout(() => (phase = 'exit'), 1400);
    hideTimer = setTimeout(() => (phase = 'hidden'), 1800);
  });
</script>

<div
  class="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-fg shadow-2xl
    {phase === 'show'
    ? 'translate-y-0 opacity-100'
    : phase === 'exit'
      ? '-translate-y-[160%] opacity-0'
      : 'translate-y-[160%] opacity-0'}
    transition-all {phase === 'exit' ? 'duration-200 ease-in' : 'duration-500 ease-out'}"
  aria-live="polite"
>
  <span class="text-green">✓</span> {text}
</div>
