import React from 'react';

const Contact = () => {
    const handleSubmit=e=>{
        e.preventDefault()
    }
    return (
        <div className='mb-5'>
            <form onSubmit={handleSubmit} action="mailto:aimunnaharr@gmail.com" method='POST' enctype="multipart/form-data">
            <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">What is your name?</span>
    
  </label>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
 
</div>
<input className='btn btn-primary' type='submit'/>
            </form>
        </div>
    );
};

export default Contact;