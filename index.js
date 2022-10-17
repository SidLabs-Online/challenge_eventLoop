function time(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

async function sid() {
  await time(2000)
  console.log("hola! ")
  await time(2000)
  console.log("heyi!")
  await time(1000)
  console.log("Bro")


}
sid()
console.log("S\nI")
setTimeout(() => console.log("D"), 10)