import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
// import PropTypes from 'prop-types';
// import ReCAPTCHA from "../../node_modules/react-google-recaptcha";

const  Contact = () => {
  const  [verified, setVerified] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Contact.propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   message: PropTypes.string.isRequired,
  // };

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value})

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // I4G1_4F-KljyGFqGc
    // portfolio_template
    // portfolio_contact

    emailjs.send('portfolio_contact', 'portfolio_template', {from_name: form.name, to_name: 'Stray', from_email: form.email, to_email: 'aiguadelstraydine@gmail', message: form.message,}, 'I4G1_4F-KljyGFqGc' ).then(() => {
      setLoading(false);
      alert('Merci pour votre message. Je vous répondrai dans les plus brefs délais.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)

      console.log(error);

      alert('Il y a un probleme.')
    })
  }

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl" >
        <p className={styles.sectionSubText}>N'hésitez pas à me contacter pour discuter de vos projets, idées ou collaborations !</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ton Nom</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder ="Quel est ton nom ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ton Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder ="Quel est ton email ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ton Message</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder ="Qu'est-ce que tu veux dire ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
          </label>
          {/* <label className="flex flex-col">
            <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} />
          </label> */}
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            { loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");