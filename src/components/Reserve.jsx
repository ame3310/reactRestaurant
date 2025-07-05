// src/components/Reserve.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reserve = () => {
  const [formData, setFormData] = useState({ name: "", date: "", guests: 1 });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Sanitización básica: evitar caracteres potencialmente peligrosos
    const sanitizedValue = value.replace(/[<>{}();]/g, "");

    if (name === "guests") {
      // Validación estricta de número entero
      const numberValue = parseInt(sanitizedValue, 10);
      if (isNaN(numberValue) || numberValue < 1 || numberValue > 24) {
        setError("Número de personas debe ser entre 1 y 24.");
        return;
      }
      setError("");
      setFormData({ ...formData, [name]: numberValue });
    } else {
      setFormData({ ...formData, [name]: sanitizedValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.date || !formData.guests) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    localStorage.setItem("reserveData", JSON.stringify(formData));
    navigate("/");
  };

  return (
    <div className="card p-4 shadow">
      <h2>Make a Reservation</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            className="form-control"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Día y hora</label>
          <input
            className="form-control"
            name="date"
            type="datetime-local"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Número de personas (máximo 24)</label>
          <input
            className="form-control"
            name="guests"
            type="number"
            min="1"
            max="24"
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-success" type="submit">
          Reservar
        </button>
      </form>
    </div>
  );
};

export default Reserve;
