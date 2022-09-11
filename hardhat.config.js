/*
 * @Author: hsl947 1506070803@qq.com
 * @Date: 2022-09-11 17:45:01
 * @LastEditors: hsl947 1506070803@qq.com
 * @LastEditTime: 2022-09-11 17:54:39
 * @FilePath: \Week8-Random\hardhat.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "optimism-goerli": {
       url: process.env.REACT_APP_ALCHEMY_API_URL,
       accounts: [process.env.REACT_APP_PRIVATE_KEY]
    }
  }

};
