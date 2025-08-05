import { useState } from 'react'
import '../App.css'
import './Signup.css'




function Signup() {

  return (
    <>
      <form action="https://httpbin.org/post" method="post">
        <fieldset>
            <legend>Sign Up Details</legend>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required="" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" name="password" pattern="(\d{3})" />
            </div>

            <div>
                <label htmlFor="confirmpassword">Confirm Password:</label>
                <input type="text" id="confirmpassword" name="confirmpassword" pattern="(\d{3})" />
            </div>

            <div>
                <label htmlFor="safety">Safety briefing done:</label>
                <input type="checkbox" id="safety" name="safety" />
            </div>

            <div>
                <label htmlFor="additionalnotes">Additional Notes</label>
                <textarea defaultValue={""} rows="3" />
            </div>
            <div className='form-buttons'>
                <button className="nav-button" type="submit">Submit</button>
                <button className="nav-button" type="reset">Reset</button>
            </div>
        </fieldset>
      </form>
    </>
  )
}

export default Signup
