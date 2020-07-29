const stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514]

const random = stuff[Math.floor(Math.random() * stuff.length)]

const linearSearch = () => { 
  for (let i = 0; i < stuff.length; i++) {
    if (stuff[i] === random) {
      return i
    }
  }
}

const { Suite, filter } = require('benchmark')

const suite = new Suite()

suite
  .add('Linear Search', linearSearch)
  .on('complete', function () {
    const benchmark = filter(this, 'successful')[0]
    console.log(benchmark.name, benchmark.stats.mean)
  })
  .run()
