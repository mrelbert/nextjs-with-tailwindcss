import Head from "next/head";
import WeddingSeatingArrangement from "./tables";
import groups from "./api/data.json";

export default function LandingPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>N+E Seating Arrangements</title>
        <meta name="description" content="Landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-row overflow-x-auto scrollable-container">
        <div className="flex-shrink-0">
          <h1 className="text-center text-3xl font-bold">Table Arrangements</h1>
          <div className="text-center text-lg italic">
            Feel free to sit anywhere within your table!
          </div>
        </div>
        <div className="flex-nowrap flex-row flex-grow">
          <WeddingSeatingArrangement
            tableName="Table 1"
            tableSeats={groups["Table 1"]}
          />
          <WeddingSeatingArrangement
            tableName="Table 2"
            tableSeats={groups["Table 2"]}
          />
          <WeddingSeatingArrangement
            tableName="Table 3"
            tableSeats={groups["Table 3"]}
          />
          <WeddingSeatingArrangement
            tableName="Table 4"
            tableSeats={groups["Table 4"]}
          />
          <WeddingSeatingArrangement
            tableName="Table 5"
            tableSeats={groups["Table 5"]}
          />
          <WeddingSeatingArrangement
            tableName="Table 6"
            tableSeats={groups["Table 6"]}
          />
          <WeddingSeatingArrangement
            tableName="Table 7"
            tableSeats={groups["Table 7"]}
          />
          <WeddingSeatingArrangement
            tableName="Table 8"
            tableSeats={groups["Table 8"]}
          />
          <WeddingSeatingArrangement
            tableName="Table 9"
            tableSeats={groups["Table 9"]}
          />
        </div>
      </div>
    </>
  );
}
