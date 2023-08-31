import React from "react";
import PageTemplate from "../template/PageTemplate";

import Card from "react-bootstrap/Card";

import { GoogleMap, useJsApiLoader, Marker} from "@react-google-maps/api";

const Contacto = () => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const containerStyle = {
    width: "1000px",
    height: "400px",
  };

  const center = {
    lat: -34.18303,
    lng: -70.71659,
  };

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
        <div className="d-flex container mt-3  align-items-center flex-column">
          <div className="container d-flex justify-content-between align-items-center my-5 p-5">
              <Card style={{ width: "25rem", height: "15rem" }} bg="success" text="white" border="success" className="ms-5">
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <Card.Title className="fs-2">N° de Telefono:</Card.Title>
                    <Card.Text className="fs-3">
                        +569 97419179
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: "25rem", height: "15rem" }} bg="success" text="white" border="success" className="me-5">
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <Card.Title className="fs-2">Email:</Card.Title>
                    <Card.Text className="fs-3">
                    vetpepita@gmail.com
                    </Card.Text>
                  </Card.Body>
                </Card>
          </div>
          <div className="container d-flex justify-content-between align-items-center px-5">
                <Card style={{ width: "25rem", height: "15rem" }} bg="success" text="white" border="success" className="ms-5">
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <Card.Title className="fs-2">Horarios de Atencion:</Card.Title>
                    <Card.Text className="fs-3 px-5">
                    Todos los dias desde 8am hasta 8pm
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: "25rem", height: "15rem" }} bg="success" text="white" border="success" className="me-5">
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <Card.Title className="fs-2">Nuestra Ubicacion:</Card.Title>
                    <Card.Text className="fs-3">
                    Pasaje Santa Marta #550
                    </Card.Text>
                  </Card.Body>
                </Card>
          </div>
          <div className="container d-flex justify-content-center my-5 pt-5">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {
                  <Marker key="marker_1"
                  title= 'Clinica Veterinaria Pepita'
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
