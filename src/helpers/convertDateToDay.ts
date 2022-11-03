export const convertDate = (date: string | undefined) => {
  if (!date) return "no date";
  const renderingDate = new Date();
  const postingDate = new Date(date);

  const passingDays = Math.floor(
    (renderingDate.getTime() - postingDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return passingDays;
};
