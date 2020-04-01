import locales from "./locales";

export const localizedPath = ({path, lang}) =>
    lang && path ? locales[lang].default ? "/"+path : `${locales[lang].path}/${path}` : "/";
