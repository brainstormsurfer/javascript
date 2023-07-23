const getLang = (language) => {
  switch (language) {
    case "Mandarin":
      return "MOST number of native speakers!";
    case "Spanish":
      return "2nd place in number of native speakers!";
    case "English":
      return "3rd place!";
    case "Hindu":
      return "Number 4";
    case "Arabic":
      return "5th most spoken language";
    default:
      return "Not in the Top 5";
  }
};

console.log(getLang("Hindu"));
