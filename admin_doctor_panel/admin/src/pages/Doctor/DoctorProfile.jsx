import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const DoctorProfile = () => {
    const { dToken, profileData, setProfileData, getProfileData } = useContext(DoctorContext)
    const { currency, backendUrl } = useContext(AppContext)
    const [isEdit, setIsEdit] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedImage(URL.createObjectURL(file))
            setProfileData(prev => ({ ...prev, imageFile: file }))
        }
    }
    

    const updateProfile = async () => {
        try {
            const formData = new FormData()
            formData.append('address', profileData.address)
            formData.append('fees', profileData.fees)
            formData.append('about', profileData.about)
            formData.append('available', profileData.available)
            formData.append('email', profileData.email) 
             

            // Include image file if selected
            if (profileData.imageFile) {
                formData.append('image', profileData.imageFile)
            }

            const { data } = await axios.post(
                `${backendUrl}/api/doctor/update-profile`,
                formData,
                {
                    headers: {
                        dToken,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )

            if (data.success) {
                toast.success(data.message)
                setIsEdit(false)
                getProfileData()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    useEffect(() => {
        if (dToken) {
            getProfileData()
        }
    }, [dToken])

    return profileData && (
        <div>
            <div className='flex flex-col gap-4 m-5'>
                <div>
                    <img 
                        className='bg-primary/80 w-full sm:max-w-64 rounded-lg' 
                        src={selectedImage || profileData.image} 
                        alt="Profile" 
                    />
                    {isEdit && (
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageChange} 
                            className='mt-2'
                        />
                    )}
                </div>

                <div className='flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white'>
                    <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{profileData.name}</p>
                    <div className='flex items-center gap-2 mt-1 text-gray-600'>
                        <p>{profileData.degree} - {profileData.speciality}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{profileData.experience}</button>
                    </div>

                    <div className='mt-3'>
                        <p className='text-sm font-medium text-[#262626]'>Email:</p>
                        {isEdit
                            ? <input 
                                type='email' 
                                onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))} 
                                className='w-full outline-primary p-2' 
                                value={profileData.email} 
                              />
                            : <p className='text-gray-600'>{profileData.email}</p>
                        }
                    </div>

                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-[#262626] mt-3'>About:</p>
                        <p className='text-sm text-gray-600 max-w-[700px] mt-1'>
                            {isEdit
                                ? <textarea 
                                    onChange={(e) => setProfileData(prev => ({ ...prev, about: e.target.value }))} 
                                    className='w-full outline-primary p-2' 
                                    rows={8} 
                                    value={profileData.about} 
                                  />
                                : profileData.about
                            }
                        </p>
                    </div>

                    <p className='text-gray-600 font-medium mt-4'>
                        Appointment fee: <span className='text-gray-800'>{currency} 
                        {isEdit ? 
                            <input 
                                type='number' 
                                onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} 
                                value={profileData.fees} 
                            /> 
                            : profileData.fees}
                        </span>
                    </p>

                    <div className='flex gap-2 py-2'>
                        <p>Address:</p>
                        <p className='text-sm'>
                            {isEdit ? 
                                <input 
                                    type='text' 
                                    onChange={(e) => setProfileData(prev => ({ ...prev, address: e.target.value }))} 
                                    value={profileData.address} 
                                /> 
                                : profileData.address}
                        </p>
                    </div>

                    <div className='flex gap-1 pt-2'>
                        <input 
                            type="checkbox" 
                            onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))} 
                            checked={profileData.available} 
                        />
                        <label>Available</label>
                    </div>

                    {isEdit
                        ? <button onClick={updateProfile} className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all cursor-pointer'>Save</button>
                        : <button onClick={() => setIsEdit(prev => !prev)} className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all cursor-pointer'>Edit</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default DoctorProfile
