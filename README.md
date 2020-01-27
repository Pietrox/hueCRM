<p align="center">
  <a href="http://huecrm.com/" target="blank"><img src="https://i.postimg.cc/nVdnWHrT/hueCRM.png" width="320" alt="Nest Logo" /></a>
</p>
  <p align="center">Modern CRM based on NestJS framework backend, MongoDB database, Angular 8 frontend and Nebular </a>.</p>
    <p align="center">


## Description

Online CRM project for web based business. Based on Nx workspace, Angular front-end and NestJS backend.

## Installation

```bash
$ git clone https://github.com/hueSoft/hueCRM.git
$ npm install
$ mv .env.dev.example .env
Edit .env according your needs - should work out of the box if AUTH_TOKEN is set, example value is not secure
```

Rename .env.dev.example to .env to initiate development mode
Make sure you have correct config to the database and port according to your machine.

## Running the app

```bash
# Rename the .env.dev.example to .env
# app - will run on port 4200
npm run serve:hue-crm
# api - will run on port 3000
nx serve api 

```
To access swagger with default development config go to http://localhost:3000/api/docs
There is still no installation for first user. So you need to setup MongoDB and set the values for user collection according to the ./libs/schemas/src/lib/user.schema.ts
## Support

hueCRM is an MIT-licensed open source project. It can grow thanks to developers willing to spend their own time to help grow the project and of course sponsors but that will be available much later.

## Stay in touch

- Author - [Piotr Szymanowski] (https://github.com/Pietrox)
- Website - [https://huecrm.com - still in making](https://huecrm.com/)

## License

  hueCRM is [MIT licensed](LICENSE).
