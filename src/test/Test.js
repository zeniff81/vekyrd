import React, { useState } from 'react';
import { connect } from 'react-redux';
import AdDisplay from '../components/AdDisplay/AdDisplay';
import AdSietePasos from '../components/AdDisplay/AdSietePasos';
import AdPrepoo from '../components/AdDisplay/AdPrepoo';

import './test.css';

const Test = () => {
	let [str, setStr] = useState('2');

	return (
		<div className="test">
			<AdDisplay>
				<button onClick={() => 'mother'}>change str</button>
				<AdPrepoo />
				<AdPrepoo />
				{/* <AdSietePasos /> */}
			</AdDisplay>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);

/**
 import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./test.css";

const Test = () => {
  const [state, setState] = useState("");
  useEffect(() => {}, []);

  console.log(state, setState);

  const test1 = () => {};

  const test2 = () => {};

  return (
    <div className='test'>
      <h1>TEST</h1>
      <hr />
      <button onClick={test1}>Test 1</button>
      <button onClick={test2}>Test 2</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);


 */
