import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newsletters, setNewsletters] = useState([]);
  const [message, setMessage] = useState('');

  const handleNewsletterChange = (e) => {
    const { value, checked } = e.target;
    setNewsletters((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5002/api/register', {  // Updated port here
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, newsletters }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error registering. Please try again.');
    }
  };

  const sendNewsletter = async () => {
    console.log('Send Newsletter button clicked'); // Added debug log
    try {
      const response = await fetch('http://localhost:5002/api/sendNewsletter', {  // Updated port here
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject: 'Monthly Newsletter', body: 'This is the body of the newsletter.' }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error sending newsletter. Please try again.');
    }
  };

  // return (
  //   <div className="p-8 bg-white shadow-md rounded">
  //     <h2 className="text-center text-3xl font-bold mb-6">Sign Up for Our Newsletter</h2>
  //     {message && <p className="text-center text-green-500">{message}</p>}
  //     <form onSubmit={handleSubmit}>
  //       <div className="mb-4">
  //         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
  //           Email Address
  //         </label>
  //         <input
  //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //           id="email"
  //           type="email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           required
  //         />
  //       </div>
  //       <div className="mb-4">
  //         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
  //           Password
  //         </label>
  //         <input
  //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //           id="password"
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           required
  //         />
  //       </div>
  //       <div className="mb-4">
  //         <label className="block text-gray-700 text-sm font-bold mb-2">Select Newsletters</label>
  //         <label>
  //           <input
  //             type="checkbox"
  //             value="newsletter1"
  //             onChange={handleNewsletterChange}
  //           />
  //           Newsletter 1
  //         </label>
  //         <label>
  //           <input
  //             type="checkbox"
  //             value="newsletter2"
  //             onChange={handleNewsletterChange}
  //           />
  //           Newsletter 2
  //         </label>
  //       </div>
  //       <div className="text-center">
  //         <button className="bg-orange-500 text-white py-2 px-4 rounded" type="submit">
  //           Sign Up
  //         </button>
  //       </div>
  //     </form>
  //     <div className="text-center mt-4">
  //       <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={sendNewsletter}>
  //         Send Newsletter
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default Register;
