## How to review a PR on our local system ?

Review a PR on our local system allow our administrators or maintainers to check on the changes proposed in pull requests in there local system or request further changes before the pull request is merged by checking the working output on there local system.   
  
## Start Reviewing a PR on our local system.

🔘 Go to the main page of the repository

🔘 Click on `pull request`. In the Pull Request page click on the Pull Request that you want to review on your system.

🔘 Now visit the head branch from where the commit is coming.

🔘 Now copy the source link from code section.

🔘 Open gitbash and you can give `git branch` command to check for existing branch in your local system. 

🔘 Now check for every existing remotes in our local system by `git remote -v` command

🔘 Now add a new remote of the contributor repository by defining it by a variable name `git remote add <variable> <copied-source-link>`.

🔘 Now you can check for the added remote by `git remote -v` command.

🔘 Now give `git fetch <alias> <branch>`

🔘 Now change the main branch to a temporary track branch by command ` git checkout -t <alias>/<branch>`

🔘 Now we have temporary track branch on our local system which we can check by `git branch` commmand. Now we can run the code on our local system.

🔘 Now we can Reiview PR by opening it on our local system code editor.

## Congratulation!! You have successfully reviewed a Pull Request on your local system. 🥳🚀

