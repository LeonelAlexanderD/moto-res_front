export const formatDDMMYY_HMS = (date) => {
  if (!(date === undefined || date === null)) {
    date = new Date(date.toString())
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    const hour = String(date.getHours()).padStart(2, "0");;
    const minutes = String(date.getMinutes()).padStart(2, "0");;
    const seconds = String(date.getSeconds()).padStart(2, "0");;

    const formattedDate = `${day}/${month}/${year} ~ ${hour}:${minutes}:${seconds}`;

    return formattedDate;
  }
};
