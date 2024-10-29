<h1>Basic GitHub Workflow</h1>
<ul>
  <li>Create a Repository: files and project stored in a repo</li>
  <li>Work Locally</li>
  <li>Commit Changes: snapshot of your project at a particular point in time</li>
  <li>Push Changes: uploads your changes to the cloud</li>
  <li>Pull Requests: request to merge changes on main branch for others to review first</li>
  <li>Merge and Deploy</li>
</ul>

<h1>Key Git Commands</h1>
1. git clone
  <p>Copy a repository from GitHub (or another Git host) to your local machine.</p>
  
  ```
git clone <repository-url>
Example:
git clone https://github.com/username/repository.git</p>
```

2. git pull
<p>Fetch and merge changes from the remote repository to your local branch</p>

```
git pull
Example:
git pull origin main
```
4. git add <file>
<p>Stage changes (modified, added, or deleted files) to be included in the next commit.</p>

```
git add <file>
Example:
git add index.html
To stage all changes at once:
git add .
```

5. git commit
  <p>Save your staged changes as a new commit with a message describing the changes.</p>

```
git commit -m "Your commit message here"
```

7. git branch
<p>List, create, or delete branches. Branches allow you to work on different features or fixes independently.</p>

```
List all branches:
git branch

Create a new branch:
git branch <branch-name>

Delete a branch:
git branch -d <branch-name>
```

9. git checkout
<p>Switch to a different branch or restore working tree files.</p>

```
git checkout <branch-name>

To create and switch to a new branch at the same time:
git checkout -b <new-branch-name>
```
