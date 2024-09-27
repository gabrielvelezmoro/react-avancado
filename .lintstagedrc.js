module.exports = {
  //Lint & Prettify TS and JS files
  '*.{js,ts,jsx,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `npm run test -- --findRelatedTests ${filenames.join(' ')}`
  ]
}
