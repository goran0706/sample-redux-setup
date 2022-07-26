import './App.css';
import { connect } from 'react-redux';
import { deposit, withdraw } from './actions/index';

function App({ deposits, withdrawals, balance, deposit, withdraw }) {
	return (
		<div className='App'>
			<h1>Redux</h1>

			<div className='action'>
				<code>
					<p>
						dispatch(deposit('0xB328801E0c01421DB2817cD2208A4b02358fEefb', 100))
					</p>
				</code>
				<button
					onClick={() =>
						deposit('0xB328801E0c01421DB2817cD2208A4b02358fEefb', 100)
					}>
					Deposit +
				</button>
			</div>
			<div className='action'>
				<code>
					<p>
						dispatch(withdraw('0xB328801E0c01421DB2817cD2208A4b02358fEefb',
						100))
					</p>
				</code>
				<button
					onClick={() =>
						withdraw('0xB328801E0c01421DB2817cD2208A4b02358fEefb', 100)
					}>
					Withdraw -
				</button>
			</div>

			<div className='balance'>
				<p>Balance: {balance}</p>
			</div>

			<div className='history'>
				<div>
					<h2>Deposits history:</h2>
					<ul>
						{deposits.map((deposit, i) => (
							<li key={i}>
								<p>{deposit.address}</p>
								<p>{deposit.amount}</p>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h2>Withdrawals history:</h2>
					<ul>
						{withdrawals.map((withdrawal, i) => (
							<li key={i}>
								<p>{withdrawal.address}</p>
								<p>{withdrawal.amount}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

// Map state and dispatch to props
const mapStateToProps = state => {
	return {
		deposits: state.deposits,
		withdrawals: state.withdrawals,
		balance: state.balance,
	};
};

const mapDispatchToProps = {
	deposit,
	withdraw,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
