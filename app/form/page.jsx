'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import axiosUrl from '../lib/Axios'

// async function getData() {
//     const res = await fetch('http://localhost:3333')

//     if (!res.ok) {

//         throw new Error('Failed to fetch data')
//     }

//     return res.json()
// }

function page() {
    // const data = getData()
    // console.log(data, "hai");
    const [data, setData] = useState({})
    useEffect(() => {
        const getData = async () => {
            try {
                const urlData = await axios.get('http://localhost:3333/posts')
                setData(urlData)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])
    console.log(data);
    return (
        <form className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Title Post </label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    " placeholder="type title" required />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Id Category</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    " required />
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>

    )
}

export default page