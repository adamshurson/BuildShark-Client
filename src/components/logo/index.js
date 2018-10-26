import React from 'react';

export default function Logo() {
    return <div className="flex items-center">
        <div className="flex flex-col">
            <h4 className="text-4xl text-blue">BuildShark</h4>
            <h4 className="text-blue-lighter text-right">A better way to build.</h4>
        </div>
        <svg className="-mt-2"
            viewBox="0 0 100 100"
            height={100}
            width={100}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
        >
            <path fill="#6cb2eb"
                      d="M 16 32
           h 68
           v 35
           l -34 23
           l -34 -23"
            />
            <path fill="#2779bd"
                      d="M 16 32
           l 34 -23
           l 34 23
           l -4 3
           h -60"
            />
            <path fill="#3490dc"
                      d="M 50 15
           l 30 20
           v 30
           l -30 20
           l -30 -20
           v -30"
            />
            <path fill="white"
                      d="M 35 30
           q 17.5 10, 35 35
           q -20 -5, -35 0
           q 5 -17.5, 0 -35"
            />
        </svg>
    </div>
}