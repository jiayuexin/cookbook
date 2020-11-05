// 配置信息可以参考：https://www.npmjs.com/package/customize-cra
const {
    override,
    disableEsLint,
    addWebpackAlias,
    fixBabelImports
} = require("customize-cra");
const path = require("path");

module.exports = override(
    // 在webpack中禁用eslint
    disableEsLint(),

    // 添加webpack别名
    addWebpackAlias({
        ["@"]: path.resolve("./src"),
    }),
    // 按需加载样式&组件代码
    fixBabelImports("import", {
        libraryName: "antd-mobile",
        style: "css",
    })
);