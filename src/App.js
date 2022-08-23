import React from "react";

const App = () => {
	return (
		<div>
			<nav className='navbar'>
				<div>
					<img
						src='https://res.cloudinary.com/practicaldev/image/fetch/s--R9qwOwpC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/78hs31fax49uwy6kbxyw.png'
						alt='Dev.to'
						className='logo'
					/>
				</div>
				<div>
					<h3>Notification</h3>
				</div>
			</nav>
			<div className='input__container'>
				<form className='input__form'>
					<label htmlFor='title'>Title</label>
					<input name='title' type='text' id='title' />

					<textarea
						name='post'
						id='post'
						rows='7'
						placeholder='Write the contents'
					></textarea>
					<div>
						<button className='sendBtn'>SEND POST</button>
					</div>
				</form>
			</div>

			<div className='articles__container'>
				<h1>Recent Articles</h1>
				<div className='article'>
					<h2>How to build a Slack clone</h2>
					<p className='article__content'>
						In the previous article in this series, we talked about Socket.io,
						how you can send messages between a React app client and a Socket.io
						server, how to get active users in your web application, and how to
						add the "User is typing..." feature present in most modern chat
						applications. In this final article, we'll extend the chat
						application features. You will learn how to keep your users engaged
						by sending them desktop notifications when they are not online and
						how you can read and save the messages in a JSON file. However, this
						is not a secure way of storing messages in a chat application. Feel
						free to use any database of your choice when building yours.
					</p>
				</div>
				<div className='article'>
					<h2>How to build a chat application using React & Socket.io</h2>
					<p className='article__content'>
						In the previous article in this series, we talked about Socket.io,
						how you can send messages between a React app client and a Socket.io
						server, how to get active users in your web application, and how to
						add the "User is typing..." feature present in most modern chat
						applications. In this final article, we'll extend the chat
						application features. You will learn how to keep your users engaged
						by sending them desktop notifications when they are not online and
						how you can read and save the messages in a JSON file. However, this
						is not a secure way of storing messages in a chat application. Feel
						free to use any database of your choice when building yours.
					</p>
				</div>
				<div className='article'>
					<h2>Create a bidding system using React.js & Socket.io</h2>
					<p className='article__content'>
						In the previous article in this series, we talked about Socket.io,
						how you can send messages between a React app client and a Socket.io
						server, how to get active users in your web application, and how to
						add the "User is typing..." feature present in most modern chat
						applications. In this final article, we'll extend the chat
						application features. You will learn how to keep your users engaged
						by sending them desktop notifications when they are not online and
						how you can read and save the messages in a JSON file. However, this
						is not a secure way of storing messages in a chat application. Feel
						free to use any database of your choice when building yours.
					</p>
				</div>
				<div className='article'>
					<h2>Sending notifications using Socket.io & Websockets</h2>
					<p className='article__content'>
						In the previous article in this series, we talked about Socket.io,
						how you can send messages between a React app client and a Socket.io
						server, how to get active users in your web application, and how to
						add the "User is typing..." feature present in most modern chat
						applications. In this final article, we'll extend the chat
						application features. You will learn how to keep your users engaged
						by sending them desktop notifications when they are not online and
						how you can read and save the messages in a JSON file. However, this
						is not a secure way of storing messages in a chat application. Feel
						free to use any database of your choice when building yours.
					</p>
				</div>
			</div>
		</div>
	);
};

export default App;
