import locales from "./locales";

export const localizedPath = ({path, lang}) =>
    locales[lang].default ? "/"+path : `${locales[lang].path}/${path}`;
