const sendData = ({ password, email }) => {

    fetch('https://cotiza-bitcoin.onrender.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password,
            email
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.status === 'ok') {
                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido',
                    text: 'Iniciaste sesion correctamente',
                    showConfirmButton: false,
                    timer: 1500
                })


            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Datos incorrectos',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
}

export default sendData