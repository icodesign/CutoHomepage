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

  return "en"
};

const WhyMoneyPage = () => {
  useEffect(() => {
    const urlLang = getRedirectLanguage();
    navigate(`/${urlLang}/why-money/`, {replace: true});
  }, []);

  return null;
};

export default WhyMoneyPage;