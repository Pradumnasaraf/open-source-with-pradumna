## What is Branches in Git ?
Git Branch is a new or separate version of main repository. A Git project can have more than one branch, branches create another line of development in the project. The primary or default branch in Git is the master branch.
 

## Why we need branches ?

Branches are important because when you want to add a new feature or fix a bug, you create a new branch to summarize your changes.

## Steps to create a new Branch -

### We will see two method first with github UI & last with git commands-

## First how you can create a branch with Github UI -

### Step 1 :

Go to your Repositories and open that repo in which you want to create a new branch

### step 2 :

When you open it you will see something like this.

![Screenshot 2022-10-17 183416](https://user-images.githubusercontent.com/101302425/196191504-cdb9123b-eb0c-464e-b9b6-b6d3d96bdd5b.png)

### step 3 :

When you click on main button you can see that you are currently on your default main branch 

![Screenshot 2022-10-17 183445](https://user-images.githubusercontent.com/101302425/196199879-fcb536bb-b86d-4245-af09-9b603b913218.png)

### step 4 :


To create a new branch click on input box and type name of your branch and below you will see " Create Branch " just click on that


![Screenshot 2022-10-17 184122](https://user-images.githubusercontent.com/101302425/196201870-e3aa5a31-f191-4c25-8bf5-ef7eab121c95.png)


### step 5 : 

After clicking on create branch you will see a message on the top saying "Branch Created" and you automatically switched to new branch.

![Screenshot 2022-10-17 184159](https://user-images.githubusercontent.com/101302425/196202757-867200f4-4422-4921-b4bd-f48346962118.png)

### Done. You have sucessfully switched to the new branch, now you can start working in your new Branch 🎉

## Second way to create a branch by using traditional command line -

### Step 1 :

To create a new branch use this command

git branch <new_branch_name>

![1](https://user-images.githubusercontent.com/101302425/196212319-dcd11f74-5749-4af9-85e3-c1eb47452f7c.png)

### Step 2 :

After creating new branch, to list all of the branches use this command

git branch -a

![2 1](https://user-images.githubusercontent.com/101302425/196213040-3bd0df50-a8a4-45a5-827e-704a73f7abc7.png)

### Step 3 :

After creating a new branch you have to switch to the new branch for that use this command

git checkout <new_branch_name>


![3](https://user-images.githubusercontent.com/101302425/196214305-2f2ec046-dca8-4ad8-81fc-99e0f04be000.png)


## Done. You have sucessfully switched to the new branch, now you can start working in your new Branch 🎉
