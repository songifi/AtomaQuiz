"use client";
import { useAccount } from "@starknet-react/core";
import AddressBar from "./AddressBar";

function WalletBar({ toggleModal }) {
  const { address } = useAccount();

  return (
    <div className="flex items-center justify-center">
      {address ? (
        <AddressBar />
      ) : (
        <button
          onClick={toggleModal}
          className="text-sm/6 font-semibold lg:text-[#fff] hover:text-[#1F2937] px-3 py-1.5 text-center rounded-3xl hover:lg:bg-[white] lg:bg-[#1F2937]"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default WalletBar;
