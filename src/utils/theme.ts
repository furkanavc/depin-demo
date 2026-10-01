export type Theme = 'dark' | 'light';

export const THEME_STORAGE_KEY = 'depin-theme';
export const DEFAULT_THEME: Theme = 'dark';

export const themeInitScript = `(function(){var d=document.documentElement;try{var q=new URLSearchParams(location.search).get('theme');if(q==='light'||q==='dark'){localStorage.setItem('${THEME_STORAGE_KEY}',q);}var t=localStorage.getItem('${THEME_STORAGE_KEY}');d.dataset.theme=t==='light'||t==='dark'?t:'${DEFAULT_THEME}';}catch(e){d.dataset.theme='${DEFAULT_THEME}';}})();`;
