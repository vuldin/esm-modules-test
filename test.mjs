export default function() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 500, ' > test')
  })
}
