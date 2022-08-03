import { readFileSync } from 'fs';
import fetch from 'node-fetch';
import iconv from 'iconv-lite';
import { parse } from 'csv-parse/sync';

function fromFile() {
  const rawData = readFileSync('sample_jis.csv');
  const data = iconv.decode(rawData, 'shiftjis');
  const records = parse(data);
  console.log(JSON.stringify(records, null, 2));
}

async function fromNetwork() {
  // run `npx serve .`
  const response = await fetch('http://localhost:3000/sample_jis.csv');
  const data = iconv.decode(Buffer.from(await response.arrayBuffer()), 'shiftjis');
  const records = parse(data);
  console.log(JSON.stringify(records, null, 2));
}
