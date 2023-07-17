import Link from "next/link";
import { languages } from "../constants"

export const LanguageToggle = (props) => {
    const { locale, locales, slug, altSlug } = props || {};
    const currentLanguage = languages[locale];
    const [altLocale]= locales?.filter(lang => lang !== currentLanguage.route) || [];
    const altLanguage = languages[altLocale];
    const linkPath = slug ?`/${altSlug}` : "/"
    return (
        <Link href={linkPath} locale={altLanguage?.route} className="toggle-language">
            {altLanguage?.label}
        </Link>
    )
}
