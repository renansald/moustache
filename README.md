# Simple e-commerce
This project is a simple e-commerce page with only one product, where you can choose the size and add it to your cart.

## Installation
To install this project, simply clone or download this repository.

You will need to have Node.js 19 or higher installed on your machine.

You will also need to have Yarn installed. If you prefer, you can use other package managers like npm or pnpm.

After cloning the repository, navigate to the project directory and update all dependencies by running the following command:

```bash
yarn
#or
npm install
#or
pnpm install
```
## Usage
To start the development server, run the following command:

```bash
yarn start
# or
npm run start
# or
pnpm start
```
Open http://localhost:3000 in your browser to see the application.

## Test

This project includes two types of tests: E2E (end-to-end) tests and component tests, all created using Cypress.

To run component tests, use the following command:

```bash
yarn test:component
#or
npm run test:component
#or
pnpm test:component
```

To run E2E tests, use the following command:

```bash
yarn test:integration
#or
npm run test:integration
#or
pnpm test:integration
```
## Run on Docker

Running this application in a Docker container allows you to see how the build will work and test it as a production environment.

To run this application in a Docker container, you will need to have Docker installed. After that, just use the following commands:

```bash
    docker build -t <name_of_image> . 
    docker run -d -p 80:80 <name_of_image>
```
In the example above, I am redirecting the container port 80 to my computer's port 80, but you can change it as needed.

## Contributing
Contributions, such as bug fixes or new features, are always welcome. Feel free to submit a pull request.

## License
This project is licensed under the MIT License.