import { useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import Loader from './Loader';
import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
  } = useContext(TransactionContext);
  // const connectWallet = () => {};

  // const InputHandleChange = () => {};

  const handleFormSubmit = e => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;
    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <>
      <div className="container welcome">
        <div className="row">
          <div className="col">
            <div className="d-flex">
              <div className="col-7">
                <div className="mb-5">
                  <h1 className="title">Send Crypto </h1>
                  <h1 className="title">across the world</h1>
                </div>
                <div className="mb-5">
                  <h3 className="subtilte">
                    Explore the crypto world. Buy and sell
                  </h3>
                  <h3 className="subtilte">
                    cryptocurrencies easily on Krypto.
                  </h3>
                </div>
                {!currentAccount && (
                  <button
                    className="welcome-btn d-flex align-items-center"
                    onClick={connectWallet}
                  >
                    <AiFillPlayCircle className="text-white mr-2" />
                    Connect Wallet
                  </button>
                )}
              </div>
              <div className="col-4">
                <div className="credit-card mb-5 p-4 d-flex flex-column justify-content-between">
                  <div className="d-flex justify-content-between">
                    <SiEthereum fontSize={21} color="#fff" />
                    <BsInfoCircle fontSize={17} color="#fff" />
                  </div>
                  <div>
                    <div className="address">
                      {shortenAddress(currentAccount)}
                    </div>
                    <div className="Ethereum">Ethereum</div>
                  </div>
                </div>
                <div className="form-bg">
                  <form className="credit-card-form">
                    <input
                      className="credit-card-input"
                      name="addressTo"
                      type="text"
                      placeholder="Address to"
                      value={formData.addressTo}
                      onChange={handleChange}
                    />
                    <input
                      className="credit-card-input"
                      name="amount"
                      type="number"
                      step="0.0001"
                      placeholder="Amount(ETH)"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                    <input
                      className="credit-card-input"
                      name="keyword"
                      type="text"
                      placeholder="Keyword(Gif)"
                      value={formData.keyword}
                      onChange={handleChange}
                    />
                    <input
                      className="credit-card-input"
                      name="message"
                      type="text"
                      placeholder="Enter message"
                      value={formData.message}
                      onChange={handleChange}
                    />

                    {false ? (
                      <Loader />
                    ) : (
                      <button className="send-btn" onClick={handleFormSubmit}>
                        Send now
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
