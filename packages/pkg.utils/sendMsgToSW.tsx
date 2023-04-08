// @ts-nocheck
export const sendMsgToSW = (data = {}) => {
  if (navigator && navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage(data);
  }
};
