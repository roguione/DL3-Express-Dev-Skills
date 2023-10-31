<img src="https://i.imgur.com/vUOu9NW.jpg">


# Express Lab
# My Dev Skills - Part 1

## Intro

You've now seen how we can generate a skeleton Express application and implement the **index** & **show** functionality for a **resource** (To Dos).

Now it's time to practice by doing the very same thing, but for a different data resource - _developer skills_.

##### This lab, combined with Part 2, is a Deliverable

## Setup

1. Move into your `~/code` folder.

2. Scaffold a new app named `express-dev-skills` using express generator (don't forget the `-e` option).

3. `cd express-dev-skills` and install the Node modules with `npm i`.

4. Make the project a local git repo:  `git init`

5. Create a new repo on your **PERSONAL** GitHub account named `express-dev-skills`.  Copy the new repo's URL for use in the next step...

6. Back in Terminal, add the remote:  `git remote add origin <Paste the URL>`

As you make progress, be sure to commit and push your progress.

As always, make the first commit using:

```
git add -A
git commit -m "Initial commit"
git push -u origin main
```

Then subsequent pushes can be made using:

```
git push
```

## Exercises

The goal of the lab is to put in a rep doing everything that you did during the _Express - Routers & Controllers_ lesson:


- Be sure to create an array of "fake" data representing some of your awesome developer skills. The specific properties describing a skill object is up to you! 

- Implement **index** functionality for the `skills` resource

- Implement **show** functionality for the `skills` resource


## Hints

- Keep the data resource name short and simple - something like `skills`.

- Following best-practice routing and MVC will result in the following modules for the `skills` resource:
	- **routes/skills.js**
	- **models/skill.js**
	- **views/skills**
	- **controllers/skills.js**

- Use [RESTful routes](https://git.generalassemb.ly/SEI-Standard-Curriculum/guide-to-add-feature-to-web-app/blob/main/README.md)


## Pt 1 - Bonuses

- Use EJS partial views to make your templates more DRY (see link in Reference section of the lesson) and/or [this link](https://www.npmjs.com/package/ejs#includes).

- Add styling or use a CSS framework to make the app look better :)

### This lab combined with Part 2, which builds upon this lab, is a deliverable. Please submit the URL of your `express-dev-skills` GH repo as directed.

<br/>
<br/>
<br/>
<br/>

# My Dev Skills - Part 2


## Intro

In recent lessons you saw how to use HTML forms and Express middleware, such as:

- `express.urlencoded` (AKA body-parser middleware)
- `method-override`

to perform **Create**, **Update** & **Delete** data operations in an Express application.

This lab builds upon the `express-dev-skills` project you created in the _My Dev Skills - Part 1_ lab where the **Read** data operations were implemented.

##### This Lab is a Deliverable

## Exercises

The goal of the lab is to do put in a rep doing everything that you did during the _Express - Middleware_ lesson by adding the following functionality to the `express-dev-skills` project:

1. Display an _Add Skill_ link on the **index** view that when clicked, displays a **new** view that includes a form for entering a new Dev Skill.

2. When a new Dev Skill is submitted, add the skill to the simulated "database" and redirect the user to the **index** view.

3. On the **show** view, display a _Delete Skill_ button (the submit button within a `<form>`) that when clicked, deletes the skill from the "database" and redirects to the **index** view.

Note: All routes should follow those described in the [RESTful/Resourceful routing chart](https://gist.github.com/jim-clark/17908763db7bd3c403e6)

##### Hints

- Be sure to install, require & mount the `method-override` middleware.

## PT 2 - Bonus Exercises

1. On the **show** view, display an _Edit Skill_ link that when clicked, displays an **edit** view that displays a form for editing that Dev Skill.

2. When the edit Dev Skill form is submitted, the skill should be updated in the "database" then redirect the user back to the **show** view.

    ##### Hints

- The controller action will need to get the Dev Skill being edited using the `Skill` Model and pass it to the **edit** view.
- Prefill `<input>` elements by using the `value` attribute and some EJS tags to write out the data properties of the skill passed in, for example, an `<input>` used to edit a skill's `name` property would look like the following (assuming you passed a `skill` object for the previous hint):

	```html
	<input type="text" name="name" value="<%= skill.name %>">
	```

### This Lab is a Deliverable
Please submit the URL of your `express-dev-skills` GH repo as directed.