# Create a PR Template

Creating a PR template makes it easy to clarify what the proposed changes will do and receive actionable feedback from your team. Having a custom template facilitates clear communication between all team members and ensures that everyone is on the same page.

You can create a PULL_REQUEST_TEMPLATE/ subdirectory in any of the supported folders to contain multiple pull request templates, and use the template query parameter to specify the template that will fill the pull request body.

### Steps to successfully create a PR Template : 
1. There are three ways in which you can create a PR Template:
    a. To make your pull request template visible in the repository's root directory:
    
    Step-1: Create a new file 
     <div align="center">
      <img src="https://user-images.githubusercontent.com/78820926/172212505-5eb9d121-3dcc-4ef2-87dd-06cdcc9e6396.png" />
     </div>
     </br>
     Step-2: Name your file pull_request_template.md
     <div align="center">
      <img src="https://user-images.githubusercontent.com/78820926/172213021-8b8ba111-79c8-4070-a09b-464c0030af33.png" />
     </div>
     </br>
     
     b. To make your pull request template visible in the repository's docs directory, name the pull request template docs/pull_request_template.md:

     Step-1: Create a new file 
     <div align="center">
      <img src="https://user-images.githubusercontent.com/78820926/172212505-5eb9d121-3dcc-4ef2-87dd-06cdcc9e6396.png" />
     </div>
     </br>
     Step-2: To create a directory(folder) type the name and press "/" to make that file as a directory and then name your file pull_request_template.md
       <div align="center">
      <img src="https://user-images.githubusercontent.com/78820926/172213021-8b8ba111-79c8-4070-a09b-464c0030af33.png](https://user-images.githubusercontent.com/78820926/172213945-eec30a04-7331-4dc8-97c9-633024ccf46f.png" />
     </div>
     </br>
     
     c. To store your file in a hidden directory, name the pull request template .github/pull_request_template.md:
     
     Step-1: Create a new file 
     <div align="center">
      <img src="https://user-images.githubusercontent.com/78820926/172212505-5eb9d121-3dcc-4ef2-87dd-06cdcc9e6396.png" />
     </div>
     </br>
      <div align="center">
      <img src="https://user-images.githubusercontent.com/78820926/172212505-5eb9d121-3dcc-4ef2-87dd-06cdcc9e6396.png](https://user-images.githubusercontent.com/78820926/172214830-3f858f92-da44-41ec-82cb-1325ec3d7742.png" />
     </div>
     </br>

2. To create multiple pull request templates and use the template query parameter to specify a template to fill the pull request body, type .github/PULL_REQUEST_TEMPLATE/, then the name of your pull request template. For example, .github/PULL_REQUEST_TEMPLATE/pull_request_template.md. You can also store multiple pull request templates in a PULL_REQUEST_TEMPLATE subdirectory within the root or docs/ directories.
     <div align="center">
      <img src="https://user-images.githubusercontent.com/78820926/172219084-9e10026b-583c-4c19-821f-479069dbf821.png" />
     </div>
     </br>


3. After creating the pull_request_template.md file you have to write the body of the new file, add your pull request template. This could include:
     a. A reference to a related issue in your repository.
     b. A description of the changes proposed in the pull request.
     c. Mention the person or team responsible for reviewing proposed changes.
     
     Here is the demo of a template:
     <div align="center">
      <img src="https://user-images.githubusercontent.com/78820926/172215461-89812839-a0fd-4614-b5f5-10242dd78328.png" />
     </div>
     </br>
     
     Here is the Video of the complete demo:

https://user-images.githubusercontent.com/78820926/172220057-d4ddb29d-8767-4567-badd-5a9fa4afec9b.mov

#### That's it. You have sucessfully created a PR Template 🎉
