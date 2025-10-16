export const SnackBarMessageResponse = (response) => {
  if (
    response !== null &&
    response !== undefined &&
    response?.message?.length > 0
  ) {
    if (response.message[0].status < 202) {
      return `200: ${response.message[0].description}`;
    } else if (response.message[0].status > 499) {
      return `500: ${response.message[0].description}`;
    } else {
      return `202: ${response.message[0].description}`;
    }
  }
};
