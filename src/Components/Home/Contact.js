import React from 'react';

const Contact = () => {
    const handleSubmit=e=>{
        e.preventDefault()
    }
    return (
        <div className='mb-5  w-[300px] mx-auto '>
            <h1 className='text-center font-bold'>Contact Me</h1>
            <form className='w-full mx-auto' onSubmit={handleSubmit} action="https://formsubmit.co/bca297d6b8769d7e0fe891d12114cec5" method="POST">
            <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
   
  </label>
  <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" required/>
  
</div>
            <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Message</span>
   
  </label>
  <input type="text" placeholder="Message" class="input input-bordered w-full max-w-xs" required />
  
</div><br/>
     <button className='btn btn-primary' type="submit">Send</button>
</form>
        </div>
    );
};

export default Contact;