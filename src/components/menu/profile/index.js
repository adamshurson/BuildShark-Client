import React from 'react';

export default function Profile(props) {
    return <div className="flex flex-col items-center mt-12 shadow-md rounded-lg bg-white hover:shadow-lg">
        <img className="rounded-full h-24 w-24 mx-auto -mt-12 shadow-lg" src='https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/22450041_1855265627820263_143627704589403163_n.jpg?_nc_cat=100&oh=1405671f16138c07b745fb9ede249ada&oe=5C4E6660'/>
        <div className="flex-1 flex flex-col items-center">
            <h4 className="text-xl font-bold text-black mt-4">Adam Shurson</h4>
            <h4 className="text-black mt-2">Creative Building Solutions</h4>
            <h4 className="text-black mt-2">Vice President</h4>
        </div>
        <div className="flex mt-4 w-full overflow-hidden rounded-b-lg">
            <button className="w-1/3 p-4 flex items-center justify-center text-orange hover:text-white bg-white hover:bg-orange">
                Logs
            </button>
            <button className="w-1/3 p-4 flex items-center justify-center text-green hover:text-white bg-white hover:bg-green">
                To-Dos
            </button>
            <button className="w-1/3 p-4 flex items-center justify-center text-blue hover:text-white bg-white hover:bg-blue">
                Messages
            </button>
        </div>
    </div>
}