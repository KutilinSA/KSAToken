pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KSAToken is ERC20 {
    constructor(string memory tokenName, string memory tokenSymbol) ERC20(tokenName, tokenSymbol) {}
}