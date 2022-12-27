import Head from "next/head";
import Link from "next/link";
import { parse } from "node-html-parser";

export default function Greatday({ headlines, hyperlinks }: { headlines: string[], hyperlinks: string[] }): JSX.Element {
    return (
        <div className="bg-gray-100 p-8 flex flex-col justify-center items-center">
          <Head>
            <title>많이 본 TV연예 뉴스</title>
            <meta name="description" content="Quotes" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className="w-full text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                많이 본 TV연예 뉴스
            </h1>
            <ul className="text-gray-700 leading-relaxed mb-8">
                {headlines.map((headline, idx) => (
                    <Link key={idx} href={`https://entertain.naver.com/` + `${hyperlinks[idx]}`}><li className="hover:bg-blue-100" key={idx}>{headline}</li></Link>
                ))}
            </ul>
            {/* <div className="py-2">
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                    <Link href="https://entertain.naver.com/home">Visit entertain.naver.com</Link>
                </button>
            </div>
            <div>
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                    <Link href="/">Back to home</Link>
                </button>   
            </div> */}
          </main>
        </div>
    );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://entertain.naver.com/home")
  .then((res) => res.text())
  .then((data) => {
    const root = parse(data);
    return ({
        headlines: root.querySelectorAll('#ranking_news > div > div.rank_lst > ul > li').map((li) => li.querySelector('a')?.childNodes[1]?.text),
        hyperlinks: root.querySelectorAll('#ranking_news > div > div.rank_lst > ul > li').map((li) => li.querySelector('a')?.getAttribute("href")),
    });
  });

  return {
    props: {
      headlines: res.headlines,
      hyperlinks: res.hyperlinks,
    },
  };
};