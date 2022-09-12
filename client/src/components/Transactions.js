import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress';
import useFetch from '../hooks/useFetch';

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  amount,
  keyword,
  url,
}) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="col-3">
      <div className="transaction-card">
        <a
          className="text-white"
          href={`https://ropsten.etherscan.io/address/${addressFrom}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>From: {shortenAddress(addressFrom)}</p>
        </a>
        <a
          className="text-white"
          href={`https://ropsten.etherscan.io/address/${addressTo}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>To: {shortenAddress(addressTo)}</p>
        </a>
        <p className="text-white">Amount: {amount} ETH</p>
        {message && (
          <>
            <br />
            <p>Message: {message}</p>
          </>
        )}
        <div className="gif-img-block">
          <img src={gifUrl || url} alt="gif" />
        </div>
        <div className="timestamp-tag">
          <p className="mb-0">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { currentAccount } = useContext(TransactionContext);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          {currentAccount ? (
            <h3 className="w-100 d-flex justify-content-center t-24">
              Latest Transactions
            </h3>
          ) : (
            <h3>Please connect your account to see the latest transactions</h3>
          )}

          <div className="d-flex flex-wrap">
            {dummyData.reverse().map((transaction, i) => (
              <TransactionCard key={i} {...transaction} /> // transaction destructing
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
