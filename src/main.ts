import { env } from './env.js';
import { getLogger } from './log.js';

const log = getLogger('main');

async function main() {
  log.info({ env });
}

main().catch(console.error);
