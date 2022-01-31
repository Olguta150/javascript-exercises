const ftoc = function(ftemp) {
  let ctemp = (ftemp - 32) * (5 / 9);
  let ctempRounded = Math.round(ctemp * 10) / 10;
  return ctempRounded;
};

const ctof = function(ctemp) {
  let ftemp = ctemp * (9 / 5) + 32;
  let ftempRounded = Math.round(ftemp * 10) / 10;
  return ftempRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
