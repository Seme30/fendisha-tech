import React from "react";
import "../styles/contactintro.css";

const ContactIntro = () => {
  return (
    <section className="section section-contact">
      <div className="container">
        <div className="contact-top">
          <h6 className="subtitle">Contact the Team!</h6>
        </div>
        <form>
					<div class="form-group">
						<label for="firstname">First name*</label>
						<input 
							type="text" 
							name="firstname" 
							id="firstname" 
							required 
							class="form-element"
							placeholder="Abebe" />
					</div>
					<div class="form-group">
						<label for="lastname">Last name*</label>
						<input type="text" name="lastname" id="lastname" required class="form-element" placeholder="Kebede" />
					</div>
					<div class="form-group">
						<label for="email">Email address*</label>
						<input type="email" name="email" id="email" required class="form-element" placeholder="Abebe@example.com" />
					</div>
					<div class="form-group">
						<label for="company">Company</label>
						<input type="text" name="company" id="company" class="form-element" placeholder="Abebe@example.com" />
					</div>
					<div class="form-group full">
						<label for="message">What are you looking for?</label>
						<textarea name="message" id="message" class="form-element" placeholder="I want a website please..."></textarea>
					</div>
					<div className="hero__btns">
              <button className="secondary__btn">Send Message</button>
            </div>
				</form>
      </div>
    </section>
  );
};

export default ContactIntro;
