import axios from 'axios';
import  {  useState } from 'react'

export const Contact = () => {
    


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e: { preventDefault: any }) => {
    e.preventDefault();

    const service_id = "service_3wmm8k7";
    const template_id = "template_99j6fc8";
    const publicKey = "n0KtA3IgvYT1pRPLG";




    const data = {
      service_id: service_id,
      template_id: template_id,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Manish Sahu",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setName("");
      setEmail("");
      setMessage("");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
       <div>
       <div className='font-pop text-white mt-5 '>
            <h1 className='text-white text-center shadow-2xl font-bold font-pop text-4xl sm:text-5xl'>
                Contact
            </h1>

            <p className='text-white text-center text-xl font-pop pt-4l'>
            Feel free to reach out to me for any questions or opportunities!

            </p>
        </div>

     
           
            <div>
         
            <div className="w-full  flex justify-center items-center font-pop mt-4 pb-5" >
    <div className="py-8 px-6  bg-indigo-400 bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
   
        <h1 className="text-3xl font-extrabold text-center text-white mb-5"> <span>Email Me 🚀</span></h1>
     
        <div className="flex flex-col ">
            <div className="mb-5">
                <label className="text-white font-semibold mb-2" htmlFor="name">Name</label>
            
                <input onChange={((e)=>{
                    setName(e.target.value)
                })} className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" type="text" id="name" name="name" required/>
            </div>
            <div className="mb-5">
                <label className="text-white font-semibold mb-2" htmlFor="email">Email</label>
                
                <input onChange={((e)=>{
                    setEmail(e.target.value)
                })} className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" type="email" id="email" name="email" required/>
            </div>
            <div className="mb-5">
                <label className="text-white font-semibold mb-2" htmlFor="message">Message</label>
                <input onChange={((e)=>{
                    setMessage(e.target.value)
                })}  className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" id="message" name="message"  required/>
            </div>
            <button onClick={handleSubmit} className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-5" type="submit">Send Message</button>
        </div>
    </div>
</div>
        </div>
    </div>
            </div>

     
  )
}
