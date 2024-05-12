module.exports = function (api) {
    // Enable caching to improve build performance by caching the results
    // of Babel transformations based on the contents of the configuration file.
    api.cache(true);

    // Return an object representing the Babel configuration.
    return {
        // Specify the presets to use for transforming your code.
        // 'babel-preset-expo' is a preset that includes all the necessary
        // Babel plugins and settings required for Expo projects.
        presets: ['babel-preset-expo'],
    };
};