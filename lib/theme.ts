/** localStorage key holding the user's explicit choice ("light" | "dark"). Absent = follow the system. */
export const THEME_STORAGE_KEY = "marketly-theme";

/**
 * Runs before first paint (inlined in <head>) so the right theme is applied before the page is
 * visible. It only toggles a class on <html>, so there is nothing for React to hydrate-mismatch on.
 */
export const themeInitScript = `(function(){try{var s=localStorage.getItem('${THEME_STORAGE_KEY}');var d=s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;
