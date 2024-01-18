function LocationSect() {
    return (
      <div className="mapSection">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.439427637318!2d-73.1126056241738!3d7.074943716507923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683ff5284cf3bd%3A0x21d1547224b7ed37!2sParqueadero%20PARKAR!5e0!3m2!1ses-419!2sca!4v1705339070730!5m2!1ses-419!2sca"
          width="1200"
          height="400"
          style={{ border: '0' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
  
  export default LocationSect;
  