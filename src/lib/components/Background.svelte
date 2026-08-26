<script>
  const blobs = [
    { color: 'var(--blob-1)', size: 320, top: '-8%', left: '-6%', dur: 28, delay: 0 },
    { color: 'var(--blob-2)', size: 260, top: '55%', left: '70%', dur: 34, delay: -6 },
    { color: 'var(--blob-3)', size: 220, top: '20%', left: '60%', dur: 40, delay: -12 },
    { color: 'var(--blob-4)', size: 300, top: '70%', left: '5%', dur: 32, delay: -3 },
    { color: 'var(--blue)', size: 180, top: '5%', left: '40%', dur: 38, delay: -18 }
  ];
</script>

<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
  {#each blobs as b}
    <span
      class="blob absolute rounded-full opacity-25 blur-3xl"
      style="width:{b.size}px;height:{b.size}px;top:{b.top};left:{b.left};
             background:{b.color};animation-duration:{b.dur}s;animation-delay:{b.delay}s;"
    ></span>
  {/each}
</div>

<style>
  .blob {
    animation-name: drift;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    will-change: transform;
  }

  @keyframes drift {
    0% {
      transform: translate(0, 0) scale(1);
    }
    25% {
      transform: translate(8vw, 6vh) scale(1.12);
    }
    50% {
      transform: translate(-6vw, 12vh) scale(0.92);
    }
    75% {
      transform: translate(4vw, -8vh) scale(1.06);
    }
    100% {
      transform: translate(0, 0) scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .blob {
      animation: none;
    }
  }
</style>
