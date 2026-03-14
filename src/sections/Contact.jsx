import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Mocking emailjs for now to avoid errors if env vars aren't set
    setTimeout(() => {
      setLoading(false);
      showAlert({
        show: true,
        text: 'MESSAGE_TRANSMITTED_SUCCESSFULLY',
        type: 'success',
      });

      setTimeout(() => {
        hideAlert(false);
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, 3000);
    }, 2000);
  };

  return (
    <section className="c-space my-20 font-terminal" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div className="contact-container border border-cyber-green/20 bg-cyber-dark/80 backdrop-blur-xl p-10 rounded-lg shadow-[0_0_50px_rgba(0,255,65,0.1)] relative overflow-hidden">
          {/* Decorative scanner effect */}
          <div className="absolute top-0 left-0 w-full h-1 bg-cyber-green/20 animate-scanline pointer-events-none" />
          
          <h3 className="head-text text-cyber-green uppercase tracking-tighter">&gt; ESTABLISH_CONTACT</h3>
          <p className="text-lg text-cyber-green/60 mt-3 italic">
            Secure channel open. Send your encrypted message below.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label text-cyber-green/40 uppercase text-xs tracking-widest">Operator Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-cyber-green/20 p-4 rounded text-cyber-green focus:border-cyber-green transition-all outline-none"
                placeholder="IDENTIFY_YOURSELF"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label text-cyber-green/40 uppercase text-xs tracking-widest">Return Address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-cyber-green/20 p-4 rounded text-cyber-green focus:border-cyber-green transition-all outline-none"
                placeholder="EMAIL@PROVIDER.SEC"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label text-cyber-green/40 uppercase text-xs tracking-widest">Payload Data</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-black/50 border border-cyber-green/20 p-4 rounded text-cyber-green focus:border-cyber-green transition-all outline-none"
                placeholder="TRANSMIT_INQUIRY_DETAILS..."
              />
            </label>

            <button 
              className="w-full bg-cyber-green/10 border border-cyber-green/50 p-4 rounded text-cyber-green font-bold uppercase tracking-[0.3em] hover:bg-cyber-green hover:text-black transition-all disabled:opacity-50 flex items-center justify-center gap-3" 
              type="submit" 
              disabled={loading}
            >
              {loading ? 'TRANSMITTING...' : 'INITIATE_UPLINK'}
              <img src="assets/arrow-up.png" alt="arrow-up" className="w-4 h-4 invert sepia-[1] hue-rotate-[100deg]" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
