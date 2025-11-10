const express = require('express');
const UsuariosRoutes = require('./src/routes/UsuariosRoutes');
const PessoasRoutes = require('./src/routes/PessoasRoutes');
// const VehiclesRoutes = require('./src/routes/VehiclesRoutes');
// const CitiesRoutes = require('./src/routes/CitiesRoutes');
// const RefuelsRoutes = require('./src/routes/RefuelsRoutes');
// const MaintenanceRoutes = require('./src/routes/MaintenanceRoutes');
// const MetricsRoutes = require('./src/routes/MetricsRoutes');
// const LoginRoutes = require('./src/routes/LoginRoutes');
const app = express();

app.use(express.json());
app.use('/api', UsuariosRoutes, PessoasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

