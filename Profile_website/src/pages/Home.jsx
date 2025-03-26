import React from "react";

function Home() {
    return (
        <>
            <div className = "flex flex-row justify-center mt-10">
                <section className = "flex flex-col max-w-sm">
                    <article className = "break-words max-w-sm">
                        <p className="text-3xl font-bold">Hello, it's me</p>
                        <h className="text-5xl font-bold">Artist John</h>
                        <p className="text-3xl font-bold">I'm an artist</p>
                        <p className="text-l font-bold">Please hold your breath as we dive into a world full of creativity with designer john</p>
                    </article>
                    <section className = "flex flex-row mt-2">
                        <img className="max-h-10 mr-5" src="src/assets/icons/FBIcon.png" alt="facebook"/>
                        <img className="max-h-10 mr-5" src="src/assets/icons/IGIcon.png" alt="instagram"/>
                        <img className="max-h-10 mr-5" src="src/assets/icons/MIcon.png" alt="mail"/>
                    </section>
                    <button className = "bg-green-500 text-white hover:bg-green-700 p-2 shadow-md rounded-full max-w-30 mt-2">
                        My Portfolio
                    </button>
                </section>
                <img className="max-h-100" src="src/assets/image/Mew.jpg" alt="Mewing"/>
            </div>
        </>
    );
};

export default Home;