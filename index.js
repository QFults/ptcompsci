const stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514]

const random = stuff[Math.floor(Math.random() * stuff.length)]

for (let i = 0; i < stuff.length; i++) {
  if (stuff[i] === random) {
    console.log(stuff[i], random, i)
  }
}

