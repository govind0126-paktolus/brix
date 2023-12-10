import { SUBMIT_FORM } from "./action";


const initialState = {
  submittedFormData: null,
};

const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        submittedFormData: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
