![thumbnail](.github/thumbnail.png)

<p align="center">
    Online teaching platform made with React Native using Typescript during the<a src="https://nextlevelweek.com"> NLW (Next Level Week) #02</a>🚀
</p>

## Layout:

![expand](.github/expand.png)


### Content
* [Getting Started](#Getting-Started-)
    * [Cloning](#Cloning)
    * [Requirements](#Requirements)
        * [Web](#Web)
        * [Server](#Server)
    * [Running](#Running)
* [Issues](#Issues-)
    * [Report](#Report)
    * ~~Trouble Shooting~~
* [Contributing](#Contributing-)
* [License](#License-)

### Getting Started 🚀

#### Cloning

```ps
# Clone the repository using git
$ git clone https://github.com/thalesousa/proffy.git

# Access the project folder
$ chdir proffy
```

#### Requirements
* [Node.js](https://nodejs.org/en)
* [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
* [Expo](https://expo.io/)

##### Web

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ chdir web
$ yarn install
```

>The above command will install all third party dependencies used. If you want to install manually all the dependencies follow the steps bellow

```ps
# Entering in web directory
$ chdir web

# Installing depencies
$ yarn add @types/react-router-dom -D
```

##### Server 

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ chdir server
$ yarn install
```

>The above command will install all third party dependencies used. If you want to install manually all the dependencies follow the steps bellow

```ps
# Entering in server directory
$ chdir server

# Installing depencies
$ yarn add @types/cors -D
$ yarn add @types/express -D
$ yarn add ts-node-dev -D
$ yarn add knex
$ yarn add sqlite3
```

#### Running

To start the Web Server run the command

```ps
# Entering in web directory
$ chdir web

# Run the web server
$ yarn start
```

To start the Back Server run the command

```ps
# Entering in Server directory
$ chdir server

# Run the Back Server
$ yarn start
```

### Issues 🐛

#### Report

In case you are having any problem do not be shy to report to us in [Issues](https://github.com/thalesousa/proffy/issues/) session.

### Contributing 🤝 

There are many forms to contribute with the project, first of all you can give this github repo a Star.

If you want do help with the code follow the steps bellow

```ps
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.
$ gh repo fork thalesousa/proffy

# Clone your fork
$ git clone {your-fork-url}
$ chdir proffy

# Create a branch with your feature
$ git checkout -b {branch-name}

# Make the commit with your changes
$ git commit -m 'Feat: {feature-name}'

# Send the code to your remote branch
$ git push origin {branch-name}
```

Then send a Pull Request that will be analyzed and approved if it helps with the project


### License 📝
This project is under the MIT license. See the [LICENSE](https://github.com/thalesousa/proffy/blob/master/LICENSE) for more information.