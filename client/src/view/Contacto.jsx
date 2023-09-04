import React, { useState } from "react";
import axios from "axios";


import PageTemplate from "../template/PageTemplate";


import Card from "react-bootstrap/Card";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Contacto = () => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const containerStyle = {
    width: "600px",
    height: "600px",
  };

  const center = {
    lat: -34.18303,
    lng: -70.71659,
  };

  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    consult: "",
  });
  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDMbcQLrL6imuFVRqKbMYr8qdpWGXD-hUs",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    axios
          .post(
            "https://getform.io/f/acf0a66e-006a-41df-be3f-82a468409e5c",
            formData,
            { headers: { Accept: "application/json" } }
          )
          .then(function (response) {
            setFormStatus(true);
            setQuery({
              name: "",
              email: "",
              consult: "",
            });
            setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
            setLoading(false);
          });
  };




  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div>
      <PageTemplate>
        <div className="container text-center mt-5">
          <h1>Contactenos</h1>
          <hr className="border border-3 border-success opacity-50" />
        </div>
        <div className="container text-center  my-5 p-3 col-3 border rounded-5 bg-success">
          <h3 className="text-white mb-4">Mandenos sus consultas</h3>
          <div className="form">
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <div className="form-group my-3">
                <span
                  className="input-group-text bg-success text-white"
                  id="inputGroup-sizing-default"
                >
                  Full Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={query.name}
                  onChange={handleChange()}
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div className="form-group my-3">
                <span
                  className="input-group-text bg-success text-white"
                  id="inputGroup-sizing-default"
                >
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={query.email}
                  onChange={handleChange()}
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div className="form-floating">
                <span
                  className="input-group-text bg-success text-white"
                  id="inputGroup-sizing-default"
                >
                  Consulta
                </span>
                <textarea
                  className="form-control"
                  id="floatingTextarea"
                  name="consult"
                  value={query.consult}
                  onChange={handleChange()}
                ></textarea>
              </div>
              <button
                type="submit"
                className="mx-1 btn btn-dark btn-sm py-0 my-3"
              >
                Enviar
              </button>
              {formStatus && <p className="text-white">Message sent.</p>}
            </form>
          </div>
        </div>
        <div className="container text-center mt-5">
          <h1>Informacion de Contacto</h1>
          <hr className="border border-3 border-success opacity-50 mb-5" />
        </div>
        <div className="d-flex container justify-content-between mt-5">
          <div className="container mx-5 d-flex flex-column justify-content-between">
            <Card
              bg="success"
              text="white"
              border="success"
              className="rounded-5 "
            >
              <Card.Body>
                <Card.Title className="fs-2">N° de Telefono:</Card.Title>
                <Card.Text className="fs-3">+569 97419179</Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg="success"
              text="white"
              border="success"
              className="rounded-5 "
            >
              <Card.Body>
                <Card.Title className="fs-2">Email:</Card.Title>
                <Card.Text className="fs-3">vetpepita@gmail.com</Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg="success"
              text="white"
              border="success"
              className="rounded-5 "
            >
              <Card.Body>
                <Card.Title className="fs-2">Horarios de Atencion:</Card.Title>
                <Card.Text className="fs-3">
                  Todos los dias desde 8am hasta 8pm
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg="success"
              text="white"
              border="success"
              className="rounded-5"
            >
              <Card.Body>
                <Card.Title className="fs-2">Nuestra Ubicacion:</Card.Title>
                <Card.Text className="fs-3">Pasaje Santa Marta #550</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {
                  <Marker
                    key="marker_2"
                    title="Clinica Veterinaria Pepita"
                    position={{
                      lat: -34.18303,
                      lng: -70.71659,
                    }}
                  />
                }
                <></>
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
        </div>
      </PageTemplate>
    </div>
  );
};

export default Contacto;
