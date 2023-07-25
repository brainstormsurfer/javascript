const checkPasswordStrength = (password) => {
  if (password.length > 7) {
    if ('[/A-Z/]'.test(password)) {
      return "Very Strong";
    } else {
      return "Strong";
    }
  } else {
    return "Weak";
  }
};

console.log(checkPasswordStrength("rasasasaN"));
