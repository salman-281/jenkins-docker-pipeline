"use client"
import axios from 'axios'
import React, { useState, ChangeEvent } from 'react'

const Form = () => {

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        area: '',
        city: '',
        state: '',
        postCode: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let response = await axios.post('/api/v1/register', form)
        if (response.data.success) {
            alert('Data submitted successfully')
        }
        setForm({
            name: '',
            phone: '',
            email: '',
            date: '',
            time: '',
            area: '',
            city: '',
            state: '',
            postCode: '',
        })
    }


  return (
    <div className="flex items-center bg-white justify-center p-12">
    <div className="mx-auto w-full p-10 rounded-md max-w-[550px] bg-white">
        <form onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-sans font-medium text-[#07074D]">
                    Full Name
                </label>
                <input type="text" value={form.name} name="name" id="name" placeholder="Full Name" onChange={handleChange}
                    className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label htmlFor="phone" className="mb-3 block text-base font-sans font-medium text-[#07074D]">
                    Phone Number
                </label>
                <input type="text" value={form.phone} name="phone" id="phone" placeholder="Enter your phone number" onChange={handleChange}
                    className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-sans font-medium text-[#07074D]">
                    Email Address
                </label>
                <input type="email" value={form.email} name="email" id="email" placeholder="Enter your email" onChange={handleChange}
                    className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="date" className="mb-3 block text-base font-sans font-medium text-[#07074D]">
                            Date
                        </label>
                        <input type="date" value={form.date} name="date" id="date" onChange={handleChange}
                            className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="time" className="mb-3 block text-base font-sans font-medium text-[#07074D]">
                            Time
                        </label>
                        <input type="time" value={form.time} name="time" id="time" onChange={handleChange}
                            className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>

            <div className="mb-5 pt-3">
                <label className="mb-5 font-sans block text-base font-semibold text-[#07074D] sm:text-xl">
                    Address Details
                </label>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" value={form.area} name="area" id="area" placeholder="Enter area" onChange={handleChange}
                                className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" value={form.city} name="city" id="city" placeholder="Enter city" onChange={handleChange}
                                className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text"  value={form.state} name="state" id="state" placeholder="Enter state" onChange={handleChange}
                                className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" value={form.postCode} name="postCode" id="postCode" placeholder="Post Code" onChange={handleChange}
                                className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button
                    type='submit'
                    className="hover:shadow-form w-full cursor-pointer font-sans rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Book Appointment
                </button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Form