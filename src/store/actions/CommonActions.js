
export const LOADING_TOGGLE_ACTION = "[Loading action] toggle loading";

export function loadingToggleAction(status) {
    return {
      type: LOADING_TOGGLE_ACTION,
      payload: status,
    };
}