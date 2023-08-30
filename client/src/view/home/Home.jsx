import React from "react";
import PageTemplate from "../../template/PageTemplate";

import imagenPortada from "../../assets/imagenPortada.jpg";
import styles from "./Home.module.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const Home = () => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const containerStyle = {
    width: "1000px",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
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
        <div>
          <img className={styles.img} src={imagenPortada} alt="My Image" />
          <div className={styles.nombre}>
            <hr className="border border-5 border-success opacity-50" />
            <p>Clinica Veterinaria Pepita</p>
            <hr className="border border-5 border-success opacity-50" />
          </div>
          <div className={styles.info1}>
            <h3 className="text-white text-center">Horarios de Atencion</h3>
            <p className="text-white text-center">
              Todos los dias desde 8am hasta 8pm
            </p>
          </div>
          <div className={styles.info2}>
            <h3 className="text-white text-center mb-3">Nuestra Ubicacion</h3>
            <p className="text-white text-center">Pasaje Santa Marta #550</p>
          </div>
          <div className={styles.info3}>
            <h3 className="text-white text-center mb-3">Contactenos</h3>
            <p className="text-white text-center">Fono: +569 97419179</p>
            <p className="text-white text-center">Email: vetpepita@gmail.com</p>
          </div>
          <div className="container text-center mt-5 pt-5">
            <h1 className="pt-5 ">Clinica Veterinaria Pepita</h1>
            <p className="container p-5 fs-3">
              Dedicados a cuidar la salud y bienestar de tus mascotas. Somos un
              equipo multidisciplinario y de referencia de la región de
              O'higgins que apostamos a la medicina veterinaria integral y
              especializada
            </p>
          </div>
          <div className="container d-flex justify-content-center">
            {isLoaded ? (
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                >
                {/* Child components, such as markers, info windows, etc. */}
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

export default Home;
