import Link from "next/link"
import articlesConfig from "../config/articlesConfig"
import contentConfig from "../config/contentConfig"
import Article from "./Article"

const ContentSection = () => {
  return (
    <section id="chapter">
        <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 text-center'>What{"'"}s Inside The Book</h2>
        <div className="my-10 flex flex-col md:flex-row gap-10">
            <aside className="">
                <ul className='w-full flex flex-col list-none gap-4 md:sticky md:top-[25%] p-4'>
                    {contentConfig.map(({ text, link }, index) => (
                        <Link href={link} key={index}>
                            <a className='text-slate-800 hover:text-primary transitions text-lg font-semibold capitalize asideLink'>
                                <li>{text}</li>
                            </a>
                        </Link>
                    ))}
                </ul>
            </aside>
            <div className="flex flex-col gap-10 flex-1">
                {articlesConfig.map(({ title, desc, link }, index) => (
                    <Article key={index} title={title} desc={desc} link={link} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default ContentSection