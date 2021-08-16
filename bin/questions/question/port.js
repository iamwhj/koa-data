module.exports =  () => {
  return {
    type: "number",
    name: "port",
    message: "Please input port: ",
    default: 3000,
    validate(val) {
      if(typeof val === 'number') return true;
      return "Please enter number for port"
    }
  }
}