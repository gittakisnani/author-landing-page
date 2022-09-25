import { ArticleInterface } from "../config/articlesConfig"
import { Fade } from "react-awesome-reveal"
const Article = ({ title, desc, link }: ArticleInterface) => {
  return (
    <article id={link.slice(2)} className="bg-gray-100 p-6 md:p-10 flex flex-col gap-6 md:gap-8 lg:gap-10 content-article">
      <Fade direction="right" cascade triggerOnce>
        <h3 className="text-slate-800 font-bold text-2xl capitalize">{title}</h3>
        <p className="text-lg text-slate-800/70 font-medium">{desc}</p>
      </Fade>
    </article>
  )
}

export default Article