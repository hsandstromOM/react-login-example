import React from 'react'
const LoginView = () => (
  <form className="form-signin">
     <div className="text-center mb-4">
       <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
     </div>

     <div className="form-label-group">
       <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
       <label htmlFor="inputEmail">Email address</label>
     </div>

     <div className="form-label-group">
       <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
       <label htmlFor="inputPassword">Password</label>
     </div>

     <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
   </form>
)
export default LoginView
