import Layout from 'layouts/Main';
import React, { useState } from 'react';
import Link from 'next/link'




export default function ContactPage() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [yourstream, setYourStream] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const streamOptions = ['CSE ','Mechanical', 'Biotechnology']; 

  const handleSubmit = () => {
    if (mobile.length !== 10) {
        alert('Mobile number should be exactly 10 digits.');
        return;
      }
  
      if (!email.includes('@')) {
        alert('Invalid email format. Please include @ in your email.');
        return;
      }
  

    setSubmittedData({
      name,
      mobile,
      email,
      yourstream,
    });

    // Display submitted data for 30 seconds and then clear it
    setTimeout(() => {
      setSubmittedData(null);
    }, 30000); // 30 seconds in milliseconds
  };

  return (

    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <div className="max-w-2xl mx-auto p-4 relative z-10 bg-white shadow-md rounded-lg">
        <h1 className="text-lg md:text-4xl text-center font-sans font-bold mb-8 text-gray-800">
          Contact Us
        </h1>
       

        <form className="space-y-4 mt-4">
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="input-field"
            required
          />
          <input
            type="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile"
            className="input-field"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input-field"
            required
          />
          <div className="relative">
            
            <select
              id="yourstream"
              value={yourstream}
              onChange={(e) => setYourStream(e.target.value)}
              className="input-field"
              required
            >
              <option value="" disabled>Your Stream</option>
              {streamOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="btn-primary"
          >
            Request for a call back
          </button>
        </form>

        {submittedData && (
          <div className="mt-8 bg-green-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800">Submitted Data:</h2>
            <p className="text-gray-600">
              Name: {submittedData.name}<br />
              Mobile: {submittedData.mobile}<br />
              Email: {submittedData.email}<br />
              Your Stream: {submittedData.yourstream}
            </p>
          </div>
        )}
      </div>

      <Link href='/myFeed' prefetch><a>My Social feed</a></Link>
    </div>
    
  );
}
