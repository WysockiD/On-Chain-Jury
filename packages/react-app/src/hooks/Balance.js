import { useState, useEffect, useCallback } from "react";
import usePoller from "./Poller";
import useOnBlock from "./OnBlock";



let DEBUG = false

export default function useBalance(provider, address, pollTime = 0) {

const [balance, setBalance] = useState();

const pollBalance = useCallback(async (provider, address) => {
  if (provider && address) {
    const newBalance = await provider.getBalance(address);
    if (newBalance !== balance) {
      setBalance(newBalance);
    }
  }
}, [provider, address]);

// Only pass a provider to watch on a block if there is no pollTime
useOnBlock((pollTime === 0)&&provider, () => {
  if (provider && address && pollTime === 0) {
    pollBalance(provider, address);
}
})

// Use a poller if a pollTime is provided
usePoller(async () => {
  if (provider && address && pollTime > 0) {
    if (DEBUG) console.log('polling!', address)
    pollBalance()
  }
}, pollTime, provider && address)

return balance;
}
