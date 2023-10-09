function status(request, response) {
  response.status(200).json({ chave: "Vai vencer!" });
}

export default status;
