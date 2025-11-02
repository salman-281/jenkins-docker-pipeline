"use client";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaPhoneAlt, FaEnvelope, FaCity, FaMapMarkerAlt, FaRegClock, FaCalendarAlt, FaGlobe, FaHashtag } from "react-icons/fa";
import { deleteUser, getUserById, updateUser } from "../_action/action";

interface User {
    _id: string;
    name: string;
    phone: string;
    email: string;
    date: string;
    time: string;
    area: string;
    city: string;
    state: string;
    postCode: string;
}

const Cards = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [update, setUpdate] = useState<any>({});


    const getUserByIdForm = async (id: string) => {
        const response = await getUserById(id);
        setUpdate(response.user)
    };

    const [toogleForm, setToogleForm] = useState(false)
    const [edit, setEdit] = useState({
        _id: "",
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        area: "",
        city: "",
        state: "",
        postCode: "",
    })


    useEffect(() => {
        if (update) {
            setEdit({
                _id: update._id || "",
                name: update.name || "",
                phone: update.phone || "",
                email: update.email || "",
                date: update.date || "",
                time: update.time || "",
                area: update.area || "",
                city: update.city || "",
                state: update.state || "",
                postCode: update.postCode || "",
            });
        }
    }, [update]);

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value,
        })
    }


    const fetchData = async () => {
        const response = await fetch("/api/v1/register");
        const userData = await response.json();
        setUsers(userData.users);
    };

    const onEdit = (id: string) => {
        getUserByIdForm(id)
        setToogleForm(true)
    }

    const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let response = await updateUser(edit._id, edit);
        if (response.success) {
            alert('Data submitted successfully')
        }
        setEdit({
            _id: '',
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
        setToogleForm(false)
        fetchData()
    }



    const onDelete = async (id: string) => {
        let response = await deleteUser(id);
        console.log(response);
        if (response.success) {
            alert('User deleted successfully');
            fetchData();
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-gray-50 py-10 px-6">

            {
                toogleForm
                    ?
                    <div className=" min-h-[700px] w-[500px]  transition-all duration-300 rounded-2xl p-6">
                        <h1 className="py-3 text-3xl text-gray-600 text-center font-sans font-bold">Edit User</h1>
                        <form onSubmit={handleEditSubmit}>
                            <div className="mb-5">
                                <label htmlFor="name" className="mb-3 block text-base font-sans font-medium text-[#07074D]">
                                    Full Name
                                </label>
                                <input type="text" value={edit.name} name="name" id="name" placeholder="Full Name" onChange={handleEditChange}
                                    className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="phone" className="mb-3 block text-base font-sans font-medium text-[#07074D]">
                                    Phone Number
                                </label>
                                <input type="text" value={edit.phone} name="phone" id="phone" placeholder="Enter your phone number" onChange={handleEditChange}
                                    className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="mb-3 block text-base font-sans font-medium text-[#07074D]">
                                    Email Address
                                </label>
                                <input type="email" value={edit.email} name="email" id="email" placeholder="Enter your email" onChange={handleEditChange}
                                    className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label htmlFor="date" className="mb-3 block text-base font-sans font-medium text-[#07074D]">
                                            Date
                                        </label>
                                        <input type="date" value={edit.date} name="date" id="date" onChange={handleEditChange}
                                            className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label htmlFor="time" className="mb-3 block text-base font-sans font-medium text-[#07074D]">
                                            Time
                                        </label>
                                        <input type="time" value={edit.time} name="time" id="time" onChange={handleEditChange}
                                            className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
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
                                            <input type="text" value={edit.area} name="area" id="area" placeholder="Enter area" onChange={handleEditChange}
                                                className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <input type="text" value={edit.city} name="city" id="city" placeholder="Enter city" onChange={handleEditChange}
                                                className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <input type="text" value={edit.state} name="state" id="state" placeholder="Enter state" onChange={handleEditChange}
                                                className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <input type="text" value={edit.postCode} name="postCode" id="postCode" placeholder="Post Code" onChange={handleEditChange}
                                                className="w-full rounded-md border font-sans border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                <button
                                    type='submit'
                                    className="hover:shadow-form w-full cursor-pointer font-sans rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                    Save
                                </button>

                                <button
                                    onClick={() => setToogleForm(false)}
                                    className="hover:shadow-form w-full cursor-pointer font-sans rounded-md bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                    Cancel
                                </button>
                            </div>

                        </form>

                    </div>
                    :
                    <div className="min-h-screen w-full bg-gray-50 py-10 px-6">
                        <h1 className="text-3xl font-sans font-bold text-center text-gray-800 mb-10">
                            User Management
                        </h1>

                        <div className="grid grid-cols-1 font-sans sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {users.length > 0 ? (
                                users.map((user, index) => (
                                    <div
                                        key={index}
                                        className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-100 p-6 relative"
                                    >
                                        {/* Header */}
                                        <div className="flex justify-between items-start mb-4">
                                            <h2 className="text-xl font-semibold text-gray-800">
                                                {user.name || "Unnamed User"}
                                            </h2>
                                            <div className="flex space-x-3">
                                                <button
                                                    onClick={() => onEdit(user._id)}
                                                    className="text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
                                                    title="Edit User"
                                                >
                                                    <FaEdit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => onDelete(user._id)}
                                                    className="text-red-600  cursor-pointer hover:text-red-800 transition-colors"
                                                    title="Delete User"
                                                >
                                                    <FaTrashAlt size={18} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Info section */}
                                        <div className="text-gray-600 space-y-3 text-sm">
                                            <p className="flex items-center gap-2">
                                                <FaPhoneAlt className="text-blue-500" /> {user.phone || "-"}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <FaEnvelope className="text-blue-500" /> {user.email || "-"}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <FaCalendarAlt className="text-blue-500" /> {user.date || "-"}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <FaRegClock className="text-blue-500" /> {user.time || "-"}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <FaMapMarkerAlt className="text-blue-500" /> {user.area || "-"}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <FaCity className="text-blue-500" /> {user.city || "-"}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <FaGlobe className="text-blue-500" /> {user.state || "-"}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <FaHashtag className="text-blue-500" /> {user.postCode || "-"}
                                            </p>
                                        </div>

                                        {/* Footer */}
                                        <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400 text-right">
                                            Last updated: {new Date().toLocaleDateString()}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500 col-span-full">
                                    No users found.
                                </p>
                            )}
                        </div>
                    </div>
            }


        </div>
    );
};

export default Cards;
