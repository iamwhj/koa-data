module.exports =  () => {
  return {
    type: "input",
    name: "packageName",
    message: "Please input packageName: ",
    validate(val) {
      if(val) return true;
      return "Please enter package name"
    }
  }
}