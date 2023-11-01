test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

//aqui faremos uma requisição get co uma funçaõ assincrona no endpoint status,
// o await aguarda que a requisição tenha sido concluida resultando no statusCode 200 OK.
