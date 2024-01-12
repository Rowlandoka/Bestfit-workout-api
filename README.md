# BestFit Workout API

BestFit Workout is a REST API application made with Express and Nodejs. It seek to enable gym owners manage daily workouts, incorporating exercise from different sports and activitites.It retrieves workout data from [db.json] a local database created for this project, it also implemented the CRUD functionality by enabling owners create, read, update and delete workouts.

## Installation

First, clone the repository:

```sh
git clone https://github.com/Rowlandoka/Bestfit-workout-api test-api

```

Replace `test-api` with the directory name of your choosing.

Next, run the following commands to start the Express server:

```sh
cd test-api
npm install
npm run dev

```

**Navigate** to `localhost:3000/workouts` to see the API. You should see workouts data from `db.json` a local database for this project.

This API currently provides a Workouts resource only. It corresponds to the `/workouts` endpoints. You can use POST and DELETE with this route, but no changes are actually made to the JSONPlaceholder data, and none of your data is stored. See the [usage examples](#usage-examples) to start experimenting!

## Sample JSONPlaceholder User

```sh
{
			"id": "61dbae02-c147-4e28-863c-db7bd402b2d6",
			"name": "Fredrick Mark",
			"mode": "For Time",
			"equipment": ["barbell", "rope"],
			"exercises": [
				"21 thrusters",
				"12 rope climbs, 15 ft",
				"15 thrusters",
				"9 rope climbs, 15 ft",
				"9 thrusters",
				"6 rope climbs, 15 ft"
			],
			"createdAt": "12/21/2023, 2:21:56 PM",
			"updatedAt": "12/21/2023, 2:21:56 PM",
			"trainerTips": [
				"Split the 21 thrusters as needed",
				"Try to do the 9 and 6 thrusters unbroken",
				"RX Weights: 115lb/75lb"
			]
		}
```

## Usage Examples

The following examples use a base URL of `http://localhost:3000/workouts`, which is the default development server for Express.

**GET /workouts**

Retrieve a list of workouts:

```sh
curl http://localhost:3000/workouts
```

**GET /workouts/{workoutId}**

Retrieve a single workout:

```sh
curl http://localhost:3000/workouts/61dbae02-c147-4e28-863c-db7bd402b2d6
```

**POST /workouts**

Create a workout:

```sh
curl -H "Content-Type: application/json" -d '{"name":"Fredrick Mark", "mode": "For Time"}' http://localhost:3000/workouts
```

**PUT /workouts/{workoutId}**

Update a workout:

```sh
curl -H "Content-Type: application/json" -X PUT -d '{"name":"Fredrick Mark", "mode": "For Time"}' http://localhost:3000/workouts/61dbae02-c147-4e28-863c-db7bd402b2d6
```

**DELETE /workouts/{workoutId}**

Delete a workout:

```sh
curl -X DELETE http://localhost:3000/workouts/61dbae02-c147-4e28-863c-db7bd402b2d6
```
