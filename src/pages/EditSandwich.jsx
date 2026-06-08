import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "../components/Form";
import "../styles/EditSandwich.css";

export const EditSandwich = () => {
  const [sandwich, setSandwich] = useState(null);
  // console.log(sandwich);
  const { sandwichId } = useParams();
  const navigate = useNavigate();

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/sandwiches/${sandwichId}`,
      );
      // console.log(response.data);
      setSandwich(response.data);
      setStateForm(response.data);
    } catch (error) {
      console.log(error);
    }
  };
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
    setIsLoading(true);
    e.preventDefault();
    const body = stateForm;
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/sandwiches/${sandwichId}`,
        body,
      );
      navigate("/sandwiches");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  return (
    <div className="edit-page">
      <h1>This is EditSandwich component...</h1>;
      <Form
        onChange={handleChange}
        stateForm={stateForm}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};
