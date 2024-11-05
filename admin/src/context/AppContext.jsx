import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const Backend_Url = 'https://hmb.up.railway.app'
    const navigate = useNavigate();
    
    const [isAdmin, setIsAdmin] = useState(true);
    const [isDoctor, setIsDoctor] = useState(true);
    const [docInfo, setDocInfo] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [isAvailable, setIsAvailable] = useState(false)

    // login
    const adminLogin = async (formData) => {
        try {
            const res = await axios.post(`${Backend_Url}/admin/login`, formData, {withCredentials: true});
            if(res.status === 200) {
                toast.success('login successful');
                setIsAdmin(true);
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.msg || "Login failed");
        }
    }

    const DoctorLogin = async (formData) => {
        try {
            const res = await axios.post(`${Backend_Url}/doctor/login`, formData, {withCredentials: true});
            if(res.status === 200) {
                toast.success('login successful');
                setIsDoctor(true);
                navigate('/doctorDashboard');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.msg || "Login failed");
        }
    }

    // logout
    const adminLogout = async() => {
        try {
            const res = await axios.get(`${Backend_Url}/admin/logout`, {withCredentials: true});
            if(res.status === 200) {
                toast.success('Logout Successfull');
                setIsAdmin(false);
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.msg || "Login failed");
        }
    }

    const doctorLogout = async() => {
        try {
            const res = await axios.get(`${Backend_Url}/doctor/logout`, {withCredentials: true});
            if(res.status === 200) {
                toast.success('Logout Successfull');
                setIsDoctor(false);
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.msg || "Login failed");
        }
    }

    // check authorization
    const checkAuth = async () => {
        try {
            const res = await axios.get(`${Backend_Url}/admin/isAdmin`, { withCredentials: true });
            if (res.status === 200) {
                setIsAdmin(true);
            }
        } catch (error) {
            setIsAdmin(false);
            console.error('Authorization check failed', error);
        }
        try {
            const res = await axios.get(`${Backend_Url}/doctor/isAuth`, { withCredentials: true });
            if (res.status === 200) {
                setIsDoctor(true);
            }
        } catch (error) {
            setIsDoctor(false);
            console.error('Authorization check failed', error);
        }
    };

    // add a new Doctor
    const addNewDoctor = async (formData) => {
        try {
            const res = await axios.post(`${Backend_Url}/doctor/addNewDoctor`, formData, {withCredentials: true});
            if(res.status === 200) {
                toast.success('new Doctor added');
                await getDoctors();
                navigate('/allDoctors');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.msg || "failed to add");
        }
    }

    // get all Doctors
    const getDoctors = async()=> {
        try {
            const res = await axios.get(`${Backend_Url}/doctor/getDoctors`);
            if(res.status === 200) {
                setDoctors(res.data.doctors);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.msg || "failed to fetch");
        }
    }

    // Function to fetch doctor information by ID
    const fetchDoctorInfo = async(id) => {
        try {
            const res = await axios.get(`${Backend_Url}/doctor/getDoctorInfo/${id}`);
            if(res.status === 200) {
                setDocInfo(res.data.doctor);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.msg || "failed to fetch");
        }
    };

    // Handle available checkbox toggle
     const handleAvailabilityChange = async (id) => {
        try {
            const res = await axios.get(`${Backend_Url}/doctor/changeAvail/${id}`);
            if (res.status === 200) {
                getDoctors();
                setIsAvailable(!isAvailable);
            }
        } catch (error) {
            console.log('Failed to change availability', error);
        }
    };

    // get All Doctors
    const getAllDoctors = async () => {
        try {
            const res = await axios.get(`${Backend_Url}/doctor/getDoctors`);
            if (res.status === 200) {
                return res.data.doctors.length;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // get All Appointments
    const getAllAppointments = async () => {
        try {
            const res = await axios.get(`${Backend_Url}/appointment/allAppointments`);
            if (res.status === 200) {
                return res.data.allAppointments;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // get All Users
    const getAllUsers = async () => {
        try {
            const res = await axios.get(`${Backend_Url}/user/allUsers`);
            if (res.status === 200) {
                return res.data.totalUsers;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // get a doctor
    const getCurrDoctor = async () => {
        try {
            const res = await axios.get(`${Backend_Url}/doctor/getDoctor`, {withCredentials : true});
            if (res.status === 200) {
                return res.data.currDoctor;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // get a doctors appointments
    const getDoctorAppointments = async (id) => {
        try {
            const res = await axios.get(`${Backend_Url}/doctor/appointments/${id}`);
            if (res.status === 200) {
                return res.data.appointments;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // cancel appointment
    const cancelAppointment = async (appointmentId) => {
        try {
            const res = await axios.get(`${Backend_Url}/appointment/cancelDocAppointment/${appointmentId}` , { withCredentials: true });
            if (res.status === 200) {
                toast.success(res.data.msg);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.msg || "Failed to cancel appointment");
        }
    };

    // confirm appointment
    const confirmAppointment = async (appointmentId) => {
        try {
            const res = await axios.get(`${Backend_Url}/appointment/confirmAppointment/${appointmentId}` , { withCredentials: true });
            if (res.status === 200) {
                toast.success(res.data.msg);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.msg || "Failed to cancel appointment");
        }
    };

    // some useEffects
    useEffect(()=> {
        checkAuth();
        getDoctors();
    },[])

    // Update availability state when docInfo is fetched
    useEffect(() => {
        if(docInfo) {
            setIsAvailable(docInfo.available);
        }
    }, [docInfo]);

    return (
        <AppContext.Provider value={{ adminLogin, DoctorLogin, adminLogout, doctorLogout, isAdmin, isDoctor, addNewDoctor, doctors, docInfo , fetchDoctorInfo, handleAvailabilityChange, isAvailable, getAllAppointments, getAllDoctors, getAllUsers, getCurrDoctor, getDoctorAppointments, cancelAppointment, confirmAppointment }}>
            {children}
        </AppContext.Provider>
    );
};
