<script>
  import Terminal from '$lib/components/Terminal.svelte';
  import Section from '$lib/components/Section.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import SocialLink from '$lib/components/SocialLink.svelte';
  import CopyRow from '$lib/components/CopyRow.svelte';
  import { projects, socials, interests, crypto } from '$lib/data.js';
  import { t } from '$lib/i18n.svelte.js';
</script>

<svelte:head>
  <title>FLAT447 — Alexey</title>
</svelte:head>

<div class="mb-8 sm:mb-12">
  <Terminal />
</div>

<Section title={t('projects')}>
  {#snippet action()}
    <a
      href="https://github.com/FLAT447"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 rounded-full border border-border bg-surface-container-high px-3 py-1.5 text-sm font-medium tracking-wide text-tertiary transition hover:border-primary hover:bg-primary-container/30"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
      </svg>
      {t('github_profile')}
    </a>
  {/snippet}

  <div class="grid gap-4 sm:grid-cols-2">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</Section>

<Section title={t('socials')}>
  <div class="grid gap-3 sm:grid-cols-2">
    {#each socials as social}
      <SocialLink {social} />
    {/each}
  </div>
</Section>

<Section title={t('interests')}>
  <div class="grid gap-4 sm:grid-cols-2">
    {#each interests as interest}
      <div class="rounded-3xl border border-border bg-surface-container-high p-6">
        <h3 class="text-2xl font-bold text-orange">{t(interest.titleKey)}</h3>
        <p class="mt-2 text-base text-muted">{t(interest.textKey)}</p>
      </div>
    {/each}
  </div>
</Section>

<Section title={t('support')}>
  <div class="flex flex-col gap-3">
    {#each crypto as item}
      <CopyRow {item} />
    {/each}
  </div>
</Section>
