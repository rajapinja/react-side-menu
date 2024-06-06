import React, { useRef, useState, useEffect, useContext } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Tshirts from '../images/Colorful-Tshirts.png';


const inputs = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '0 0 0 5px',
}

const RazorPay = () => {

  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('');
  const [receipt, setReceipt] = useState('');
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [paymentId, setPaymentId] = useState('');

  const BASE_RUL = 'https://edf7-2405-201-c032-b1d4-a471-6252-37f6-204f.ngrok-free.app'  

  useEffect(() => {

    const script = document.createElement('script');
    const loadRazorpayScript = () => {        
     
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    //   return () => {
    //     document.body.removeChild(script);
    //   };

    };

    loadRazorpayScript();

    return () => {
      setAmount(0);
      setCurrency('');
      setReceipt('');
      document.body.removeChild(script);
    };
  }, []);


  const PaymentHandler = async (e) => {       

    const response = await fetch(`${BASE_RUL}/api/razorpay-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount:amount, currency:currency, receipt:receipt }),
      });

      const order = await response.json();
      console.log("order : ",order);
      setOrderId(order.id);

    // console.log("Inside handlePay ",amount, currency, receipt )
        const options = {
        key: 'rzp_test_a2sCtci739a9RC',
        amount: amount,
        currency: currency,
        name: 'LARAID SOLUTIONS',
        description: 'Test Transaction',
        image: Tshirts,
        order_id: order.id,
        handler: async function (response) {

            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)

            // const razorpay_payment_id =response.razorpay_payment_id; 

            // const validateRes = await fetch(`${BASE_RUL}/api/signature-validation`, {
            //     method: 'POST',               
            //     headers: {
            //       'Content-Type': 'application/json'
            //     },          
            //     body: JSON.stringify({razorpay_payment_id, orderId})    
            //   });
            //   const jsonRes = await validateRes.json();
            //   console.log(jsonRes)
        },        
        prefill: {
            name: 'Raja Pinja',
            email: 'raja.pinja@gmail.com',
            contact: '9347160365',
        },
        notes: {
            address: 'Razorpay Corporate Office',
        },
        theme: {
            color: '#3399cc',
        },
        };

        const rzp1 = new window.Razorpay(options);

        rzp1.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
        });

        rzp1.open();
        e.preventDefault();
    };

 
   // Function to handle razor order
  const handleRazorPayOrder = async () => {
    try {

     console.log("Amount :",amount,"Currency :", currency, "receipt :",receipt);
      const response = await fetch(`${BASE_RUL}/api/razorpay-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount:amount, currency:currency, receipt:receipt }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("data  order_id:", data.order.id);
        setOrderId(data.order.id);
       
        console.log("Before handlePay() :")
        PaymentHandler();
     
      } else {
        console.error('Order creation failed');
      }
    } catch (error) {
      console.error('Error during Order creation:', error);
    }
  }; 

  return (
    <div className='inputCenter scrollable-container'>
      {/* <h1>Freelancer and Remoteworker Collaboration Platform</h1> */}

      <h2 >RazorPay Checkout</h2>
      <div className='inputs scrollable-content' >
        <img src={Tshirts}/>
        <label>Amount :</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          //ref={userRef}
        />
         <label>Currency :</label>
        <input
          type="text"
          placeholder="Currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />    

        <label>setReceipt :</label>
        <input
          type="text"
          placeholder="Receipt"
          value={receipt}
          onChange={(e) => setReceipt(e.target.value)}
        />    
       
      </div>

        <div>
            <button id="rzp-button1" onClick={PaymentHandler}>Pay</button>  
        </div>   
      
    </div>
  );
};

export default RazorPay;
