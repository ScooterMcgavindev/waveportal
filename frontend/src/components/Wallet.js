import React from 'react';
import { NavBtn } from './ButtonTest';
function Wallet({ walletInstalled, walletConnected, loading, connectWallet }) {
 
  if (loading) {
    return (<div>Loading...</div>);
  }
	
  return (
		<div>
			<section className='buttonGroup'>
				{!walletInstalled && (
					<a
						className='button NoWallet-button'
						href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related'
						target='_blank'
						rel='noopener noreferrer'
					>
						Install MetaMask
					</a>
				)}
			
				
				{/* {walletInstalled && !walletConnected && (
					<button className='button connect-button' onClick={connectWallet}>
						Connect MetaMask
					</button>
				)} */}
				{/* {walletInstalled && !walletConnected && (
		
						<div className='buttonx' onClick={connectWallet}>
							<div className='slider1'></div>
							<div className='slider2'></div>
						</div>

				)} */}
				
			</section>
		</div>
  )
}

export default Wallet;
