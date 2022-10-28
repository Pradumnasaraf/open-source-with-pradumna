## How to review a PR on our local system ?

Review a PR on our local system allow our administrators or maintainers to check on the changes proposed in pull requests in there local system or request further changes before the pull request is merged by checking the working output on there local system.   
  
## Start Reviewing a PR on our local system.

🔘 Go to the main page of the repository

![hello world](https://user-images.githubusercontent.com/94779733/197356608-7215b944-7c88-4226-a847-b2122d4632f3.png)

🔘 Click on `pull request`. In the Pull Request page click on the Pull Request that you want to review on your system.

![3](https://user-images.githubusercontent.com/94779733/197357321-9a66cfa3-50f9-428d-9c83-72d6e23f7e8b.png)

![new2](https://user-images.githubusercontent.com/94779733/197357414-ba94234b-ce16-47a5-be36-ca7928c436a8.png)

🔘 Now visit the head branch from where the commit is coming.

![new3](https://user-images.githubusercontent.com/94779733/197357453-5baaf383-3734-40ea-80dd-76abd670ddcb.png)

🔘 Now copy the source link from code section.

![new4](https://user-images.githubusercontent.com/94779733/197357469-b6b08e80-5ac7-4987-9df2-e01b16dd7fd0.png)

🔘 Open gitbash and you can give `git branch` command to check for existing branch in your local system. 

![6](https://user-images.githubusercontent.com/94779733/197357501-8ab36037-d75b-4b55-bd17-56f40e378f41.png)

🔘 Now check for every existing remotes in our local system by `git remote -v` command

![7 (2)](https://user-images.githubusercontent.com/94779733/197357991-b5c8a166-8196-4c9d-9be4-c585afe85f2e.png)

🔘 Now add a new remote of the contributor repository by defining it by a variable name `git remote add <variable> <copied-source-link>`.

![7](https://user-images.githubusercontent.com/94779733/197358018-8cd9fa99-2a32-4787-b2fa-42cd9b3e8046.png)

🔘 Now you can check for the added remote by `git remote -v` command.

![8](https://user-images.githubusercontent.com/94779733/197357549-32c3b3aa-08e2-47b5-afc7-b3738eb52586.png)

🔘 Now give `git fetch <alias> <branch>`

![9-10 (2)](https://user-images.githubusercontent.com/94779733/197357608-e9ceeecf-3212-484d-aa3b-dfb59f4035b9.png)

🔘 Now change the main branch to a temporary track branch by command ` git checkout -t <alias>/<branch>`

![9-10](https://user-images.githubusercontent.com/94779733/197357647-7495d5d6-c9ab-45c2-b37b-550373659452.png)

🔘 Now we have temporary track branch on our local system which we can check by `git branch` commmand. Now we can run the code on our local system.

![11](https://user-images.githubusercontent.com/94779733/197357692-d1a29250-739f-406e-9fbf-38e6fa1dea4b.png)

🔘 Now we can Reiview PR by opening it on our local system code editor.

## Congratulation!! You have successfully reviewed a Pull Request on your local system. 🥳🚀

