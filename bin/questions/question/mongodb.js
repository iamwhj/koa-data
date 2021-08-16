module.exports =  () => {
  return {
    type: "confirm",
    name: "mongodb",
    message: "use mongodb database? (mongoose middleware and general interface)",
    when: (answer) => {
      return answer.router
    }
  }
}