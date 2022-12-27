import Head from "next/head";
import Link from "next/link";
import { parse } from "node-html-parser";

export default function Greatday({ greatdayQuote, greatdayMessage }: { greatdayQuote: string, greatdayMessage: string }): JSX.Element {
    return (
        <div className="bg-gray-100 p-8 flex flex-col justify-center items-center">
          <Head>
            <title>Greatday Quote/Message</title>
            <meta name="description" content="Quotes" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className="w-2/3 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {greatdayQuote}
            </h1>
            <p className="text-gray-700 leading-relaxed mb-8">
              {greatdayMessage}
            </p>
            <div className="py-2">
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                    <Link href="https://greatday.com/">Visit greatday.com</Link>
                </button>
            </div>
            <div>
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                    <Link href="/">Back to home</Link>
                </button>   
            </div>
          </main>
        </div>
    );
}

export const getStaticProps = async () => {
  const res = await fetch("https://greatday.com/")
  .then((res) => res.text())
  .then((data) => {
    const root = parse(data);
    return ({
      quote: root.querySelector('#theQuote')?.text,
      message: root.querySelector('#messageBox')?.text
    })
  });

  return {
    props: {
      greatdayQuote: res.quote,
      greatdayMessage: res.message
    },
  };
};