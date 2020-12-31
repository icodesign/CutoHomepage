import { useEffect } from "react";
import { navigate } from "gatsby";

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return "en";
  }

  const lang = navigator && navigator.language && navigator.language.split("-")[0];
  if (!lang) return "en";

  if (navigator.language.toLowerCase().includes("zh-cn")) {
      return "zhHans"
  }

  if (navigator.language.toLowerCase().includes("zh-tw") || navigator.language.toLowerCase().includes("zh-hk")) {
    return "zhHant"
  }

  switch (lang) {
    case "de":
        return "de";
    case "es":
        return "es";
    case "fr":
        return "fr";
    case "it":
        return "it";
    case "ja":
        return "ja";
    case "ko":
        return "ko";
    case "ru":
        return "ru";
    default:
      return "en";
  }
};

const FAQPage = () => {
  useEffect(() => {
    const urlLang = getRedirectLanguage();
    navigate(`/${urlLang}/faq/`, {replace: true});
  }, []);

  return null;
};

export default FAQPage;