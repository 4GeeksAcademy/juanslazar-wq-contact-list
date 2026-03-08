import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const SLUG = "Juan";
const CONTACTS_URL = `https://playground.4geeks.com/contact/agendas/${SLUG}/contacts`;

export const Contact = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(CONTACTS_URL)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: "set_contacts", payload: data.contacts || [] });
            })
            .catch(err => console.error("Error:", err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="text-center mt-5">Cargando contactos...</p>;

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`https://playground.4geeks.com/contact/agendas/Juan/contacts/${id}`, {
                method: "DELETE"
            });

            if (!res.ok) throw new Error("Error al eliminar");

            dispatch({ type: "delete_contact", payload: id });

        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <div className="container mt-3">

            <div className="row mb-4 mt-3">
                <div className="col-10 text-end">
                    <button
                        className="btn btn-success btn-lg"
                        onClick={() => navigate("/add-contact")}
                    >
                        Add new contact
                    </button>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-8">
                    {store.contacts.length === 0 ? (
                        <p className="text-center text-muted">No contacts yet 😢</p>
                    ) : (
                        store.contacts.map((contact) => (
                            <div key={contact.id} className="card mb-3 p-3">
                                <div className="row align-items-center">

                                    <div className="col-3 text-center">
                                        <img
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            className="img-fluid rounded-circle"
                                            alt="contact"
                                        />
                                    </div>

                                    <div className="col-7">
                                        <h5 className="mb-2">{contact.name}</h5>
                                        <p className="mb-1">
                                            <i className="fa-solid fa-location-dot me-2"></i>
                                            {contact.address}
                                        </p>
                                        <p className="mb-1">
                                            <i className="fa-solid fa-phone me-2"></i>
                                            {contact.phone}
                                        </p>
                                        <p className="mb-0">
                                            <i className="fa-solid fa-envelope me-2"></i>
                                            {contact.email}
                                        </p>
                                    </div>

                                    <div className="col-2 text-start">
                                        <i
                                            className="fa-solid fa-pencil me-3"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => navigate(`/edit-contact/${contact.id}`)}
                                        ></i>

                                        <i
                                            className="fa-solid fa-trash"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleDelete(contact.id)}
                                        ></i>
                                    </div>


                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

        </div>
    );
};
