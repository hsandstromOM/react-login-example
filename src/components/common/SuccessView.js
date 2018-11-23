import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router";

const SuccessView = () => (
  <div className="container">
  <video className="img-fluid" src="https://media.giphy.com/media/l3vR8ppV86TPECpZC/giphy.mp4" autoPlay loop/>
  <Link to="/" className="">Back to Login Page</Link>

  </div>
)
export default SuccessView
