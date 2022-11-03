import parse from "html-react-parser";

export const makeSomeStringMagic = (description: string | undefined) => {
  if (!description) {
    return "No Data";
  }
  let descriptionAdjusted = description
    .split("\n")
    .join("")
    .split("\t")
    .join("")
    .trim();

  descriptionAdjusted = descriptionAdjusted.replace(
    /Responsopilities: +/,
    "<h4>Responsopilities:</h4>"
  ) as string;

  descriptionAdjusted = descriptionAdjusted.replace(
    /Compensation & Benefits: +/,
    "<h4>Compensation & Benefits:</h4>"
  ) as string;

  let descriptionAdjustedTemp = descriptionAdjusted.split("Benefits:</h4>");

  let descriptionBenefits = descriptionAdjustedTemp[1]
    .split(".")
    .map((ben, i) => {
      if (ben) {
        return i !== 0 ? `<li>${ben.trim()}</li>` : `${ben}:<ul>`;
      } else return;
    })
    .join("");
  descriptionAdjusted =
    descriptionAdjustedTemp[0] +
    "Benefits:</h4>" +
    descriptionBenefits +
    "</ul>";

  return parse(descriptionAdjusted);
};
