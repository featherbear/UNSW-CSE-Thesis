const xml2js = require('xml2js'),
  fs = require('fs'),
  path = require('path'),
  sirv = require('sirv'),
  polka = require('polka')
// puppeteer = require('puppeteer')

let httpRoot = path.join(__dirname, '../public')
let workDir = path.join(httpRoot, 'presentations')

let server = polka()
  .use(sirv(httpRoot))
  .listen(3000, async () => {
    const BASE_HOST = `http://localhost:${server.server.address().port}`
    console.log('Server available at ' + BASE_HOST)
    let data = await xml2js.parseStringPromise(
      fs.readFileSync(path.join(workDir, 'index.xml'), 'utf8')
    )

    // const browser = await puppeteer.launch({ headless: true })
    let promises = []

    function execCommand (cmd, header) {
      return new Promise((resolve, reject) => {
        let proc = require('child_process').spawn(cmd[0], cmd.slice(1))
        proc.stdout.on('data', function (data) {
          console.log(header, data.toString().trim())
        })
        proc.stderr.on('data', function (data) {
          console.log(header, data.toString().trim())
        })
        proc.on('exit', function (code) {
          resolve(code)
        })
      })
    }

    for (let {
      link: [link, ..._]
    } of data.rss.channel[0].item) {
      let linkSplit = link.split('/').filter(v => v)
      let fileName = linkSplit[linkSplit.length - 1]
      console.log('Exporting ' + link + ' to ' + fileName + '.pdf')

      promises.push(
        execCommand(
          [
            'node',
            './node_modules/decktape/decktape.js',
            ['--size', '1920x1080', '--load-pause', '10000'],
            BASE_HOST + link,
            path.join(workDir, fileName + '.pdf')
          ].flat(),
          fileName
        )
      )

      // const page = await browser.newPage()
      // await page.goto(BASE_HOST + link + '?print-pdf', {
      //   waitUntil: 'networkidle0'
      // })

      // await page.pdf({
      //   path: path.join(workDir, fileName + '.pdf'),
      //   landscape: true,
      //   preferCSSPageSize: true,
      //   printBackground: true,
      //   displayHeaderFooter: false,
      //   omitBackground: false
      // })
    }

    await Promise.all(promises)

    console.log('Shutting down server')
    // browser.close()
    server.server.close()
  })
