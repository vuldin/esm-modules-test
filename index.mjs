import test from './test'

async function main() {
  let result = 'index'
  result += await test()
  console.log(result)
}

main()
