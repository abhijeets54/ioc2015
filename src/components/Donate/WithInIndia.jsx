import React from 'react';

const WithinIndia = () => {
  return (
    <div className=" bg-white mx-auto py-8 px-4">
      <h1 className="text-center text-3xl font-bold mb-6">Donations Within India</h1>
      <p className="text-center mb-4">
        This account is for the Initiators of Change and is ONLY for deposits from within India.
        Please do not send donations from outside India into this account.
      </p>
      <div className="text-center mb-8">
        <p>Account Name: <strong>Initiators of Change</strong></p>
        <p>Bank: <strong>Punjab National Bank</strong></p>
        <p>Account Number: <strong>4433 0021 0000 8197</strong></p>
        <p>IFSC Code: <strong>PUNB0443300</strong></p>
        {/*<p>MIRCR: <strong>110229171</strong></p>
        <p>Branch: <strong>Naraina</strong></p>*/}
      </div>
      <p className="text-center mb-8">
        Please write the cheque payable to <strong>Initiators of Change</strong> and post it to us at the below address
      </p>
      <p className="text-center mb-8">
      1st Floor, Food tree building, Flower Enclave Main Market, near Goyal Hospital, Chownk, Ludhiana, Punjab 141013
      </p>
      <h2 className="text-center text-2xl font-bold mb-4">Now donate online within India</h2>
      <div className="flex justify-center space-x-8">

        <div className="text-center">
          <img src="../../../IOC Website pictures/Donate/razorpay.png" alt="Paytm" className="mx-auto my-2 mb-2 shadow-sm" style={{ width: '125px', height: '100px' }} />

          <img src="../../../IOC Website pictures/Donate/Screenshot 2024-08-04 203552.png" alt="SBI" className="mx-auto mb-2  my-2 " style={{ width: '100px', height: '100px' }} />

          
        </div>

        <div className="text-center">

        <img src="../../../IOC Website pictures/Donate/Screenshot 2024-08-04 203552.png" alt="SBI QR" className="mx-auto  my-2 " style={{ width: '100px', height: '100px' }} />
       

        <img src="../../../IOC Website pictures/Donate/SBI-Logo.png" alt="SBI LOGO" className="mx-auto  my-2 shadow-sm" style={{ width: '120px', height: '100px' }} />   
          

         
        </div>
      </div>
    </div>
  );
};

export default WithinIndia;
