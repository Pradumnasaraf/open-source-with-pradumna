# How to Sign Commits on Github ?

Git is cryptographically secure, but it’s not foolproof. If you’re taking work from others on the internet and want to verify that commits are actually from a trusted source, Git has a few ways to sign and verify work using GPG.

## Step by step process to Sign your commit :

### Step 1 :

For signing commits you need to have git installed on your local machine and get GPG configured and your personal key installed.

To check if you have GPG configured and a personal key installed on your local machine ,type out this command <$ gpg --list-keys> on your terminal

```sh
$ gpg --list-keys
```

 <img width="750" alt="Screenshot 2022-10-03 at 8 02 52 PM" src="https://www.poftut.com/wp-content/uploads/2018/11/img_5bfa8a3061014.png">
 <br/>

### Step 2 :

Download and install the <a href="https://www.gnupg.org/download/">GPG command line tools</a> for your operating system.Generate a key using this command

```sh
$ gpg --gen-key
```

### Step 3 :

Once you have a private key to sign with, you can configure Git to use it for signing things by setting the user.signingkey config setting

```sh
$ git config --global user.signingkey 0A46826A!
```

### Step 4 :

After completeting all the above steps head on to your profile from github

 <div align ="center">
 <img width="250" height="550" alt="Screenshot 2022-10-03 at 8 02 52 PM" src="https://i.postimg.cc/3J969FdB/Screenshot-2022-10-10-232326.png">
 </div>

### Step 5 :

In the "Access" section of the sidebar, click "Emails". Add and verify your email address if it is not verified.

 <div align ="center">
 <img width="400" height="150" alt="Screenshot 2022-10-03 at 8 02 52 PM" src="https://docs.github.com/assets/cb-1827/images/help/settings/add-email-address.png">
 </div>

### Step 6 :

a) In the "Primary email address" group , select your email address through which you want to sign commits.

 <div align ="center">
 <img width="900" height="250" alt="Screenshot 2022-10-03 at 8 02 52 PM" src="https://i.postimg.cc/Bvh7BSbn/Screenshot-2022-10-10-233244.png">
 </div>

b) Make sure that "Keep my email addresses private" checkbox is unchecked.

 <div align ="center">
 <img width="500" height="250" alt="Screenshot 2022-10-03 at 8 02 52 PM" src="https://i.postimg.cc/PJbbfHLj/Screenshot-2022-10-10-233947.png">
 </div>

### Step 7 :

You are all set to sign your commit. To sign a commit, you need to open your terminal or gitbash and While committing changes in your local branch, add the -S flag to the git commit command:

    ```sh
    $ git commit -S -m "YOUR_COMMIT_MESSAGE"
    ```

### Step 8 :

After you create your commit, provide the passphrase you set up when you generated your GPG key and push them to your remote repository on GitHub.

### Step 9 :

On the pull request, click on the commits tab to check your commit is signed or not

 <div align ="center">
 <img width="600" height="50" alt="Screenshot 2022-10-03 at 8 02 52 PM" src="https://i.postimg.cc/Z5BvYZvy/Screenshot-2022-10-11-001248.png">
 </div>
 Click on "Verified" to know more detailed information about the signature

 <div align ="center">
 <img width="800" height="90" alt="Screenshot 2022-10-03 at 8 02 52 PM" src="https://i.postimg.cc/k48y2KVK/Screenshot-2022-10-11-001134.png">
 </div>

#### You have sucessfully signed your commit.
