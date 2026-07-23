import React from "react";

function App() {

  const office = {
    name: "Tech Park",
    rent: 55000,
    address: "Chennai"
  };

  const officeList = [
    {
      name: "Tech Park",
      rent: 55000,
      address: "Chennai"
    },
    {
      name: "DLF IT Park",
      rent: 75000,
      address: "Coimbatore"
    },
    {
      name: "RMZ Tower",
      rent: 60000,
      address: "Bangalore"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Office Space Rental App</h1>

      <img
        src="https://picsum.photos/300/200"
        alt="Office"
      />

      <h2>Name : {office.name}</h2>

      <h2
        style={{
          color: office.rent <= 60000 ? "red" : "green"
        }}
      >
        Rent : ₹{office.rent}
      </h2>

      <h2>Address : {office.address}</h2>

      <hr />

      <h2>Available Office Spaces</h2>

      {
        officeList.map((item, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>

            <h3>Name : {item.name}</h3>

            <h3
              style={{
                color: item.rent <= 60000 ? "red" : "green"
              }}
            >
              Rent : ₹{item.rent}
            </h3>

            <h3>Address : {item.address}</h3>

          </div>
        ))
      }

    </div>
  );
}

export default App;