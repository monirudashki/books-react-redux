export const passwordsMatch = (e, setter, formValues) => {
    setter(state => ({
        ...state,
        [e.target.name]: !(formValues.password === formValues.rePass)
    }));
}