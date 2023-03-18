import Head from "next/head";
import Link from "next/link";
import WeddingSeatingArrangement from "./tables";
import Groups from "./api/data.json";

export default function LandingPage(): JSX.Element {
  const groups: {[key: string]: string[]} = Groups;
  return (
    <>
      <Head>
        <title>N+E Seating Arrangements</title>
        <meta name="description" content="Landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4 pt-12">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-2">
          Table Arrangements
        </h1>
        <div className="text-center text-lg italic text-gray-500 mb-6 pt-2">
          Feel free to sit anywhere within your table!
        </div>
        <hr />  
        <div className="pt-8 grid grid-cols-5 gap-6">
          {groups && Object.keys(groups).map((table, index) => (
            <div key={index}>
              <WeddingSeatingArrangement
                tableName={table}
                tableSeats={groups[table]}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}