export default () => {
    if (process.env.NODE_ENV != "development") {
        return "https://freshmancaucus.herokuapp.com";
    } else {
        return "";
    }
};
