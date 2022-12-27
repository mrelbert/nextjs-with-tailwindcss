import Head from "next/head";
import Link from "next/link";

export default function LandingPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="p-8 flex flex-col justify-center items-center">
          <div className="w-4/6 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Quotes</h1>
            <p className="text-gray-700 leading-relaxed mb-8">
              We offer a wide range of products and services to help you achieve your goals.
            </p>
          </div>

          <div className="w-2/6 flex flex-wrap justify-around">
            <Link href="/greatday" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full mr-4 mb-4">
              Greatday.com
            </Link>
            <Link href="/naver" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full mr-4 mb-4">
              Naver.com
            </Link>
            <Link href="/request" className="bg-blue-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full mr-4 mb-4">
              Request
            </Link>
          </div>
        </div>
    </>
  );
}