const path = require('path');

const BASE_DIRECTORY = path.resolve(__dirname, '..');
const OUTPUT_DIRECTORY_NAME = 'build';
const OUTPUT_DIRECTORY = path.resolve(BASE_DIRECTORY, OUTPUT_DIRECTORY_NAME);
const SOURCE_DIRECTORY = path.resolve(BASE_DIRECTORY, 'src');
const ENTRY_FILE_PATH = path.resolve(SOURCE_DIRECTORY, 'index.js');

module.exports = {
  BASE_DIRECTORY,
  ENTRY_FILE_PATH,
  OUTPUT_DIRECTORY,
  OUTPUT_DIRECTORY_NAME,
  SOURCE_DIRECTORY,
};
