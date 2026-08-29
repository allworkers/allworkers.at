import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { translations, LANGS } from "./translations";

const LanguageContext = createContext(null);

function detectInitial() {
  return "de";

  try {
    const saved = localStorage.getItem("aw_lang");
    if (saved && LANGS.some((l) => l.code === saved)) return saved;
  } catch (e) {
    /* storage unavailable — ignore */
  }
  try {
    const nav = (navigator.language || "de").slice(0, 2).toLowerCase();
    if (LANGS.some((l) => l.code === nav)) return nav;
  } catch (e) {
    /* ignore */
  }
  return "de";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitial);

  const dir = useMemo(
    () => LANGS.find((l) => l.code === lang)?.dir || "ltr",
    [lang],
  );

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", dir);
    try {
      localStorage.setItem("aw_lang", lang);
    } catch (e) {
      /* ignore */
    }
  }, [lang, dir]);

  const setLang = useCallback((code) => {
    if (LANGS.some((l) => l.code === code)) setLangState(code);
  }, []);

  // t('a.b.c') deep lookup with graceful fallback to German, then the key.
  const t = useCallback(
    (path) => {
      const read = (obj) =>
        path
          .split(".")
          .reduce((acc, k) => (acc == null ? undefined : acc[k]), obj);
      const val = read(translations[lang]);
      if (val !== undefined) return val;
      const fallback = read(translations.de);
      return fallback !== undefined ? fallback : path;
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, dir, t, isRTL: dir === "rtl", langs: LANGS }),
    [lang, dir, t, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
