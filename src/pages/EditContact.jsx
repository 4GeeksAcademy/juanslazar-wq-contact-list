import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const EditContact = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { store, dispatch } = useGlobalReducer();

    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", address: ""
    });

    useEffect(() => {
        const contact = store.contacts.find(c => c.id === parseInt(id));
        if (contact) setFormData(contact);
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://playground.4geeks.com/contact/agendas/Juan/contacts/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error("Error al actualizar");

            const updated = await res.json();
            dispatch({ type: "update_contact", payload: updated });
            navigate("/");

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-10">
                    <h1 className="text-center mb-4">Edit contact</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Save changes</button>
                        <Link to="/" className="d-block mt-2">or get back to contacts</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
