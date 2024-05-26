const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const envList = ['local', 'prod'];
require('dotenv').config()

function getVariable(key) {
  if (process.env[key]) {
    return `'${process.env[key]}'`
  }
  return null
}

envList.forEach(en => {
  const envPath = en !== 'local' ? `.${en}` : '';

  const envFile = `export const environment = {
    NODE_ENV: ${getVariable('NODE_ENV')},
    GA_ID: ${getVariable('GA_ID')},
    FIREBASE_CONFIG: ${process.env.FIREBASE_CONFIG || null},
  };
`;

  const targetPath = path.join(__dirname, `./src/environments/environment${envPath}.ts`);
  fs.writeFile(targetPath, envFile, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(successColor, `${checkSign} Successfully generated ${en} environment file`);
    }
  });
});
