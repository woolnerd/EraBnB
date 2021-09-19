
export const findSelectionRange = (checkIn, checkOut) => {
  let selectionRange;
  if (checkIn === "") {
    selectionRange = {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    };
  } else if (checkIn !== "" && checkOut === "") {
    selectionRange = {
      startDate: checkIn,
      endDate: new Date(),
      key: "selection",
    };
  } else if (checkOut !== "") {
    selectionRange = {
      startDate: checkIn,
      endDate: checkOut,
      key: "selection",
    };
  }
  return selectionRange;
};
