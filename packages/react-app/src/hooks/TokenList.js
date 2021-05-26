import { useState, useEffect } from "react";



const useTokenList = (tokenListUri, chainId) => {
  const [tokenList, setTokenList] = useState([]);

  let _tokenListUri = tokenListUri || "https://gateway.ipfs.io/ipns/tokens.uniswap.org"

  useEffect(() => {

    const getTokenList = async () => {
      try {
      let tokenList = await fetch(_tokenListUri)
      let tokenListJson = await tokenList.json()
      let _tokenList

      if(chainId) {
        _tokenList = tokenListJson.tokens.filter(function (t) {
          return t.chainId === chainId
        })
      } else {
        _tokenList = tokenListJson
      }

      setTokenList(_tokenList.tokens)

    } catch (e) {
      console.log(e)
    }
    }
    getTokenList()
  },[tokenListUri])

  return tokenList;
};

export default useTokenList;
