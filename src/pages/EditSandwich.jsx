import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingPage } from "./LoadingPage";
import { Form } from "../components/Form";
import "../styles/EditSandwich.css";

export const EditSandwich = () => {
  const [stateForm, setStateForm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const { sandwichId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/sandwiches/${sandwichId}`,
      );
      // console.log(response.data);
      setIsLoading(false);
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
    setIsEditing(true);
    e.preventDefault();
    const body = stateForm;
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/sandwiches/${sandwichId}`,
        body,
      );
      setIsEditing(false);
      console.log(response);
      navigate("/sandwiches");
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  if (isLoading) {
    return <LoadingPage page="load" />;
  }

  if (isEditing) {
    return <LoadingPage page="edit" />;
  }
  return (
    <div className="edit-page">
      <Form
        onChange={handleChange}
        stateForm={stateForm}
        onSubmit={handleSubmit}
        isEditing={isEditing}
      />
    </div>
  );
};
