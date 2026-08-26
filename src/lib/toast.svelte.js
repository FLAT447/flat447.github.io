export const toast = $state({ id: 0, text: '' });

/** @param {string} text */
export function showToast(text) {
  toast.id += 1;
  toast.text = text;
}
