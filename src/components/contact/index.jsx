import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Yuborilmoqda...');

    emailjs.send(
      'service_eg2e1vv', // Bu yerga EmailJS Xizmat ID ni kiriting
      'template_tnytsn6', // Bu yerga EmailJS Shablon ID ni kiriting
      {
        from_name: name,
        from_number: number,
        message: message,
        to_email: 'yuldashevrozali08@gmail.com',
      }, 
      'VcplLT9bGY_aJ22wt' // Bu yerga EmailJS Public Key ni kiriting
    ).then((response) => {
      setStatus('Yuborildi');
      setTimeout(() => {
        setStatus('');
      }, 2000); // Statusni 2 soniyadan keyin yashirish
      console.log('SUCCESS!', response.status, response.text);
    }).catch((err) => {
      setStatus('Yuborish muvaffaqiyatsiz tugadi');
      setTimeout(() => {
        setStatus('');
      }, 2000); // Statusni 2 soniyadan keyin yashirish
      console.log('FAILED...', err);
    });
  };

  return (
    <div>
      <div className="contact-left">
        <input 
          type="text" 
          placeholder='Ismingiz' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder='Telefon raqamingiz' 
          value={number} 
          onChange={(e) => setNumber(e.target.value)} 
        />
        <textarea 
          placeholder='Qanday yordam bera olaman?' 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        ></textarea>
        <button onClick={sendEmail}>Yuborish</button>
      </div>
      <div className="contact-right">
        {status && <div className="status">{status}</div>}
      </div>
    </div>
  );
}
