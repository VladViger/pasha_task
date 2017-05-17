# "Birthdays entries"
> Simple CRUD Application
***

[Task specification](./SPECIFICATION.md)

### Current Task List:
- configure webpack
- play with fonts
- add width in table columns
- testing in other browsers and screens
- add 'key' in LocalStorageHelper
- add project description in Readme.md
- propTypes in React
- add JSON instead localStorage data (for example)

### Questions:
- jQuery & React?
- #lleo_dialog in <style></style>, wtf?

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