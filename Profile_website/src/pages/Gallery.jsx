import React from "react";

function gallery() {
    return (
        <>
            <div className="flex flex-col items-center mt-40 p-4">
                <h1 className="text-center text-5xl font-bold mb-8">Gallery</h1>
                    <div className="grid grid-cols-3 gap-4"> {/* ใช้ grid-cols-3 */}
                    <img src="src/assets/image/car1.webp" alt="car1" className="max-w-70 w-full h-auto object-cover rounded-xl shadow-2xl drop-shadow-2xl"></img>
                    <img src="src/assets/image/car2.avif" alt="car2" className="max-w-70 w-full h-auto object-cover rounded-xl shadow-2xl drop-shadow-2xl"></img>
                    <img src="src/assets/image/car3.avif" alt="car3" className="max-w-70 w-full h-auto object-cover rounded-xl shadow-2xl drop-shadow-2xl"></img>
                    <img src="src/assets/image/car4.avif" alt="car4" className="max-w-70 w-full h-auto object-cover rounded-xl shadow-2xl drop-shadow-2xl"></img>
                    <img src="src/assets/image/car5.jpg" alt="car5" className="max-w-70 w-full h-auto object-cover rounded-xl shadow-2xl drop-shadow-2xl"></img>
                    <img src="src/assets/image/car6.jpg" alt="car6" className="max-w-70 w-full h-auto object-cover rounded-xl shadow-2xl drop-shadow-2xl"></img>
                </div>
            </div>

        </>
    )
}
export default gallery;