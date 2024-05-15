import { getLogger } from './log.js';

const log = getLogger('main');

async function main() {
  log.info('Hello world!');
}

main().catch(console.error);
