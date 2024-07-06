import React, { useState } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Registration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        emergencyPhone: '',
        emergencyName: '',
        emergencyRelation: '',
        jerseyNo: '',
        email: '',
        password: '',
        series: '',
        team: '',
        nickname: '',
        dobMonth: '',
        dobDay: '',
        dobYear: '',
        playingRole: '',
        battingStyle: '',
        bowlingStyle: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        profileDescription: '',
        profileImage: null
    });

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });
        
        // try {
        //     const response = await axios.post('http://your-api-endpoint/register', data, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }
        //     });
        //     console.log(response.data);
        // } catch (error) {
        //     console.error('Error submitting form', error);
        // }
    };

    return (
        <div className="registration-container" style={{ marginTop: '100px', overflowY: 'auto', height: 'calc(100vh - 100px)' }}>
            <h2 className="text-center my-4">REGISTER PLAYER</h2>
            <p className="text-center">Please Enter The Following Details</p>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name*</label>
                        <input type="text" className="form-control" id="firstName" required onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name*</label>
                        <input type="text" className="form-control" id="lastName" required onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Gender*</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="genderMale" value="male" required onChange={handleChange} />
                                <label className="form-check-label" htmlFor="genderMale">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="genderFemale" value="female" required onChange={handleChange} />
                                <label className="form-check-label" htmlFor="genderFemale">Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="emergencyPhone" className="form-label">Emergency Phone</label>
                        <input type="tel" className="form-control" id="emergencyPhone" onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="emergencyName" className="form-label">Emergency Name</label>
                        <input type="text" className="form-control" id="emergencyName" onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="emergencyRelation" className="form-label">Emergency Relation</label>
                        <input type="text" className="form-control" id="emergencyRelation" onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="jerseyNo" className="form-label">Jersey No.</label>
                        <input type="number" className="form-control" id="jerseyNo" onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email*</label>
                        <input type="email" className="form-control" id="email" required onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Password*</label>
                        <input type="password" className="form-control" id="password" required onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="series" className="form-label">Series</label>
                        <select className="form-select" id="series" onChange={handleChange}>
                            <option selected>Josh Guthrie Super 40 - 2024-Division 1</option>
                            <option>Another Series</option>
                            <option>Another Series</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="team" className="form-label">Team</label>
                        <select className="form-select" id="team" onChange={handleChange}>
                            <option selected>Select Team</option>
                            <option>Team A</option>
                            <option>Team B</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="nickname" className="form-label">Nick Name</label>
                        <input type="text" className="form-control" id="nickname" onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="dobMonth" className="form-label">Month</label>
                        <input type="number" className="form-control" id="dobMonth" placeholder="Month" onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="dobDay" className="form-label">Day</label>
                        <input type="number" className="form-control" id="dobDay" placeholder="Day" onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="dobYear" className="form-label">Year</label>
                        <input type="number" className="form-control" id="dobYear" placeholder="Year" onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="playingRole" className="form-label">Playing Role</label>
                        <input type="text" className="form-control" id="playingRole" placeholder="Batter" onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="battingStyle" className="form-label">Batting Style</label>
                        <input type="text" className="form-control" id="battingStyle" placeholder="Right Handed Batter" onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="bowlingStyle" className="form-label">Bowling Style</label>
                        <input type="text" className="form-control" id="bowlingStyle" placeholder="Right Arm Medium" onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" id="phone" onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="state" className="form-label">State</label>
                        <input type="text" className="form-control" id="state" onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="postalCode" className="form-label">Postal Code</label>
                        <input type="text" className="form-control" id="postalCode" onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <label htmlFor="profileDescription" className="form-label">Profile Description</label>
                        <textarea className="form-control" id="profileDescription" rows="3" onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <label htmlFor="profileImage" className="form-label">Upload Profile Image</label>
                        <input className="form-control" type="file" id="profileImage" onChange={handleChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Registration;
