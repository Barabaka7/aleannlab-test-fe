export const convertSalaryString = (salary: string | undefined) => {
  if (!salary) return "no money";
  return `€ ${salary
    .split("-")
    .map((s) => `${parseInt(s)} 000`)
    .join("—")}`;
  //68k-96k
};
