const { exec } = require('child_process');

const cwd = process.cwd();

const script = process.argv[2];

const files = process.argv
  .slice(3)
  .map((f) => {
    // ng lint's --files argument only works with relative paths
    // strip cwd and leading path delimiter
    return `--files="${f.replace(cwd, '').slice(1)}"`;
  })
  .join(' ');

exec(
  `npm run ${script} -- --tsConfig=tsconfig.json ${files}`,
  (error, stdout) => {
    if (error) {
      console.log(error);
      process.exit(1);
    }
  }
);
