<script>
  import { onMount } from 'svelte';
  import { fastfetch } from '$lib/data.js';

  const command = 'fastfetch';
  let typed = $state('');
  let showOutput = $state(false);

  onMount(() => {
    let i = 0;
    const timer = setInterval(() => {
      typed = command.slice(0, ++i);
      if (i >= command.length) {
        clearInterval(timer);
        setTimeout(() => {
          showOutput = true;
        }, 350);
      }
    }, 90);
    return () => clearInterval(timer);
  });
</script>

<div class="terminal rounded-xl border border-border bg-term-bg shadow-2xl">
  <div class="flex items-center gap-2 border-b border-border px-4 py-2.5">
    <span class="h-3 w-3 rounded-full bg-red"></span>
    <span class="h-3 w-3 rounded-full bg-yellow"></span>
    <span class="h-3 w-3 rounded-full bg-green"></span>
    <span class="ml-2 text-xs text-muted">bash — fastfetch</span>
  </div>

  <div class="overflow-x-auto p-5 text-sm leading-relaxed font-mono">
    <div class="whitespace-pre">
      <span class="text-green">root@flat</span><span class="text-fg">:</span><span class="text-blue">~</span><span class="text-fg">#</span>
      <span class="text-fg">{typed}</span>{#if !showOutput}<span class="ml-0.5 inline-block w-2 animate-pulse bg-fg align-middle" style="height:1em"></span>{/if}
    </div>

    {#if showOutput}
      <div class="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <pre class="select-none overflow-x-auto text-aqua text-[13px] leading-tight sm:text-sm">{fastfetch.logoArt}</pre>
        <div class="min-w-0 text-base">
          {#each fastfetch.info as row}
            <div>
              <span class="text-blue">{row.key}</span><span class="text-muted">:</span>
              <span class="text-fg">{row.value}</span>
            </div>
          {/each}
        </div>
      </div>
      <div class="whitespace-pre mt-2">
        <span class="text-green">root@flat</span><span class="text-fg">:</span><span class="text-blue">~</span><span class="text-fg">#</span>
        <span class="ml-0.5 inline-block w-2 animate-pulse bg-fg align-middle" style="height:1em"></span>
      </div>
    {/if}
  </div>
</div>
