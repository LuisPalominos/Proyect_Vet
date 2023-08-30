import React from "react";
import PageTemplate from "../template/PageTemplate";

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
          <div className="container d-flex justify-content-between align-items-center my-5 py-5 px-5">
            <div className="text-center text-white col-3 fs-3 bg-success border rounded-5 p-5 ms-5">
              N° de Telefono: +569 97419179
            </div>
            <div className="text-center text-white col-3 fs-4 bg-success border rounded-5 p-5 me-5">
              Email: vetpepita@gmail.com
            </div>
          </div>
          <div className="container d-flex justify-content-between align-items-center px-5">
            <div className="text-center text-white col-3 fs-4 bg-success border rounded-5 p-5 ms-5">
              Horarios de Atencion: Todos los dias desde 8am hasta 8pm
            </div>
            <div className="text-center text-white col-3 fs-3 bg-success border rounded-5  p-5 me-5">
              Nuestra Ubicacion: Pasaje Santa Marta #550
            </div>
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
