import { format } from "date-fns"
import "./Article.css"

export default function Article({ id, image, name, publishdate, postedon, link }) {
  return (
    <>
      <div className="p-5 rounded-3xl shadow-md bg-white article-container">
        <article key={id} className="rounded-3xl">
          < a href={link} target="_blank">
            <img
              src={image}
              className="h-52 object-fit object-cover w-full lg:h-80 rounded-3xl"
            />
          </a>

          <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between">
            <article className="flex items-center justify-start">

              <ul>
                <li className="text-slate-800 font-bold">{name}</li>
                <li className="text-sm text-slate-800 opacity-75">
                  {format(new Date(publishdate), "dd MMMM yyyy")}
                </li>
              </ul>
            </article>

            <article className="mt-5 md:mt-0">
              <a
                href={link}
                className="text-sm text-slate-800 opacity-75 underline"
                target="_blank"
                rel="noreferrer"
              >
                Read Blog&#8599;
              </a>
              <small className="text-slate-800 block article-posted-on">
                {postedon}
              </small>
            </article>
          </div>
        </article>
      </div>
    </>
  )
}
