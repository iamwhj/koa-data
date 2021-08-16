module.exports =  () => {
  return {
    type: "confirm",
    name: "panel",
    message: "use data panel for mongodb? (beta 1.x)",
    when: (answer) => {
      return answer.mongodb
    }
  }
}