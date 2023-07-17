module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "@vue/typescript/recommended", "plugin:vue/vue3-essential", "@vue/standard"],
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
    },
    rules: {
        // 這邊可以自訂規則
        "no-debugger": "off",
        "no-console": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error"
    },
};
