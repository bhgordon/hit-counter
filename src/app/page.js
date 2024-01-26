import React from "react";
import CountButton from "./CountButton";

import { readFile, writeFile } from "../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

function Home() {
  // Read DB File + Destructure
  let { hits } = JSON.parse(readFile(DATABASE_PATH));

  // Update counter
  hits += 1;

  // Persist to DB
  writeFile(DATABASE_PATH, JSON.stringify({ hits }));

  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number <CountButton hits={hits} />.
      </p>
    </main>
  );
}

export default Home;
