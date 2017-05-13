# "Users"
> Simple CRUD Application
***

[Task specification](./SPECIFICATION.md)

### Current Task List:
- add more vilidation rules in data of Birthd field
- to fix warning from moment date formatting in EditEntry component
- add styles, build HTML in components
- add in 'logOut confirm' modal window
- configure webpack
- maybe delete index.ejs

***

### Structure DataBase (LocalStorage):

```javascript
{
	usersData: {
		id: {
			name: string,
			email: string,
			dateOfBirth: string
		},
		anotherUserId: {...}
	},
	usersPass: {
		id: string
	}
}
```

***

### Structure app Store:

```javascript
{
	currentUserId: string || null,
	entries: [
		{
			id: string,
			name: string,
			email: string,
			dateOfBirth: string
		},
		{...}
	]
}
```