module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            '@babel/plugin-proposal-class-properties', // Enables class properties syntax
            '@babel/plugin-proposal-object-rest-spread', // Enables object spread/rest syntax
            'react-native-reanimated/plugin', // Required for using Reanimated library
        ],
    };
};