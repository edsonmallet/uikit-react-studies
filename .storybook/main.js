module.exports = {
    stories: ['../stories/*.stories.tsx'],
    addons: [],
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
        }
    }
};