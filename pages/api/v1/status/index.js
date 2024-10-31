import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1+1 as sum;");
  console.log(result.rows);
  response.status(200).json({
    chave:
      "'É justo que muito custe o que muito vale!' #Santa Teresa de Jesus#",
  });
}

export default status;
