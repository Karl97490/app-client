import "../styles/AddSandwich.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";
import axios from "axios";

export const AddSandwich = () => {
  const initialStateForm = {
    name: "",
    nickname: "",
    location: {
      country: "",
      city: "",
    },
    ingredients: {
      lettuce: "",
      cheese: "",
      meat: "",
      vegies: "",
      sauce: "",
    },
    image: "",
    description: "",
  };

  const [stateForm, setStateForm] = useState(initialStateForm);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const section = e.target.dataset.section;

    if (section) {
      setStateForm((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: value,
        },
      }));
      return;
    }

    setStateForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = stateForm;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/sandwiches`,
        body,
      );
      navigate("/sandwiches");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addsandwich-page">
      <h2>This is AddSandwich component...</h2>
      <Form
        onChange={handleChange}
        stateForm={stateForm}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
