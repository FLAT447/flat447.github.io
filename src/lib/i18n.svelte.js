/** @type {Record<string, Record<string, string>>} */
const translations = {
  ru: {
    projects: 'Проекты',
    github_profile: 'Мой GitHub',
    socials: 'Соц. сети',
    interests: 'Интересы',
    support: 'Поддержать автора',
    copy: 'Копировать',
    copied: '✓',
    copied_toast: 'Скопировано!',
    themeDark: 'Тёмная',
    themeLight: 'Светлая',
    footer: 'собрано на SvelteKit',
    proj_v2ray_desc: 'Бесплатные VPN конфигурации и MTProxy.',
    proj_dns_desc: 'Android приложение для теста DNS резолверов.',
    link_github: 'GitHub',
    link_site: 'Сайт',
    soc_tg_channel: 'Telegram канал',
    soc_tiktok: 'TikTok',
    soc_tg_pm: 'Telegram ЛС',
    soc_vk_pm: 'VK ЛС',
    int_distro_title: 'Дистрохоппинг',
    int_distro_text: 'Чуть больше года, началось с Fedora 42.',
    int_rice_title: 'Райсинг',
    int_rice_text: 'Любимый WM — Hyprland.'
  },
  en: {
    projects: 'Projects',
    github_profile: 'My GitHub',
    socials: 'Socials',
    interests: 'Interests',
    support: 'Support the author',
    copy: 'Copy',
    copied: '✓',
    copied_toast: 'Copied!',
    themeDark: 'Dark',
    themeLight: 'Light',
    footer: 'built with SvelteKit',
    proj_v2ray_desc: 'Free VPN configs and MTProxy.',
    proj_dns_desc: 'Android app for testing DNS resolvers.',
    link_github: 'GitHub',
    link_site: 'Website',
    soc_tg_channel: 'Telegram channel',
    soc_tiktok: 'TikTok',
    soc_tg_pm: 'Telegram DM',
    soc_vk_pm: 'VK DM',
    int_distro_title: 'Distrohopping',
    int_distro_text: 'A bit over a year, started with Fedora 42.',
    int_rice_title: 'Ricing',
    int_rice_text: 'Favorite WM — Hyprland.'
  }
};

export const locales = ['ru', 'en'];

let locale = $state('ru');

if (typeof localStorage !== 'undefined') {
  const saved = localStorage.getItem('lang');
  if (saved === 'ru' || saved === 'en') locale = saved;
}

export function getLocale() {
  return locale;
}

/** @param {string} l */
export function setLocale(l) {
  if (l !== 'ru' && l !== 'en') return;
  locale = l;
  try {
    localStorage.setItem('lang', l);
  } catch (e) {}
}

/** @param {string} key */
export function t(key) {
  return translations[locale]?.[key] ?? translations.ru[key] ?? key;
}
