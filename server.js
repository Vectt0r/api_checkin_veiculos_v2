const express = require('express');
const UsersRoutes = require('./src/routes/UsersRoutes');
console.log('>>> Testando dotenv:', process.env.DB_NAME, process.env.DB_USER, process.env.DB_HOST);


// const VehiclesRoutes = require('./src/routes/VehiclesRoutes');
// const CitiesRoutes = require('./src/routes/CitiesRoutes');
// const RefuelsRoutes = require('./src/routes/RefuelsRoutes');
// const MaintenanceRoutes = require('./src/routes/MaintenanceRoutes');
// const MetricsRoutes = require('./src/routes/MetricsRoutes');
// const LoginRoutes = require('./src/routes/LoginRoutes');
const app = express();

app.use(express.json());
app.use('/api', UsersRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

