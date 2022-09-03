## What is a pull request ?
 
A pull request is a method for submitting contributions to a repository, with some extra changes made by the individual. 
Now there are two ways of creating a pull request, the procedure is mostly the same the only thing that differs is the method. A pull request could either be made with the help of using the github UI or making changes locally on your machine via terminal.
We are going to cover both of these methods here.

### Let's start with general procedure of creating a pull request:-
1) Creating a fork of the repository is essential. Now what does a fork mean, it is nothing but a clone of the repository where you are free to make your respective changes. 
2) Where to find the fork button

![Screenshot 2022-06-06 at 19-27-47 Updated syntax by gullapalli9482 · Pull Request #17000 · mdn_content](https://user-images.githubusercontent.com/75060398/172175467-0be75024-3e74-42a1-837d-b3e9c1b5f995.png)

One can find this on the top-right corner of the repository home page.

3) After clicking on the the fork button one might observe something like this with their github handle along with the repo name.

![image](https://user-images.githubusercontent.com/75060398/172176326-f4760b41-910a-409d-bf8b-90cc82e6b7fe.png)

4) In case you observe this you have succesfully created a fork of the project

#### Now let's cover how to create a pull request via the github UI

1) Now since you have already forked the project ,just go to the file you want to edit, you might a notice a pencil icon at the top right corner of the file

![image](https://user-images.githubusercontent.com/75060398/172180663-0fdfe56d-02d9-422c-9528-6f2c74302eb5.png)

2) Click on it, now one would be able to edit the file. After making the desired changes at the bottom of the screen you might observe an option to commit your changes

![image](https://user-images.githubusercontent.com/75060398/172181128-305dfde6-2c58-419f-b0a1-6ccc60fd9863.png)

3) Give it a necessary name for the commits you've done, add in some description if required. Here comes the most important step , by default you find the "commit directly to the main branch" being selected, change the option to the `Create a new branch for this commit and start a pull request`. 
**Why commit changes to a new branch instead of directly commiting to the code?**
Because of various security reasons and the changes made by you wouldn't directly get merged into the main branch, they would be done after being accepted by the reviewer.
By selecting the 2nd option a separate branch is created for you, which you can name or use the auto-generated one. After clicking on commit changes button, you would be directed to the pull request page which looks similar to the one below -

![image](https://user-images.githubusercontent.com/75060398/172183076-1dafe09d-6196-42b4-8557-adffcdf88e65.png)

4) Give your pull request a proper name according to the contributing guidelines and a proper description if necessary and select the create pull request button at the bottom. You have successfully created your very first pull request!


#### Now let's cover the method of creating a pull request the traditional way
1) Fork the repository you want to contribute to.
2) Now select the code button and copy the link present under the HTTPS section


![image](https://user-images.githubusercontent.com/75060398/172184258-3e6f0b18-20ea-4ada-b8d9-da82cf07affa.png)


3) Once that's done, open the terminal on your machine and type `git clone 'paste the link you have copied here'`
4) Move to the working directory using the `cd` command 
5) In order to begin contributing, one has to create a branch which could be done using the following command `git checkout -b 'branch name' `
6) In case you are using git for the very first time don't forget your mail and name
7) One can now make changes at ease by shifting to their desired directory 
8) Once the changes have been made, you need to add those changes which could be done using the following command `git add . or git add filename`
9) One can track the status of the files they edited using `git status`
10) In case your files are added one would notice them in green highlighted text else it would be in red.
11) Once that's done all that's left is to create a commit which could be done using `git commit -m 'necessary message`
12) Last but not the least we have to push our branch to the original branch name which could be done using the command `git push origin 'branch name'`

After typing the command you might notice the terminal to hang for a few seconds, it would ask you details of your github account.
After filling them in it would give you appropriate message and displays two links, the first link is the one for creating you pull request.
Open it up in your new browser, give your pull request a proper name and some description about it,tag some issues in case it resolves any of them.
And you have successfully created your pull request 🥳 🥳!!!!

