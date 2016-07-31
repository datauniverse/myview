# My View
My View is a web based application that gives a view into the data that is provided by the Open Government Data platform.

#Pre-requisites

The source code for this project was seeded form the below mentioned angular-seed app. So having a look at the readme of angular seed will be worthwhile.

https://github.com/angular/angular-seed

NodeJS and NPM has to be installed in the development machine.
Install NodeJS from the link https://nodejs.org/en/ and then install npm by entering the following command in the command line.
Note: Start the command interpreter as Administrator in Windows and make sure you have sudo permission while doing the same on Linux.

```
npm install npm -g
```

# Getting Started - If you want to run

* Clone the source to local git

```
git clone <clone-url-for-this-project>
```

* Navigate to the newly created project directory

```
cd myview
```

* Install all the npm packages

```
npm install
```

* Run the application

```
npm start
```

* Hit Ctrl-c on the command line to stop serving the application

# Getting Started - If you want to make changes

* Clone the source to local git

```
git clone <clone-url-for-this-project>
```

* Navigate to the newly created project directory

```
cd myview
```

* Change the local git branch to the one you want to make changes to

```
git branch <your-branch-name>
git checkout <your-branch-name>
```

Note: Please replace <your-branch-name> with the your branch name

* Make your changes by editing the files that you intend to change.

* To check the files that have changes at any stage use the command below.

```
git status
```

* When you feel the changes are complete or you want to commit your changes, execute the below commands

```
git add .
git commit -m "<comment-message>"
```

Note: Replace <comment-message> with a meaningful one liner message as to what is being committed.

* To push the changes committed to git repo execute the below command

```
git push --set-upstream origin <your-branch-name>
```

* You can request for a merge of this branch to the master by creating a pull request on this branch in github.
