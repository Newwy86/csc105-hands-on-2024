import React from 'react';

function Home() {
  return (
    <>
            <div className = "bg-white p-4 flex items-center justify-center mt-60 p-4">
                <img className="max-h-100 max-w-100 mr-15" src="src/assets/image/gojomewing.png" alt="GOJO"/>

                <section className = "flex flex-col ">
                    <article className="break-words max-w-sm sm:mt-5">
                        <h1 className="text-5xl font-bold">About me</h1>
                        <p className="text-3xl font-bold mt-3">Artist & Designer</p>
                        <p className="text-l font-bold mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at beatae consequatur dignissimos dolores expedita fugit ipsam laboriosam molestias necessitatibus odit provident quaerat, quasi sapiente sequi similique tempore totam vero!</p>
                    </article>

                    <button className="bg-green-300 rounded-full max-w-25 shadow-md mt-5">Read More</button>
                </section>
            </div>
        </>
  );
};

export default Home;