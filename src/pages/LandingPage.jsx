import React from 'react'


function LandingPage() {
  return (
    <div>
    <div class=" banner hero-section">
    <h1>sheCultivates</h1>
    <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#00a082ff"
          fill-opacity="1"
          d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,170.7C672,192,768,224,864,229.3C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
  <div class="container col-xxl-8 px-4">
 
    <div class="row flex-lg-row-reverse align-items-center g-5">
       
      <div class=" banner col-12 col-md-6 col-lg-6">
        <video
          data-v-f4daae2a=""
          data-test-id="animation-video"
          autoplay="autoPlay"
          loop="loop"
          muted="muted"
          width="100%"
          height="auto"
          class="animation__element align-items-center mt-5"
        >
          <source
            data-v-f4daae2a=""
            src="https://res.cloudinary.com/glovoapp/video/upload/website_assets/images/landing/address-container-animation.webm"
            preload="auto"
            type="video/webm"
          />
        </video>
      </div>

      <div class="col-12 col-md-6 col-lg-6">
        <p class="lead fw-lighter">SOW, NURTURE, EMPOWER</p>
        <p className='fw-lighter'> 
        We are dedicated to transforming the landscape of agriculture by sowing the seeds of gender equality.
         Through nurturing the potential of women farmers, we empower them with knowledge, resources, and opportunities to thrive and 
         cultivate a future where every woman in agriculture is empowered to lead, innovate, and create sustainable change in their communities.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button class="btn btn-outline-success px-4">Sign Up</button>
          <button class="btn btn-outline-success  px-4">Log In </button>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- end of hero section --> */}
<div class="curve"></div>
</div>
  )
}

export default LandingPage