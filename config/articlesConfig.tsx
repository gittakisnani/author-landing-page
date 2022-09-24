import contentConfig, { ContentLink } from "./contentConfig"

export interface ArticleInterface {
    title: ContentLink['text']
    desc: string
    link: string
}

const desc = 'On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.'

export default contentConfig.map(config => ({ title: config.text, desc, link: config.link })) as ArticleInterface[]
