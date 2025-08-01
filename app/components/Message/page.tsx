
'use client';

export default function Message () {

    return ( 
 <div className="font-poppins bg-blue-600 shadow w-full min-h-[40px] flex flex-col items-center justify-center px-4 pt-4">
  <div className="text-center max-w-3xl mb-8">
    <h3 className="font-bold text-4xl text-white mb-2">From message to action</h3>
    <h1 className="text-2xl text-white">Quickly turn communication from your favorite apps into to-dos, keeping all your discussions and tasks organized in one place.</h1>
  </div>

 <img  
 src="/assets/message1.jpg"
  alt="Hero illustration"
  className="w-[300px]  sm:w-[600px] md:w-[800px] lg:w-[1000px] h-auto mb-8 rounded-lg border-4 border-white"
  />
  
   <img  
 src="/assets/message2.jpg"
  alt="Hero illustration"
 className="w-[300px]  sm:w-[600px] md:w-[800px] lg:w-[1000px] h-auto mb-8 rounded-lg border-4 border-white"
  />

   </div>


    )
}


