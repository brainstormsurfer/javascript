const checkPasswordStrength = (password) => {              
      return password.length > 7 ? 
      (new RegExp('[/A-Z/]').test(password)) ?
      'Very Strong' :
      'Strong' :
      'Weak'

}

console.log(
  checkPasswordStrength('rasasasaN')
);