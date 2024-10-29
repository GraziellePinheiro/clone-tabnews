function status(request, response) {
  response.status(200).json({
    chave:
      "'É justo que muito custe o que muito vale!' #Santa Teresa de Jesus#",
  });
}

export default status;
