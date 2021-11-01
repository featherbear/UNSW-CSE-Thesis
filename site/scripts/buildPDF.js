const xml2js = require('xml2js'),
  fs = require('fs'),
  path = require('path'),
  sirv = require('sirv'),
  polka = require('polka'),
  childProcess = require('child_process')

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

    let promises = []

    for (let {
      link: [link, ..._]
    } of data.rss.channel[0].item) {
      let linkSplit = link.split('/').filter(v => v)
      let fileName = linkSplit[linkSplit.length - 1]
      console.log('Exporting ' + link + ' to ' + fileName + '.pdf')
      let command = [
        'npx',
        'decktape',
        'reveal',
        BASE_HOST + link,
        path.join(workDir, fileName + '.pdf')
      ].join(' ')
      //   console.log('Executing', command)

      promises.push(
        new Promise((resolve, reject) => {
          childProcess
            .exec(command, (error, stdout, stderr) => {
              if (error) {
                console.error(`error: ${error.message}`)
                return
              }

              if (stderr) {
                console.error(`stderr: ${stderr}`)
                return
              }

              console.log(stdout)
            })
            .on('close', function () {
              resolve()
            })
        })
      )
    }

    console.log("")
    await Promise.all(promises)
    console.log('Shutting down server')
    server.server.close()
  })
