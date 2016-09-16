import React from 'react';

import '../../sass/main.scss';

class App extends React.Component {
  render() {
    let { children } = this.props

    return (
      <div className="container">
				<div className="row">
					<div className="col-md-4 offset-md-4">
						<header>
							<h1>React Starter</h1>
						</header>
						{ children }

						<article>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur optio earum eaque impedit natus et voluptate, libero fugiat explicabo. Quia eos distinctio tenetur eligendi harum autem earum adipisci asperiores possimus.
							</p>
						</article>
					</div>
				</div>
      </div>
    );
  }
}

export default App;
