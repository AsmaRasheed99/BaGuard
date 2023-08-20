import React from "react";
import { Carousel } from "@material-tailwind/react";

const Features = () => {
  return (
    <div className="bg-base-200 text-[#102C57] py-10 dark:text-gray-100">
	<div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div className="max-w-3xl mx-auto text-center">
			<h2 className="text-3xl font-extrabold sm:text-4xl">What do we have to offer ?</h2>
		</div>
		<dl className="pt-20 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
			<div className="flex ">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-xl font-bold">Real-time Tracking</dt>
					<dd className="mt-2 text-neutral-500 dark:text-neutral-300">Provide travelers with live updates on the location and status of their luggage through a user-friendly mobile app or web interface.</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-xl font-bold">Geo-Fencing</dt>
					<dd className="mt-2 text-neutral-500 dark:text-neutral-300">Set up virtual boundaries to alert users when their luggage enters or exits designated areas, enhancing security and preventing loss.</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-xl font-bold">Baggage Alerts</dt>
					<dd className="mt-2 text-neutral-500 dark:text-neutral-300">Send notifications to travelers if their luggage is mishandled, delayed, or has an unexpected change in location.
</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-xl font-bold">NFC Technology</dt>
					<dd className="mt-2 text-neutral-500 dark:text-neutral-300">Utilize NFC tags to enable accurate and automated tracking, allowing for quick identification and retrieval of luggage at airports and other transit points.</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-xl font-bold">Integration with Airlines</dt>
					<dd className="mt-2 text-neutral-500 dark:text-neutral-300">Collaborate with airlines to seamlessly sync luggage tracking data, reducing discrepancies and improving the overall travel experience.</dd>
				</div>
			</div>
			
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-xl font-bold">Battery Efficiency</dt>
					<dd className="mt-2 text-neutral-500 dark:text-neutral-300">Design the tracking devices to have long battery life and energy-saving features to ensure they last throughout the journey.</dd>
				</div>
			</div>
		
		</dl>
	</div>
</div>
//     <section id="Features" className="bg-base-200 dark:bg-gray-900 lg:py-16 px-4">
    
//       <div className="grid lg:w-[70%]  py-8 mx-auto lg:gap-8 xl:gap-8 lg:py-16 lg:grid-cols-12">
//         <div className="mr-auto place-self-center lg:col-span-6">
//           <h1 className="max-w-2xl mb-4 text-[#102C57] text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
//             Features
//           </h1>
//           <p className="max-w-2xl mb-6 font-light text-[#102C57] lg:mb-8 md:text-lg lg:text-xl text-neutral-500 dark:text-neutral-300">
//             B1. Real-time Tracking: Provide travelers with live updates on the location and status of their luggage through a user-friendly mobile app or web interface.

// 2. Geo-Fencing: Set up virtual boundaries to alert users when their luggage enters or exits designated areas, enhancing security and preventing loss.

// 3. Baggage Alerts: Send notifications to travelers if their luggage is mishandled, delayed, or has an unexpected change in location.

// 4. NFC Technology: Utilize NFC tags to enable accurate and automated tracking, allowing for quick identification and retrieval of luggage at airports and other transit points.

// 5.Integration with Airlines: Collaborate with airlines to seamlessly sync luggage tracking data, reducing discrepancies and improving the overall travel experience.

// 6.Multi-Language Support: Provide a multilingual interface to cater to travelers from diverse cultural backgrounds.

// 7. Battery Efficiency: Design the tracking devices to have long battery life and energy-saving features to ensure they last throughout the journey.
//           </p>
        
//         </div>
//         <div className="mx-3 lg:mt-0 lg:col-span-6 lg:flex">
//           <Carousel
          
//             className="rounded-xl"
//             navigation={({ setActiveIndex, activeIndex, length }) => (
//               <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//                 {new Array(length).fill("").map((_, i) => (
//                   <span
//                     key={i}
//                     className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                       activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//                     }`}
//                     onClick={() => setActiveIndex(i)}
//                   />
//                 ))}
//               </div>
//             )}
//           >
//             <img
//               src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="fetures"
//               className="h-full w-full object-cover"
//             />
//             <img
//               src="https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="fetures"
//               className="h-full w-full object-cover"
//             />
//             <img
//               src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="fetures"
//               className="h-full w-full object-cover"
//             />
//           </Carousel>
//         </div>
//       </div>
//       <>
 
 
// </>

//     </section>
  );
};

export default Features;
