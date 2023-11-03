import React from 'react'
import signUpimg from '../assets/signup.png'
import Template from '../components/Template';

const Signup = (setIsLoggedIn) => {
  return (
    <div>
      <Template
        title='Join the millions learning to code with StudyNotion for free'
        desc1="Big skills for Today,Tomorrow and Beyond."
        desc2="Education to future-proof your career."
        image={signUpimg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup