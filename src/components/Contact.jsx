import React from 'react'

const Contact = () => {
  return (
    <section class='contact' id='contact'>
      <div className="container">
        <div className="center">
        <h3>Let's Talk About Everything</h3>
          <p>Don't Like Forms? Send Me An Email</p>
        </div>

        <div className="action">
          <form>
          <input type="email" name="email" placeholder="Enter Your Email" required />
          <input type="submit" name="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>

  )
}

export default Contact