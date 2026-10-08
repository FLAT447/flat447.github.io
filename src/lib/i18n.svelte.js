/** @type {Record<string, Record<string, string>>} */
const translations = {
  ru: {
    projects: 'Проекты',
    github_profile: 'Мой GitHub',
    socials: 'Соц. сети',
    support: 'Поддержать',
    copy: 'Копировать',
    copied: '✓',
    copied_toast: 'Скопировано!',
    themeDark: 'Тёмная',
    themeLight: 'Светлая',
    footer: 'собрано на SvelteKit',
    proj_v2ray_desc: 'Бесплатные VPN конфигурации и MTProxy.',
    proj_dns_desc: 'Android приложение для теста DNS резолверов.',
    proj_openflux_desc: 'Десктопный клиент для OpenFlux, написанный на Rust.',
    link_github: 'GitHub',
    link_site: 'Сайт',
    soc_tg_channel: 'Telegram канал',
    soc_tiktok: 'TikTok',
    soc_tg_pm: 'Telegram ЛС',
    soc_vk_pm: 'VK ЛС',
    soc_openvk: 'OpenVK ЛС',
  },
  en: {
    projects: 'Projects',
    github_profile: 'My GitHub',
    socials: 'Socials',
    support: 'Support',
    copy: 'Copy',
    copied: '✓',
    copied_toast: 'Copied!',
    themeDark: 'Dark',
    themeLight: 'Light',
    footer: 'built with SvelteKit',
    proj_v2ray_desc: 'Free VPN configs and MTProxy.',
    proj_dns_desc: 'Android app for testing DNS resolvers.',
    proj_openflux_desc: 'Desktop client for OpenFlux, written in Rust.',
    link_github: 'GitHub',
    link_site: 'Website',
    soc_tg_channel: 'Telegram channel',
    soc_tiktok: 'TikTok',
    soc_tg_pm: 'Telegram DM',
    soc_vk_pm: 'VK DM',
    soc_openvk: 'OpenVK DM', 
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
