import React, { useState, useRef } from 'react'
// import ReCAPTCHA from "react-google-recaptcha";
import { Navbar } from '../components'
import FormInput from '../components/form_input/FormInput'
import emailjs from "emailjs-com";
import axios from 'axios';
import './pages.css';

const ContactUs = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the contact form to the server using axios.post
    axios.post('/contact-us/data', {
      name: form.current.username.value,
      email: form.current.email.value,
      organization: form.current.organization.value,
      question: form.current.question.value,
      title: form.current.title.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
    })
      .then((response) => {
        // If the contact form was sent successfully, alert the user
        alert('Success');
        setValues({
          username: '',
          email: '',
          organization: '',
          title: '',
          subject: '',
        });
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          alert(err.response.data.message);
        } else {
          alert('An error occurred while submitting the form.');
        }
      });

    emailjs.sendForm('service_insq4yj', 'template_46j8jos', form.current, 'pzSmAssHG-LfZc60M')
      .then((result) => {
          // show the user a success message
          alert("Message Sent Successfully");
          console.log(result.text);
      }, (error) => {
          // show the user an error
          console.log(error.text);
      });

      e.target.reset();
  }
  const [values, setValues] = useState({
    username: '',
    email: '',
    organization: '',
    title: '',
    subject: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Your name',
      errorMessage: 'NAME is required',
      label: 'NAME *',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Your Email',
      errorMessage: 'EMAIL is required',
      label: 'EMAIL *',
      // pattern: `^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$`,
      required: true,
    },
    {
      id: 3,
      name: 'organization',
      type: 'text',
      placeholder: 'Your Company/School',
      label: 'COMPANY / SCHOOL'
    },
    {
      id: 4,
      name: 'title',
      type: 'text',
      placeholder: 'Title',
      label: 'TITLE'
    },
    {
      id: 5,
      name: 'subject',
      type: 'text',
      placeholder: 'Subject',
      errorMessage: 'SUBJECT is required',
      label: 'SUBJECT',
      required: true,
    },
  ]
  const [question, setQuestion] = useState("Consulting")

  const onOptionChange = e => {
    setQuestion(e.target.value)
  }


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  console.log(values)

  return (
    <>
    <div className='main-container'>
      <Navbar />
        <h2 id='title'>Contact Us</h2>
        <div className="contact-us-container">
          <div className="contact-us-details">
            <h3>Thank you for your interest in Hemllin. Please fill out the form below to ask a question or report a technical problem.</h3>
            <p>Required fields are marked with an asterisk (*).</p>
            <div className="hm-contact-form">
              <form onSubmit={handleSubmit} ref={form} method="post" >
                <div className="contact-us-questions">
                  <h4>I HAVE A QUESTION ABOUT : *</h4>
                  <div className="contact-us-question-options">
                    <div className="contact-us-question-option">
                      <input
                      type="radio"
                      name="question"
                      value="Consulting Services"
                      id="Consulting Services"
                      checked={question === "Consulting Services"}
                      onChange={onOptionChange}
                      />
                      <label htmlFor="Consulting"><p>Consulting Services</p></label>
                    </div>
                    <div className="contact-us-question-option">
                      <input
                      type="radio"
                      name="question"
                      value="Training and Coaching"
                      id="Training and Coaching"
                      checked={question === "Training and Coaching"}
                      onChange={onOptionChange}
                      />
                      <label htmlFor="Coaching"><p>Training and Coaching</p></label>
                    </div>
                    <div className="contact-us-question-option">
                      <input
                      type="radio"
                      name="question"
                      value="Applying to Hemllin"
                      id="Applying to Hemllin"
                      checked={question === "Applying to Hemllin"}
                      onChange={onOptionChange}
                      />
                      <label htmlFor="Applying to Hemllin"><p>Applying to Hemllin</p></label>
                    </div>
                    <div className="contact-us-question-option">
                      <input
                      type="radio"
                      name="question"
                      value="Other Business Inquiries"
                      id="Other Business Inquiries"
                      checked={question === "Other Business Inquiries"}
                      onChange={onOptionChange}
                      />
                      <label htmlFor="Applying to Hemllin"><p>Other Business Inquiries</p></label>
                    </div>
                  </div>
                </div>

                {inputs.map((input) => (
                  <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
                <label htmlFor="message">MESSAGE *</label>
                <textarea id='message' name='message' required></textarea>
                {/* <ReCAPTCHA sitekey="Your client site key" onChange={onChange}/> */}
                  <button className='contact-submit-btn' type='submit'>Submit</button>
              </form>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default ContactUs