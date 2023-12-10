export const SUBMIT_FORM = "SUBMIT_FORM";

export const submitForm = (formData: any) => ({
  type: SUBMIT_FORM,
  payload: formData,
});
