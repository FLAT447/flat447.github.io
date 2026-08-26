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
