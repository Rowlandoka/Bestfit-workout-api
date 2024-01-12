const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
	openapi: '3.0.0',
	info: {
		title: 'Bestfit WOD API',
		version: '1.0.0',
		description:
			'This is a REST API application made with Express. It retrieved daily workouts from db.json.',
		license: {
			name: 'Licensed Under MIT',
			url: 'https://spdx.org/licenses/MIT.html',
		},
	},
	servers: [
		{
			url: 'http://localhost:3000',
			description: 'Development server',
		},
	],
};

const options = {
	swaggerDefinition,
	apis: ['./src/v1/routes/workoutRoutes.js', './src/database/Workout.js'],
};

// const options = {
// 	definition: {
// 		openapi: '3.0.0',
// 		info: {
// 			title: 'Bestfit WOD API',
// 			version: '1.0.0',
// 			description:
// 				'This is a REST API application made with Express. It retrieved daily workouts from db.json',
// 		},
// 	},
// 	apis: ['./src/v1/routes/workoutRoutes.js', './src/database/Workout.js'],
// };

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
	app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

	app.get('/api/v1/docs.json', (req, res) => {
		res.setHeader('Content-Type', 'application/json');
		res.send(swaggerSpec);
	});
	console.log(
		`Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
	);
};

module.exports = { swaggerDocs };
