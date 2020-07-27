// lesson 130 exporing babel
// npm init
// npm install babel-preset-env@1.6.1
// above is the module
// npm install webpack@4.5.0 webpack-cli@2.0.14
// write "webpack": "webpack" in the package.json file made by babel-preset-env under "scripts" line
// make a new file in boilerplate called webpack.config.js
/* put this code inside of webpack.config.js
const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: 'scripts/'
    },
    devtool: 'source-map'
}

*/

import { createNote } from './notes'
import { setFilters } from './filters'
import { renderNotes } from './views'


// filter doesn't filter it sorts

renderNotes()

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = createNote()
    location.assign(`edit.html#${id}`)
})


document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {   
        renderNotes()
    }
})




  

