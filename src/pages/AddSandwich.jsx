import "../styles/AddSandwich.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";
import axios from "axios";

export const AddSandwich = () => {
  const initialStateForm = {
    name: null,
    nickname: null,
    location: {
      country: null,
      city: null,
    },
    ingredients: {
      lettuce: null,
      cheese: null,
      meat: null,
      vegies: null,
      sauce: null,
    },
    votes: {
      likes: 0,
      unlikes: 0,
      avg_like: 0,
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IhYauSkWSHOi8sApOhS4324lrXdo10Nh0g&s",
    description: null,
    breadId: null,
  };

  const [stateForm, setStateForm] = useState(initialStateForm);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const section = e.target.dataset.section;
    // console.log(name, value);

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
    setIsLoading(true);
    e.preventDefault();
    const body = stateForm;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/sandwiches`,
        body,
      );
      setIsLoading(false);
      console.log(response.data);
      navigate("/sandwiches");
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  return (
    <div className="add-page">
      <h2>This is AddSandwich component...</h2>
      <Form
        onChange={handleChange}
        stateForm={stateForm}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};
