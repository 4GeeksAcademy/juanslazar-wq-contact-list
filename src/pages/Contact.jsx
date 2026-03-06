import { useNavigate } from "react-router-dom";

export const Contact = () => {
    const navigate = useNavigate();

    return (
        <div className="container mt-3">

            {/* Botón */}
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

            {/* Tarjeta */}
            <div className="row justify-content-center">
                <div className="col-8">

                    <div className="card mb-3 p-3">
                        <div className="row align-items-center">

                            <div className="col-3 text-center">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    className="img-fluid rounded-circle"
                                    alt="contact"
                                />
                            </div>

                            <div className="col-7">
                                <h5 className="mb-2">Mike Anamendolla</h5>

                                <p className="mb-1">
                                    <i className="fa-solid fa-location-dot me-2"></i>
                                    5842 Hillcrest Rd
                                </p>

                                <p className="mb-1">
                                    <i className="fa-solid fa-phone me-2"></i>
                                    (870) 288-4149
                                </p>

                                <p className="mb-0">
                                    <i className="fa-solid fa-envelope me-2"></i>
                                    mike.ana@example.com
                                </p>
                            </div>

                            <div className="col-2 text-start">
                                <i className="fa-solid fa-pencil me-3"></i>
                                <i className="fa-solid fa-trash"></i>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};