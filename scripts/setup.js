import { $ } from 'zx'
import fs from 'fs'

let modifiedProject = false;

const $$ = $({
  quiet: true,
  env: {
    ...process.env,
    TURBO_UI: '0',
  }
})

// Database setup
if (!fs.existsSync('./packages/db/src/dev.db')) {
  modifiedProject = true;

  await $$({ cwd: './packages/db' })`npx prisma db push`;

  console.log(`Generated SQLite3 database file.`);
}

await $$`husky`;
await $$`npm run build`;

if (modifiedProject) {
  console.log('Done setting up project.');
} else {
  console.log(`Project is already set up.`);
}