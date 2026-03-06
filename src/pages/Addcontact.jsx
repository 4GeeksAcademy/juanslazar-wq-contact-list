import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Addcontact = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Nuevo contacto:", formData);

        navigate("/");
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-10">

                    <h1 className="text-center mb-4">Add a new contact</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            save
                        </button>

                        <Link to="/" className="d-block mt-2">
                            or get back to contacts
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    );
};