import { getLogger } from './log.js';
import { env } from './env.js';

const log = getLogger('main');

async function main() {
  log.info({ env });
}

main().catch(console.error);
