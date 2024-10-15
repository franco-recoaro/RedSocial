const URL_REGISTROCUENTAS = "http://localhost:3001/registroNuevo";

async function registroNuevaCuenta(formDatos) {
  try {
    let response = await fetch(URL_REGISTROCUENTAS, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(formDatos),
      credentials: 'include'
      
    });

    // Verifica si la respuesta fue exitosa
    if (!response.ok) {
      const data = await response.json();
      alert(data.msgError || "Error en la solicitud");
      return;
    }

    const data = await response.json();
    alert(data.msg);
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

export { registroNuevaCuenta };
